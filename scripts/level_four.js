import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
//import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';
import StarrySkyShader from './StarrySkyShader.js';

//create array to fill with planetobjects later, minor array keeps track of the amount of minors that have to be listed
var planets = [];
var minors = ["artandsound", "concepting", "gd3d", "bad", "ondernemen", "sds", "tnw", "neuromarketing"];

//track mouse as a vector2 position (x,y)
var mouse = new THREE.Vector2();



var scene = new THREE.Scene( ); 
    var camera =  new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);
    // camera position
    camera.position.set(0, 15, 30)



    // //skybox stuff
    // //settingup the materialarray and defining the textures to a let.
    // let materialArray = [];
    // let texture_ft = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
    // let texture_rt = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
    // let texture_lt = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
    // let texture_up = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
    // let texture_dwn = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');
    // let texture_bk = new THREE.TextureLoader().load('./img/cubemap/sterren-bg.jpeg');

    // //pushing the materials to the array.
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_lt}));
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_dwn}));
    // materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));

    // for(let i=0;i<6;i++)
    //     materialArray[i].side = THREE.BackSide;

    // let skyboxGeo = new THREE.BoxGeometry(100,100,100);
    // let skybox = new THREE.Mesh(skyboxGeo,materialArray);
    // scene.add(skybox);

    //skybox with star shader
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
    controls.maxPolarAngle = Math.PI / 2;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = (-0.1);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;


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

    //custom positions for each planet
    var planetX = [-13,     -10,      -6,     -3,     5,    8,   12,    13]
    var planetY = [-10,       10,      -5,      3,     12,    -3,   10,    2]
    var planetZ = [0,       10,      -10,     -5,    -8,     0,   5,    -5]

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
            var material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('./img/Minor_Planet/Planeet_Textures/' + texture + ".png")})
            var sphere = new THREE.Mesh(geometry, material);
            sphere.rotation.x = Math.random() * (20 - 0);
            sphere.position.set(x, y, z)
            sphere.userData.name = texture;
            sphere.castShadow = true;
            sphere.receiveShadow = true;
            planets.push(sphere);
            scene.add(sphere);
        }
    }



    //creating lightsources for the scene
    var sLight = new THREE.SpotLight(0xFFFFFF, 1);
    sLight.position.set(-40,80,30)
    sLight.castShadow = true;

    sLight.shadow.mapSize.width = 1024;
    sLight.shadow.mapSize.height = 1024;

    sLight.shadow.camera.near = 1;
    sLight.shadow.camera.far = 2000;
    scene.add(sLight);

    var aLight = new THREE.AmbientLight( 0xFFFFFF, 0.2)
    aLight.castShadow = true;
    scene.add( aLight );




    // game logic
    var update = function( ){
        // sphere.rotation.x += 0.01;
        controls.update();
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

        //make raycasts that checks for objects that are in the planets array
        var intersects = ray.intersectObjects(planets);

        //get header, paragraph and list to insert data
        let header = document.getElementById("planetHeader");
        let paragraph = document.getElementById("planetParagraph");
        let list = document.getElementById("planetList");

        if(intersects.length > 0)
        {
            let selectedPlanet = intersects[0].object.userData.name;
            console.log(selectedPlanet);
            switch (selectedPlanet) {
                case "artandsound":
                    console.log(selectedPlanet);
                    header.innerHTML = "Art 'n Sound";
                    paragraph.innerHTML = "Zit je helemaal in de wereld van muziek en/of audio, dan klinkt dit als muziek in je oren!" + "<p>Wat leer je:</p>";
                    list.innerHTML = "Sound Effects" + "<li>Componeren</li>";
                    break;
                case "concepting":
                    console.log(selectedPlanet);
                    header.innerHTML = "Concepting";
                    paragraph.innerHTML = "Altijd een tof idee gehad, maar nooit aan begonnen? Bij concepting krijg je de kans om je eigen idee uit te werken met hulp van docenten en medestudenten." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Persoonlijk creatief leiderschap" + "<li>Ideeën omzetten naar designs</li>" + "<li>zelfkennis, zelfvertrouwen en zelfstandigheid</li>"
                    break;
                case "gd3d":
                    console.log(selectedPlanet);
                    header.innerHTML = "Gamedevelopment & 3D";
                    paragraph.innerHTML = "Voor iedereen met nieuwsgierigheid naar bijvoorbeeld animeren, visualiseren in 2D of 3D en/of gamedevelopment." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Animeren" + "<li>2D en 3D visualiseren</li>" + "<li>Game ontwikkeling</li>" + "<li>Programmeren</li>" + "<li>Storytelling en tekenen</li>";
                    break;    
                case "bad":
                    console.log(selectedPlanet);
                    header.innerHTML = "Branding & Advertisement";
                    paragraph.innerHTML = "Pakkende en overtuigende boodschappen creëren met beeld en woorden als basisingrediënten." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Alles over campagnes" + "<li>Video, foto en grafisch design</li>" + "<li>Copywriting</li>" + "<li>Logobranding</li>" + "<li>Huisstijlen</li>";
                    break;     
                case "ondernemen":
                    console.log(selectedPlanet);
                    header.innerHTML = "Ondernemen";
                    paragraph.innerHTML = "De wereld van een ondernemer verkennen door zelfstandig aan je eigen onderneming te werken." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Marketing" + "<li>Ondernemen</li>" + "<li>Persoonlijke ontwikkeling</li>";
                    break;
                case "sds":
                    console.log(selectedPlanet);
                    header.innerHTML = "Sustainable Design Solutions";
                    paragraph.innerHTML = "Innovatieve oplossingen ontwerpen voor complexe vraagstukken rondom duuzaamheid." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Design Thinking" + "<li>Innovatief en creatief denken</li>" + "<li>Mensgerichtheid</li>" + "<li>Structuur geven</li>";
                    break;
                case "tnw":
                    console.log(selectedPlanet);
                    header.innerHTML = "The Next Web";
                    paragraph.innerHTML = "Het leren maken van vernieuwende websites en apps." + "<p>Wat leer je:</p>";
                    list.innerHTML = "User Interface Design" + "<li>User Experience Design</li>" + "<li>Front-end development</li>" + "<li>Programmeren</li>";
                    break;    
                case "neuromarketing":
                    console.log(selectedPlanet);
                    header.innerHTML = "Neuromarketing";
                    paragraph.innerHTML = "Kennis die je nodig hebt om koopgedrag te meten, voorspellen en beïnvloeden." + "<p>Wat leer je:</p>";
                    list.innerHTML = "Sociale psychologie" + "<li>Gedragswetenschappen</li>" + "<li>Neurowetenschappen</li>";
                    break;       
                default:
                    break;
            }
        

        }
    }

    function returnRandom(){
        let varNum = Math.random() * (0.0008 - -0.0005);
        return varNum;
    }
