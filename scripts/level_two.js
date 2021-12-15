const container = document.getElementById("textContainer");


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



for(let i = 0; i < 4; i++){
    for(let i = 0; i < jobsArray.length; i++){
        let object = "<p class='joblistItem'>" + jobsArray[i] + "</p>";
        container.innerHTML += object;

        if(i === jobsArray.length){
            i = 0;
        }
    }
}



document.querySelectorAll(".joblistItem").forEach(item => {
    let selectorContent = item.innerText;
    let textContent;
    item.addEventListener('click', function() {
        
        switch (selectorContent){
            case jobsArray[0]:
                textContent = "Haha channelmanager werkt";
            break;
            case jobsArray[1]:
                textContent = "";
            break;
            case jobsArray[2]:
                textContent = "";
            break;
            case jobsArray[3]:
                textContent = "";
            break;
            case jobsArray[4]:
                textContent = "";
            break;
            case jobsArray[5]:
                textContent = "";
            break;
            case jobsArray[6]:
                textContent = "";
            break;
            case jobsArray[7]:
                textContent = "";
            break;
            case jobsArray[8]:
                textContent = "";
            break;
            case jobsArray[9]:
                textContent = "";
            break;
        default:
            textContent = "De jobselector is stuk."
        }

    document.getElementById("jobText").innerHTML = textContent;
    })});








