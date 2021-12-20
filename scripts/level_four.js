import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene( ); 
    var camera =  new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 500);

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


    var geometry2 = new THREE.SphereGeometry( 15,32,16);
    var material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/mars-uv-map.jpeg') } );
    var sphere2 = new THREE.Mesh(geometry2, material2);

    scene.add( sphere2 );

    sphere2.position.x = 30;
    sphere2.position.y = 20;
    
    // creathe sphere
     var geometry = new THREE.SphereGeometry( 15,32,16);
    // var cubeMaterials = [
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } ),
    //     new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load('img/61jn9dLLVYL._AC_SL1500_.jpg'), side: THREE.DoubleSide } )
    // ];
 
    // create material, colour or image texture


    var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./img/01-3.jpeg') } );
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere);

    sphere.position.x = -35;

    camera.position.z = 40;

    
    var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8  )
    scene.add( ambientLight )
    // game logic
    var update = function( ){
        // sphere.rotation.x += 0.01;
        sphere.rotation.y += -0.01;
        sphere2.rotation.y += 0.01;
    };

    // draw scene 
    var render = function ( ){
    renderer.render(scene, camera);
    };


    // run game loop (update, render, repeat)
    var GameLoop = function ( ){
    requestAnimationFrame( GameLoop);

    update( );
    render( );
    }; 

    GameLoop( );

