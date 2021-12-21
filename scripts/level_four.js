import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';




var planets = [];
var minors = ["artandsound", "concepting", "gd3d", "bad", "ondernemen", "sds", "tnw", "neuromarketing"];

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();


var scene = new THREE.Scene( ); 
    var camera =  new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
    // camera position
    camera.position.set(0, 15, 50)



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
    controls.enableZoom = false;
    controls.enablePan = false;


    // let root;
    // const loader = new GLTFLoader()
    // loader.load('/models/Blender-kamer-leeuwarden.glb', function(glb){
    //     root = glb.scene;
    //     root.scale.set(0.1, 0.1, 0.1)
    //     root.rotation.set(0,2,0)
    //     scene.add(root);
    // }, function(xhr){
    //     console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    // }, function(error){
    //     console.log("An error occured")
    // })


    // create minor planets

    var planetX = [-18,     -10,      -6,     -3,     5,    8,   15,    20]
    var planetY = [0,       10,      -1,      8,     16,    0,   15,    2]
    var planetZ = [0,       10,      -10,     -5,    -8,     0,   5,    0]

    function createSpheres(type){
        for(let i = 0; i < minors.length; i++)
        {
            switch (minors[i]) {
                case "artandsound":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;
                case "concepting":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;
                case "gd3d":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;    
                case "bad":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;     
                case "ondernemen":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;
                case "sds":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;
                case "tnw":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;    
                case "neuromarketing":
                    createMesh(minors[i], planetX[i], planetY[i], planetZ[i]);
                    break;       
                default:
                    break;
            }
        }

        function createMesh(texture, x, y, z){
            var geometry = new THREE.SphereGeometry(2, 32, 16);
            var material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/' + texture + ".png")})
            var sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(x, y, z)
            sphere.userData.name = texture;
            console.log(sphere.userData.name)
            planets.push(sphere);
            scene.add(sphere);
        }
    }



    //creating lightsources for the scene
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




    // game logic
    var update = function( ){
        // sphere.rotation.x += 0.01;
    };

    // draw scene 
    var render = function ( ){
    renderer.render(scene, camera);
    };

    //start creating the planets
    createSpheres();

    window.addEventListener('mousedown', onDocumentMouseDown, false);


    // run game loop (update, render, repeat)
    var GameLoop = function ( ){
    requestAnimationFrame(GameLoop);

    planets.forEach(function(element){
        //element.rotation.x += returnRandom();
        element.rotation.y += returnRandom();
        element.rotation.z += returnRandom();
    })

    update( );
    render( );
    }; 

    GameLoop( );

    //mouse over effects
    function onDocumentMouseDown(event){
        
        //event.preventDefault();


        //update mousepos
        mouse.x = (event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight ) * 2 + 1;

        //find the intersections

        var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
        vector.unproject(camera);
        var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

        //make raycasts that check for objects that are in the planets array
        var intersects = ray.intersectObjects(planets);

        if(intersects.length > 0)
        {
            let selectedPlanet = intersects[0].object.userData.name;
            console.log(selectedPlanet);
        
            document.getElementById("planetText").innerHTML = selectedPlanet;
        }
    }

    function returnRandom(){
        let varNum = Math.random() * (0.0008 - -0.0005);
        return varNum;
    }
