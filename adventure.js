//Variabelen voor de buttons
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
//Variabelen voor de titel, uitleg en image
var titel = document.getElementById("title");
var uitleg = document.getElementById("description");
var image = document.getElementById("Image");
//Variabelen voor de afbeelding en items
var pickupitem = document.getElementById("inventoryItem");
var crowbar = false;


//Volgorde van de code =
	//Titel en beschrijving veranderen
	//Foto veranderen
	//Knoppen veranderen
	//De buttons veranderen als er een item mist
	//Als je op 1 van de buttons klikt ga je verder


//Hoofdscherm 
function start(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Survkey The Game";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML =
		"Er is een monster in het dorp waar je woont." + "<br>" +
		"Je wacht al een paar dagen, maar er gaan steeds meer mensen dood." + "<br>" +
		"Dit is je moment dat je op zoek gaat of er nog leven is."
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Start";
	button2.style.display = "none";
	button3.style.display = "none";
	pickupitem.style.display = "none";

	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = begin;
}
start();


function begin(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "On your way";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je gaat opweg naar de stad om daar te kijken voor overlevenden." + "<br>" +
		"Je kijkt om je heen maar je ziet alleen nog maar puin liggen, Die de mensen moesten achterlaten." + "<br>" +
		"Je ziet ook rechts van jou een bos. Je bent daar nog nooit ingeweest, dus je weet niet wat daar te vinden is."	
	//Knoppen veranderen
	button2.style.display = "unset";
	button3.style.display = "unset"; 
	document.getElementById("button1").innerHTML = "Kijk naar het bos";
	document.getElementById("button2").innerHTML = "Kijk tussen het puin";
	document.getElementById("button3").innerHTML = "Ga verder naar de stad";

	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = bos;
	button2.onclick = puin;
	button3.onclick = stad;
}


function bos(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "The forest";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je kijkt naar het bos." + "<br>" +
		"Je ziet het monster uit het bos komen waar je al veel mensen heb over horen praten." + "<br>" +
		"Je was vergeten dat hij alleen achter mensen aankomt die naar hem kijken. Eenmaal naar hem gekeken is je enige optie nog om naar de Ikea te gaan."
	//Foto veranderen
	image.style.width = '50%';
	image.style.height = '50%';
	document.getElementById("Image").src = "Images/Forest.jpg";
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Kijk tussen het puin";
	document.getElementById("button2").innerHTML = "Ren naar de stad";
	button3.style.display = "none";

	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = bosDood;
	button2.onclick = stad;
}
function bosDood(){
	document.getElementById("description").innerHTML = 
		"Je kijkt tussen het puin om hopelijk nog snel spullen te vinden." + "<br>" +
		"Je dacht dat je snel kon zijn omdat hij niet achter je aan kwam, maar hij was zo bij je." + "<br>" +
		"Hij bijt je en je kan niet meer ontsnappen"
	//De foto veranderen
	document.getElementById("Image").src = "Images/Apocalypsvirus.jpg";
	Eindscherm();
}


function puin(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "A weapon?";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML =
		"Je kijkt tussen het puin en je ziet een crowbar." + "<br>" +
		"Zal je het oppakken met het risico dat de crowbar bestmet is?"
	//Foto veranderen
	document.getElementById("Image").src = "Images/Apocalypsroadgarbage.jpg";
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Ga verder richting de stad";
	document.getElementById("button2").innerHTML = "Pak de crowbar";
	button3.style.display = "none";

	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = stad;
	button2.onclick = itemCrowbar;
}
function itemCrowbar(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML =
		"Je hebt de crowbar opgepakt. Je weet nog niet of het besmet is."
	//Knoppen veranderen
	crowbar = true;
	button2.disabled = true;
	button2.style.background = "green";
	document.getElementById("button2").innerHTML = "Je hebt de crowbar gepakt";

	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = stad;
}


function stad(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "The streets";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je bent in de stad opzoek naar de Ikea. Je woont hier pas net, dus je weet de weg niet uit je hoofd." + "<br>" +
		"Je ziet wel het logo in de verte. Ook zie je tot je grote schrik dat er personen op een stoel zitten."
	//Foto veranderen
	image.style.width = '75%';
	image.style.height = '75%';
	document.getElementById("Image").src = "Images/ApocalypsHouses.jpg";
	//Knoppen veranderen
	button2.disabled = false;
	button2.style.display = "unset";
	button2.style.background = "white";
	document.getElementById("button1").innerHTML = "Vraag de personen om hulp";
	document.getElementById("button2").innerHTML = "Ga doorlopen naar de Ikea";
	button3.style.display = "none";
	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = personen;
	button2.onclick = ikea;
}


