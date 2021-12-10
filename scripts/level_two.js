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
        container.innerHTML += "<p>" + jobsArray[i] + "</p>"
    
        if(i === jobsArray.length){
            i = 0;
        }
    }
}




