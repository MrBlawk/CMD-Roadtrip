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
    const canvas = document.getElementById('c');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 10;
    hlight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
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

    // geometry added
    var geometry = new THREE.BoxGeometry(1, 1, 1);

    // material, color
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, wireframe: true } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add(cube);

    camera.position.z = 3;

    var update = function( ){
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.005; 
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