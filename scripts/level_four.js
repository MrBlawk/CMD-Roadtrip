import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';


var objects = [];

var scene = new THREE.Scene( ); 
    var camera =  new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);

  //skybox stuff
  //settingup the materialarray and defining the textures to a let.
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
  let texture_rt = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
  let texture_lt = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
  let texture_up = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
  let texture_dwn = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
  let texture_bk = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');

  //pushing the materials to the array.
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_lt}));
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_dwn}));
  materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));

  for(let i=0;i<6;i++)
    materialArray[i].side = THREE.BackSide;

  let skyboxGeo = new THREE.BoxGeometry(100,100,100);
  let skybox = new THREE.Mesh(skyboxGeo,materialArray);
  scene.add(skybox);

    var renderer = new THREE.WebGLRenderer( {alpha:true, antialias:true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio(window.device)
    renderer.setClearColor( 0xffffff, 0);
    document.body.appendChild( renderer.domElement);

    window.addEventListener( 'resize', function( ){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height );
        camera.aspect = width / height;
        camera.updateProjectionMatrix( );
    } );

    // controls
    let controls = new OrbitControls( camera, renderer.domElement );

    let root;
    const loader = new GLTFLoader()
    loader.load('/models/Blender-kamer-leeuwarden.glb', function(glb){
        root = glb.scene;
        root.scale.set(0.1, 0.1, 0.1)
        root.rotation.set(0,2,0)
        scene.add(root);
    }, function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    }, function(error){
        console.log("An error occured")
    })


    var geometry2 = new THREE.SphereGeometry( 2,32,16);
    var material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet1.png') } );
    var sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.receiveShadow = true;

    objects.push(sphere2);
    scene.add( sphere2 );

    sphere2.position.x = 15;
    sphere2.position.y = 10;
    
    // creathe sphere
     var geometry = new THREE.SphereGeometry( 2,32,16);
    // var cubeMaterials = [
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } )
    // ];
 
    // create material, colour or image texture

    


    var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet2.png') } );
    var sphere = new THREE.Mesh( geometry, material );
    objects.push(sphere);
    scene.add(sphere);

    sphere.position.x = -10;
    camera.position.z = 30;

    var sLight = new THREE.SpotLight(0xFFFFFF, 1);
    sLight.position.set(-99,100,99)

    sLight.castShadow = true;

    sLight.shadow.mapSize.width = 1024;
    sLight.shadow.mapSize.height = 1024;

    sLight.shadow.camera.near = 500;
    sLight.shadow.camera.far = 4000;
    scene.add(sLight);

    var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5)
    scene.add( ambientLight );

    controls.maxDistance = 50;

    document.addEventListener('mousemove', onDocumentMouseOver, false)
    document.addEventListener('mousedown', onDocumentMouseDown, false)

    // game logic
    var update = function( ){
        // sphere.rotation.x += 0.01;
        sphere.rotation.y += -0.001;
        sphere2.rotation.y += 0.001;
        root.rotation.x += 0.0001;
        root.rotation.y += 0.0001;
    };

    // draw scene 
    var render = function ( ){
    renderer.render(scene, camera);
    };


    // run game loop (update, render, repeat)
    var GameLoop = function ( ){
    requestAnimationFrame(GameLoop);


    update( );
    render( );
    }; 

    GameLoop( );

    //mouse over effects

    function onDocumentMouseOver(event){

        var mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse,camera);
        var intersects = raycaster.intersectObjects(objects);

        if (intersects && intersects.length > 0){ 
        document.body.style.cursor = 'pointer';} 
        else 
        { document.body.style.cursor = 'default' }

    }

    function onDocumentMouseDown(event){
        event.preventDefault();

        let intersects = [];
        var mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 -1; 
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse,camera);
        
        for(let i = 0; i < objects.length; i++)
        {
            intersects[i] = raycaster.intersectObjects(objects[i]);
        }


        if(intersects && intersects.length > 0)
        {
            document.getElementById("planetText").innerHTML = "Je hebt op " + this.intersects + " geklikt."
        } 
        
    }

