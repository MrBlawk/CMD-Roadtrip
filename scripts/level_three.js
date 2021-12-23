
let sections = gsap.utils.toArray(".city");
let car = document.querySelector(".van-img");
let obj;
let scrollLength = 15000
car.autoAlpha = 0;

//scrolling first basic layer
gsap.to(sections, {
  xPercent: -104 * (sections.length - 1),
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
    xPercent: 600,
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
    xPercent: -80,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+15000"
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
    obj = "<img id='cloud' style='position: absolute;' src='./img/parallax_asset/wolkjes.png' alt=''>"
    container = document.getElementById("cloudLayer");  
    container.innerHTML += obj;  
    cloud = document.getElementById("cloud");
    cloud.style.left = "101%";
    translate(cloud, "-1900");
}

function translate(e, x){
    console.log("x is: " + x);
    var left = parseInt( css( e, 'left' ), 10 ),
        dx = left - x,
        i = 1,
        count = 3000,
        delay = 20;

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
import StarrySkyShader from './StarrySkyShader.js';

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

    var skyDomeRadius = 300;
    var sphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
        skyRadius: { value: skyDomeRadius },
        env_c1: { value: new THREE.Color('#0d1a2f') },
        env_c2: { value: new THREE.Color('#ea8ff2') },
        noiseOffset: { value: new THREE.Vector3(10, 100.01, 100.01) },
        starSize: { value: 0.01 },
        starDensity: { value: 0.09 },
        clusterStrength: { value: 0.2 },
        clusterSize: { value: 0.1 },
    },
    vertexShader: StarrySkyShader.vertexShader,
    fragmentShader: StarrySkyShader.fragmentShader,
    side: THREE.DoubleSide,
    });
    var sphereGeometry = new THREE.SphereGeometry(skyDomeRadius, 40, 40);
    var skyDome = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(skyDome);

    // resize
    window.addEventListener( 'resize', function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize( width, height );
        camera.aspect = width / height;
        camera.updateProjectionMatrix( );
    } );

    camera.position.z = 3;

    var update = function( ){

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

//clickable image animation code below

let btn = document.querySelector(".six");
let img = document.getElementById("observatorium")



btn.addEventListener('click', function(event){
    console.log("clicked");
    location.href = "minors.html";
})



