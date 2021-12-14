import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

var scene, camera, hlight, renderer;

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
    renderer.setSize(width, height, false);

    }
    return needResize;
}


function init() {
    const canvas = document.getElementById("communitybase");

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 10;
    hlight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xffffff, 0);
    canvas.appendChild(renderer.domElement);


    function render(time) {
    time *= 0.0001;

    if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    }

    // resize
    window.addEventListener( 'resize', function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize( width, height );
        camera.aspect = width / height;
        camera.updateProjectionMatrix( );
    } );


    let sphere;
    var loader = new THREE.TextureLoader();
    loader.load("./img/venus.jpg", function (texture){


        // geometry added
        const geometry = new THREE.SphereGeometry( 1, 32, 16 );
        const material = new THREE.MeshBasicMaterial( {map: texture, overdraw: 0.5} );
        sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
    }); 




    camera.position.z = 3;

    var update = function( ){
        sphere.rotation.x += 0.0001;
        sphere.rotation.y += 0.0005; 
    };

    var render = function( ){
    renderer.render(scene, camera);
    };

    var GameLoop = function ( ){
        requestAnimationFrame( GameLoop );

        update( );
        render( );
    };

    GameLoop( );

  

    requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

init();