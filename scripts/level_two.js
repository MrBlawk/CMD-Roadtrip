
//container vinden waar de beroepen in geplaatst worden
const container = document.getElementById("textContainer");

//de jobs
let jobsArray = [
    "Channelmanager",
    "Consultant nieuwe media",
    "Game Designer",
    "Multimediaontwerper",
    "Project Manager",
    "Webdesigner",
    "Fotograaf",
    "Programmeur",
    "Muzikant",
    "Animatiespecialist"
];

//om het overzichtelijk te houden staan in deze array de beschrijvingen van de beroepen op dezelfde volgorde.
let jobsBeschrijving = [
    "Channelmanager!",
    "Consultant nieuwe media!",
    "game designer",
    "multimediaontwerper",
    "project manager",
    "webdesigner",
    "fotograaf",
    "programmeur",
    "muzikant",
    "animatiespecialist"
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
        default:
            console.log("error, dit beroep heeft geen beschrijving...")
        }

    document.getElementById("jobText").innerHTML = textContent;
    })});









