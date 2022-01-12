
//container vinden waar de beroepen in geplaatst worden
const container = document.getElementById("textContainer");

//de jobs
let jobsArray = [
    "Copywriter",
    "Communicatieadviseur",
    "Content Marketeer",
    "Grafisch Vormgever",
    "Interaction Designer",
    "UI Designer",
    "UX Designer",
    "DTP'er",
    "Front-end Developer",
    "Back-end Developer",
    "Game Developer"
];

//om het overzichtelijk te houden staan in deze array de beschrijvingen van de beroepen op dezelfde volgorde.
let jobsBeschrijving = [
    "demo beschrijving beroep 1",
    "demo beschrijving beroep 2",
    "demo beschrijving beroep 3",
    "demo beschrijving beroep 4",
    "demo beschrijving beroep 5",
    "demo beschrijving beroep 6",
    "demo beschrijving beroep 7",
    "demo beschrijving beroep 8",
    "demo beschrijving beroep 9",
    "demo beschrijving beroep 10",
    "demo beschrijving beroep 11"
]


//voeg alle jobs toe aan de html, aan het scrolvak
for(let i = 0; i < 4; i++){
    for(let i = 0; i < jobsArray.length; i++){
        let object = "<p class='joblistItem'>" + jobsArray[i] + "</p>";
        container.innerHTML += object;

        if(i === jobsArray.length){
            i = 0;
        }
    }
}


//check welk beroep wordt aangeklikt en pas de tekst aan naar de juiste inhoud
document.querySelectorAll(".joblistItem").forEach(item => {
    let selectorContent = item.innerText;
    let textContent;
    item.addEventListener('click', function() {
        
        switch (selectorContent){
            case jobsArray[0]:
                textContent = jobsBeschrijving[0];
            break;
            case jobsArray[1]:
                textContent = jobsBeschrijving[1];
            break;
            case jobsArray[2]:
                textContent = jobsBeschrijving[2];
            break;
            case jobsArray[3]:
                textContent = jobsBeschrijving[3];
            break;
            case jobsArray[4]:
                textContent = jobsBeschrijving[4];
            break;
            case jobsArray[5]:
                textContent = jobsBeschrijving[5];
            break;
            case jobsArray[6]:
                textContent = jobsBeschrijving[6];
            break;
            case jobsArray[7]:
                textContent = jobsBeschrijving[7];
            break;
            case jobsArray[8]:
                textContent = jobsBeschrijving[8];
            break;
            case jobsArray[9]:
                textContent = jobsBeschrijving[9];
            break;
            case jobsArray[10]:
                textContent = jobsBeschrijving[10];
        default:
            console.log("error, dit beroep heeft geen beschrijving...")
        }

    document.getElementById("jobText").innerHTML = textContent;
    })});









