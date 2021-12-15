
let sections = gsap.utils.toArray(".city");
let car = document.querySelector(".van-img");
let obj;
let scrollLength = 3500;
car.autoAlpha = 0;

let bg = document.getElementById("bgLayer");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1.5),
  ease: "none",
  scrollTrigger: {
    trigger: "#levelThree",
    start: "0",
    pin: true,
    scrub: 1,
    // snap: 0 / (sections.length -1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=" + scrollLength,
    markers: true
  }
});


gsap.to(car, {
    xPercent: window.innerWidth - 100,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 2,
        end: "+=" + scrollLength,
        markers: true
    }
})

gsap.to(car, {
    autoAlpha: 0,
    scrollTrigger:{
        trigger: "#levelFour",
        start: "-=1000",
        scrub: 1,
        markers: true,
        end: "+=50",

    }
})

gsap.to(bg, {
    xPercent: -20,
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
    obj = "<img id='cloud' style='position: absolute;' src='./img/cloud.png' alt=''>"
    container = document.getElementById("cloudLayer");  
    container.innerHTML += obj;  
    cloud = document.getElementById("cloud");
    cloud.style.left = "110%";
    translate(cloud, "-500");

}

function translate(e, x){
    console.log("x is: " + x);
    var left = parseInt( css( e, 'left' ), 10 ),
        dx = left - x,
        i = 1,
        count = 1500,
        delay = 20;

    function loop() {
        
        if(e.style.left === -500 )
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
        console.log(e.style.left)
  

    }
    
    loop();


}

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

CloudEngine();





