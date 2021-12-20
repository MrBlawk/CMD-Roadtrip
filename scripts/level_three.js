
let sections = gsap.utils.toArray(".city");
let car = document.querySelector(".van-img");
let obj;
let scrollLength = 7000;
car.autoAlpha = 0;

//scrolling first basic layer
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#levelThree",
    start: "0",
    pin: true,
    scrub: 1,
    //snap: 0 / (sections.length * 3),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=" + scrollLength,

  }
});

//move car
gsap.to(car, {
    xPercent: 630,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+=" + (scrollLength),

    }
})

// //fade-out car
// gsap.to(car, {
//     autoAlpha: 0,
//     scrollTrigger:{
//         trigger: "#levelFour",
//         start: "-=1500",
//         scrub: 2,
//         end: "+=" + scrollLength ,

//     }
// })



//background layer parallax movement

let bg = document.querySelectorAll(".staticbg")

gsap.to(bg, {
    xPercent: -20,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+=" + scrollLength,
    }
})

let px3 = document.querySelectorAll(".parallax-1")
//3rd layer (bg+1)
gsap.to(px3, {
    xPercent: +20,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+=" + scrollLength,
    }
})

//cloud generating code

let cloud;
let container;
function CloudEngine(){
    obj = "<img id='cloud' style='position: absolute;' src='./img/parallax_asset/Sheet2/clouds.png' alt=''>"
    container = document.getElementById("cloudLayer");  
    container.innerHTML += obj;  
    cloud = document.getElementById("cloud");
    cloud.style.left = "110%%";
    translate(cloud, "-500");

}

function translate(e, x){
    console.log("x is: " + x);
    var left = parseInt( css( e, 'left' ), 10 ),
        dx = left - x,
        i = 1,
        count = 3000,
        delay = 1;

    function loop() {
        
        if(e.style.left === -1500 )
        {
            console.log("x point reached");
            e = null;
            CloudEngine();
        }

        if ( i >= count ) { return; }
        if(i === count -1){
            container.removeChild(cloud);
            CloudEngine();
        }
        i += 1;
        e.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
        setTimeout( loop, delay );
    }
    
    loop();


}

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

CloudEngine();


//begin 3d canvas

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
    const canvas = document.getElementById("observatorium")

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 10;
    hlight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xff0000, 0);
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
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: true } );
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





