import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

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
    controls.maxDistance = 50;

    const loader = new GLTFLoader()
    loader.load('/models/Blender-kamer-leeuwarden.glb', function(glb){
        console.log(glb)
        const root = glb.scene;
        root.scale.set(0.3, 0.3, 0.3)
        scene.add(root);
    }, function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    }, function(error){
        console.log("An error occured")
    })


    
    // creathe sphere

    // Sphere 1
    var geometry = new THREE.SphereGeometry( 2,32,16);
    var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet2.png') } );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.receiveShadow = true;
    scene.add(sphere);

    sphere.position.x = -35;


    // Sphere 2    
    var material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet1.png') } );
    var sphere2 = new THREE.Mesh(geometry, material2);
    sphere2.receiveShadow = true;

    scene.add( sphere2 );

    sphere2.position.x = 30;
    sphere2.position.y = 20;

    // Sphere 3
    var material3 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet3.png') } );
    var sphere3 = new THREE.Mesh(geometry, material3);
    sphere3.receiveShadow = true;

    scene.add( sphere3 );

    sphere3.position.x = 10;
    sphere3.position.y = 20;
    sphere3.position.z = 30;


    // Sphere 4
    var material4 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet4.png') } );
    var sphere4 = new THREE.Mesh(geometry, material4);
    sphere4.receiveShadow = true;

    scene.add( sphere4 );

    sphere4.position.x = -30;
    sphere4.position.y = 20;
    sphere4.position.z = 10;

    // Sphere 5
    var material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet5.png') } );
    var sphere5 = new THREE.Mesh(geometry, material5);
    sphere5.receiveShadow = true;

    scene.add( sphere5 );

    sphere5.position.x = -10;
    sphere5.position.y = 10;
    sphere5.position.z = 15;

    // Sphere 6
    var material6 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet6.png') } );
    var sphere6 = new THREE.Mesh(geometry, material6);
    sphere6.receiveShadow = true;

    scene.add( sphere6 );

    sphere6.position.x = 5;
    sphere6.position.y = 5;
    sphere6.position.z = 30;

    // Sphere 7
    var material7 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet7.png') } );
    var sphere7 = new THREE.Mesh(geometry, material7);
    sphere7.receiveShadow = true;

    scene.add( sphere7 );

    sphere7.position.x = 20;
    sphere7.position.y = -5;
    sphere7.position.z = 30;

    // Sphere 8
    var material8 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/Planeet8.png') } );
    var sphere8 = new THREE.Mesh(geometry, material8);
    sphere8.receiveShadow = true;

    scene.add( sphere8 );

    sphere8.position.x = 10;
    sphere8.position.y = 20;
    sphere8.position.z = 15;

    // camera position
    camera.position.z = 40;

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

    // game logic
    var update = function( ){
        // sphere.rotation.x += 0.01;
        sphere.rotation.y += -0.001;
        sphere2.rotation.y += 0.001;
        sphere3.rotation.y += 0.01;
        sphere4.rotation.y += 0.02;
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

