
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
    xPercent: 700,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+=" + scrollLength,

    }
})

//fade-out car
gsap.to(car, {
    autoAlpha: 0,
    scrollTrigger:{
        trigger: "#levelFour",
        start: "-=1500",
        scrub: 2,
        end: "+=" + scrollLength ,

    }
})



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
        
        if(e.style.left === -1000 )
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