function personen(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je loopt naar de personen om hulp te vragen. Opeens rennen ze naar je toe en bijten ze je." + "<br>" +
		"Je was vergeten dat als een persoon besmet is geraakt door het monster, hij nog 2 dagen lang andere mensen kan besmetten."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();
}


function ikea(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Ikea?";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je hebt nu eindelijk de ikea gevonden. Je ziet wel dat alles is dicht getimmerd."
	//Foto veranderen
	image.style.width = '50%';
	image.style.height = '50%';
	document.getElementById("Image").src = "Images/Ikea.jpg";
	//Knoppen veranderen
	button2.style.display = "unset";
	button2.style.width = "275px";
	document.getElementById("button1").innerHTML = "Roep om hulp";
	document.getElementById("button2").innerHTML = "Maak de deur kapot";
	button3.style.display = "none";
	//De buttons veranderen als er een item mist	
	if(crowbar !== true){
		button2.disabled = true;
		button2.style.background = "red";
		document.getElementById("button2").innerHTML = "Je mist een item";
		//Als je op 1 van de buttons klikt ga je verder
		button1.onclick = hulp;
	}
	else if(crowbar == true){
		button2.style.background = "green";
		//Als je op 1 van de buttons klikt ga je verder
		button1.onclick = hulp;
		button2.onclick = deurKapot;
	}		
}


function hulp(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je roept om hulp. Je hoort een paar tellen niks, maar opeens hoor je voetstappen achter je." + "<br>" +
		"Je kijkt achter je en ziet 5 mensen 2 meter van je af. Je ziet dat hun ook geinfecteerd zijn." + "<br>" +
		"Je probeert nog contact te leggen met hun maar dat gaat niet. Je rent weg maar hun zijn sneller dan jou."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();
}

function deurKapot(){
	crowbar = false;
	//Titel en beschrijving veranderen
	titel.innerHTML = "The lights";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je hebt de deur open gemaakt met de Crowbar die je hebt gevonden tussen het puin." + "<br>" +
		"Alles is donker op de beneden verdieping. Je ziet wel dat boven licht aanstaat." + "<br>" +
		"Je weet niet meer waar het monster zich bevind, maar ook niet of je hier wel veilig bent."
	//Foto veranderen
	image.style.width = '75%';
	image.style.height = '75%';
	document.getElementById("Image").src = "Images/Escalator.jpg";
	//Knoppen veranderen
	button2.style.width = "200px";
	button3.style.display = "unset";
	button2.style.background = "white";
	document.getElementById("button1").innerHTML = "Roep om hulp";
	document.getElementById("button2").innerHTML = "Ga terug naar buiten";
	document.getElementById("button3").innerHTML = "Loop naar boven";
	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = hulpIkea;
	button2.onclick = buitenIkea;
	button3.onclick = bovenIkea;
}


function hulpIkea(){
	titel.innerHTML = "The defense";
		console.log(titel.innerHTML);
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je roept om hulp. Waar het licht zich bevind hoor je opeens voetstappen." + "<br>" +
		"Je ziet opeens een paar mensen naar beneden kijken. Je hebt hun nog nooit gezien." + "<br>" +
		"Je ziet dat hun een paar pistolen hebben in hun handen. Ze zeggen tegen jou dat ze het hebben gestolen bij de wapen winkel" + "<br>" +
		"Je krijgt van hun ook een pistool. Je hebt nog geen idee hoe je een pistool goed schiet, maar je hebt in ieder geval een wapen."
	bovenVerdieping();
}


function buitenIkea(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je loopt naar buiten omdat je het hier binnen niet vertrouwd." + "<br>" +
		"Opeens hoor je mensen gillen. Je kijkt waar het gegil vandaan komt en je ziet het monster een persoon doden." + "<br>" +
		"Je probeert nog weg te rennen maar het monster heeft jou al gezien."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();			
}


