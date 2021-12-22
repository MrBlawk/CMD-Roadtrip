
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
    "Wat is een copywriter? <br>Een copywriter is feitelijk een tekstschrijver. Doorgaans wordt met de term echter een specifiek soort schrijver bedoeld: iemand die teksten levert die (direct of indirect) iets moeten verkopen. Dit kunnen bijvoorbeeld brochureteksten of reclameslogans zijn, maar vaak betreft het webteksten als blogs, nieuwsberichten en wervende teksten voor bedrijven.",
    "Wat is een communicatieadviseur? <br>Een communicatieadviseur is iemand die een organisatie adviseert op het gebied van de interne en (vooral) externe communicatie. In algemene zin denkt de communicatieadviseur na over de manier waarop een boodschap kan worden overgebracht aan een specifieke doelgroep. Vervolgens doet hij voorstellen en/of neemt hij beslissingen, vaak bijgestaan door een team van communicatiemedewerkers. Het kan hierbij gaan om bijvoorbeeld de omgang met de pers, de benadering van klanten en het vormgeven van een complete huisstijl.",
    "Wat is een content marketeer? <br>Een content marketeer is iemand die zich richt op het creëren, verspreiden en vindbaar maken van content. Doel daarvan is de organisatie of het bedrijf waarvoor de content marketeer werkt in de markt en de spotlights te zetten en daarmee consumenten (of bedrijven) aan zich te binden. ",
    "Wat is een grafisch ontwerper? <br>Een grafisch ontwerper (ook wel grafisch vormgever) is iemand die zich beroepshalve bezighoudt met het verzorgen van de grafische vormgeving van drukwerk zoals brochures, boekomslagen, flyers en visitekaartjes. Ook is hij verantwoordelijk voor het ontwerp van (digitale) producten als complete huisstijlen en beeldmerken van websites. ",
    "Wat is een interaction designer? <br>Een interaction designer is iemand die zich bezighoudt met de structuur van interactieve systemen en het bijbehorende gedrag van gebruikers. Het vakgebied interaction design (of kortweg 'IxD') richt zich op het creëren van diensten en producten die bruikbaar, nuttig en betekenisvol zijn voor gebruikers. Het bevindt zich op het snijvlak van industrieel ontwerp en user interface design. De interactie waar interaction design om draait is niet primair die tussen de gebruiker en de computer, maar die tussen mensen onderling. De computer is hierbij slechts het medium dat gebruikt wordt. ",
    "Wat is een UI designer? <br>Een UI designer of user interface designer is iemand die de interface van een website (of andere digitale omgeving) ontwerpt, met het doel deze zo gebruiksvriendelijk mogelijk te laten functioneren. De user interface wordt ook wel gebruikersomgeving genoemd: het vormt in feite de koppeling tussen gebruiker en systeem. Het design van een webpagina is een voorbeeld van een interface. UI design is erop gericht deze interface zo te ontwerpen dat een optimale user experience ontstaat. ",
    "Wat is een UX designer? <br>Een UX designer of user experience designer is iemand die zich bezighoudt met het ontwerpen van een betekenisvolle en aangename gebruikerservaring, over het algemeen op het gebied van websites, software programma's, apps en games. Vergelijkbare functies zijn die van UI designer (user interface designer) en interaction designer, die evenwel op enkele punten verschillen van de functie van UX designer. Het blikveld van een UX designer omvat de volledige (gevoels)ervaring van gebruikers, terwijl de andere twee zich op specifieke onderdelen hiervan richten (namelijk de interactie tussen gebruiker en medium respectievelijk de visuele vormgeving hiervan). ",
    "Wat is een DTP'er? <br>Een DTP’er is werkzaam in de DTP oftewel desktoppublishing: het opmaken en bewerken van documenten voorafgaand aan publicatie. Als DTP’er kun je te maken hebben met de meest uiteenlopende vormen van drukwerk: flyers, folders, brochures, posters, boeken, kranten, tijdschriften, bedrijfslogo’s, etc. ",
    "Wat is een front-end developer? <br>Een front-end developer (ook wel front-end programmeur of front-end ontwikkelaar) is iemand die verantwoordelijk is voor de technische kant van het front-end (de voorkant) van een applicatie, website of programma. Hij zorgt in feite voor de verbinding tussen het design en de programmatuur die nodig is om het te laten functioneren. Veel front-end developers hebben zich gespecialiseerd in een bepaald framework of een specifieke programmeertaal, zodat er bijvoorbeeld .NET-developers, PHP-developers, Java-developers en C++ developers zijn. ",
    "Wat is een back-end developer? <br>Een back-end developer (ook wel back-end ontwikkelaar of back-end programmeur) is iemand die verantwoordelijk is voor de back-end (de achterkant) van een website, applicatie of programma. Vaak zijn deze developers gespecialiseerd in een bepaalde programmeertaal of een specifiek framework: zo zijn er PHP-developers, .NET-developers, C#-developers, Java-developers, Delphi-developers, etc. ",
    "Wat is een game developer? <br>Een game developer is iemand die apps en software ontwikkelt in gamevorm. Denk aan simulatoren, serious games of games voor spelcomputers. Een gamedeveloper kan niet alleen creatieve concepten bedenken, maar heeft ook specialistische kennis van de techniek achter een game. "
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