function bovenIkea(){
	titel.innerHTML = "The defense";
		console.log(titel.innerHTML);
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je loopt naar boven om te kijken of er hier nog meer mensen zijn" + "<br>" +
		"Je ziet een paar mensen in een kring zitten met wapens. Je stelt jezelf voor om te laten zien dat je niet geinfecteerd bent." + "<br>" 
		"Ze geven jou een wapen om jezelf te kunnen verdedigen. Ook al heb je nog nooit een wapen gebruikt, je hebt nu meer kans om te overleven."
	bovenVerdieping();
}


function bovenVerdieping(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Escape plan";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je loopt naar de tafel met een kaart erop. Je ziet dat hun al hebben geprobeerd om een plan te maken " + "<br>" +
		"Je krijgt van hun te horen dat hun al 1 persoon zijn verloren met hun laatste poging. Ze vragen of jij een plan hebt." + "<br>" +
		"Je zegt tegen hun dat je nog geen plan hebt gemaakt maar wel 3 plekken weet hoe je kan ontsnappen." + "<br>" +
		"Hun geven jou de leiding over de ontsnappings poging."
	//Foto veranderen
	image.style.width = '50%';
	image.style.height = '50%';
	document.getElementById("Image").src = "Images/CityMap.jpg";
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Ga naar het politieburo";
	document.getElementById("button2").innerHTML = "Ga naar het vliegveld";
	document.getElementById("button3").innerHTML = "Ga naar de haven";
	//De buttons veranderen als er een item mist
	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = politieburo;
	button2.onclick = vliegveld;
	button3.onclick = haven;
}

function politieburo(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Weapons";
		console.log(titel.innerHTML);
	//Foto veranderen
	document.getElementById("Image").src = "Images/PoliceStation.png";	
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Pak een politie auto en vlucht.";
	document.getElementById("button2").innerHTML = "Ga opzoek naar wapens";
	document.getElementById("button3").innerHTML = "Ga kijken voor een helikopter";
	//De buttons veranderen als er een item mist
	//Als je op 1 van de buttons klikt ga je verder	
	button1.onclick = politieAutoDood;
	button2.onclick = politieWapensDood;
	button3.onclick = politieHelikopterDood;
}

function politieAutoDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je gaat opzoek naar een auto. Je ziet nog een oude auto in de parkeerplaats." + "<br>" +
		"Je probeert de auto te starten maar ziet dat de brandstof op is." + "<br>" +
		"Je probeert nog snel opzoek te gaan naar brandstof maar het is al telaat." + "<br>" +
		"Dit is een van de plekken waar mensen het meest proberen te onstnappen, dus het monster verwachtte hier al mensen"
		"Het monster rent naar je toe en dood je."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();	
}

function politieWapensDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je kijkt in elke kamer voor wapens. Je ziet dat alles al is leeggehaald." + "<br>" +
		"Je probeert je de andere personen te roepen maar je hoort niks. Opeens hoor je gegil." + "<br>" +
		"Je weet dat het monster hier is. Je probeert nog weg te rennen en de andere personen achter te laten maar je bent telaat."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();	
}

function politieHelikopterDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je loopt naar het dak met de andere personen om te kijken of de helikopter er nog staat." + "<br>" +
		"Je komt boven maar je ziet dat de helikopter is gesloopt. Je hoort opeens een gil een paar straten verderop." + "<br>" +
		"Je wilt nog op zoek gaan naar andere wapens om jezelf te verdedigen, maar je kan ze niet snel genoeg vinden."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();	
}


function vliegveld(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "The airplanes";
		console.log(titel.innerHTML);
	//Foto veranderen
	document.getElementById("Image").src = "Images/Airport.jpg";	
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Ga in het vliegtuig stappen";
	document.getElementById("button2").innerHTML = "Ga opzoek naar overlevenden";
	document.getElementById("button3").innerHTML = "Zoek een auto";
	//De buttons veranderen als er een item mist
	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = vliegtuigVluchten;
	button2.onclick = vliegveldDood;
	button3.onclick = vliegveldAutoDood;
}

function vliegtuigVluchten(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Winner";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je probeert het vliegtuig te starten, tot je grote schrik is er nog genoeg brandstof." + "<br>" +
		"Je hebt nog nooit gevlogen maar 1 van de andere personen was ooit piloot." + "<br>" +
		"Hij gaat achter het stuur zitten en vliegt weg."
	//Foto veranderen
	document.getElementById("Image").src = "Images/AirplaneWinner.jpg";
	//Als je op 1 van de buttons klikt ga je verder
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}

function vliegveldDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Jullie proberen mensen te vinden die het nog hebben overleefd om mee te nemen in een vliegtuig." + "<br>" +
		"Jullie horen een stem in een andere hangar van het vliegveld." + "<br>" +
		"Jullie lopen erheen en zien een paar mensen op de grond liggen" + "<br>" +
		"Je probeert een persoon overeind te helpen maar opeens bijt hij je." + "<br>" +
		"Jou vrienden zeggen sorry en schieten jou dood."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();		
}

function vliegveldAutoDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je gaat opzoek naar een auto. Je ziet nog een oude auto op de parkeerplaats bij het vliegveld." + "<br>" +
		"Je probeert de auto te starten maar ziet dat de brandstof op is." + "<br>" +
		"Je probeert nog snel opzoek te gaan naar brandstof maar het is al telaat." + "<br>" +
		"Dit is een van de plekken waar mensen het meest proberen te onstnappen, dus het monster verwachtte hier al mensen"
		"Het monster rent naar je toe en dood je."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();		
}


function haven(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "The boat";
		console.log(titel.innerHTML);
	//Foto veranderen
	image.style.width = '40%';
	image.style.height = '40%';
	document.getElementById("Image").src = "Images/Harbor.jpg";	
	//Knoppen veranderen
	document.getElementById("button1").innerHTML = "Ontsnap via de boot";
	document.getElementById("button2").innerHTML = "Ga opzoek naar overlevenden";
	document.getElementById("button3").innerHTML = "Zoek een auto";
	//De buttons veranderen als er een item mist
	//Als je op 1 van de buttons klikt ga je verder
	button1.onclick = bootVluchten;
	button2.onclick = havenDood;
	button3.onclick = havenAutoDood;
}

function bootVluchten(){
	//Titel en beschrijving veranderen
	titel.innerHTML = "Winner";
		console.log(titel.innerHTML);
	document.getElementById("description").innerHTML = 
		"Je gaat in de houten boot zitten en probeert hem te starten" + "<br>" +
		"Opeens hoor je hout afbreken. Je kijkt naar je boot en ziet een gat." + "<br>" +
		"Je maakt hem snel dicht met de kleren die jullie kunnen missen." + "<br>" +
		"Je ziet nu wel dat er geen brandstof inzit. Je denkt goed na en gaat van het hout een peddel maken." + "<br>" +
		"Je hebt namelijk gehoord dat het monster niet kan zwemmen." + "<br>" +
		"Jullie peddelen zover mogelijk van het land af En varen naar een ander land."
	//Foto veranderen
	document.getElementById("Image").src = "Images/HarborWinner.jpg";
	//Als je op 1 van de buttons klikt ga je verder
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}

function havenDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Jullie proberen mensen te vinden die het nog hebben overleefd om mee te nemen in de boot." + "<br>" +
		"Jullie horen opeens een stem in een van de oude huizen aan de overkant." + "<br>" +
		"Jullie lopen erheen en zien een paar mensen op de grond liggen" + "<br>" +
		"Je probeert een persoon overeind te helpen maar opeens bijt hij je." + "<br>" +
		"Jou vrienden zeggen sorry en schieten jou dood."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();				
}

function havenAutoDood(){
	//Titel en beschrijving veranderen
	document.getElementById("description").innerHTML = 
		"Je gaat opzoek naar een auto. Je ziet nog een oude auto in de parkeerplaats." + "<br>" +
		"Je probeert de auto te starten maar ziet dat de brandstof op is." + "<br>" +
		"Je probeert nog snel opzoek te gaan naar brandstof maar het is al telaat." + "<br>" +
		"Dit is een van de plekken waar mensen het meest proberen te onstnappen, dus het monster verwachtte hier al mensen"
		"Het monster rent naar je toe en dood je."
	//Foto veranderen
	document.getElementById("Image").src = "Images/ApocalypsVirus.jpg";
	Eindscherm();		
}


//Het eindscherm in beeld brengen als je dood gaat.
function Eindscherm(){
	//Titel veranderen
	titel.innerHTML = "Game over";
		console.log(titel.innerHTML);
	//De buttons verwijderen
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}