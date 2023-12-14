function _1(md){return(
md`# Le monde de l'aviation commerciale en Europe`
)}

function _2(md){return(
md`Ce projet a été développé dans le cadre du cours "Visualisation de données" dispensé par Isaac Pante (SLI, Lettres, UNIL). Son lien GitHub: https://github.com/artii1202/Monde-aviation-commerciale-Europe`
)}

function _3(md){return(
md`Ce projet représente une visualisation de l'état des lieux de l'aviation commerciale en Europe. Il y a six catégories de données: pays, compagnie, constructeur, le modèle exact, la quantité de ce modèle chez la compagnie aérienne et l'âge moyen de la flotte du modèle chez la compagnie. 
Il y a certes des sources qui existent déjà (à l'instar de www.airfleets.fr), mais j'ai voulu présenter les données à ma manière. De plus, si on veut exporter les données en CSV depuis ce site en question, on doit payer et par conséquent je suis dans une démarche open source pour que tout le monde puisse en disposer. Ma source principale pour ce travail: www.flightradar24.com. En effet, je n'ai pris en compte que les compagnies qui sont commerciales, c'est à dire qui font des vols régulièrement et non à certaines périodes de l'année (charter et cargo supprimés). Par ailleurs, j'ai enlevé les compagnies qui n'existent plus ainsi que les avions qui ne volent plus (aucun vol effectué depuis plusieurs mois) mais qui sont encore dans la liste de la compagnie. Concernant les pays, j'ai compté les pays qui ont des avions effectivement basés et non qui sont seulement enregistrés (Exemple de Ryanair: enregistré en Irlande mais leurs avions sont dispersés en Europe). C'est pour cela qu'il n'y a pas tous les pays car certains n'ont aucun avions commerciaux basés chez eux. Enfin, pour compter l'âge moyen, j'ai pris comme date de référence mai 2023, et j'ai fais des arrondis dans les moyennes.`
)}

function _4(md){return(
md`Enfin, j'ai utilisé Observable car cela permet facilement de créer de la visualisation et de mettre à jour les données. Je souhaite que tout un chacun puisse visualiser les données à sa manière et les mettre à jour quand c'est pertinent. Vous pouvez télécharger en PNG ou même en SVG le graphique de votre choix directement depuis Observable, ce qui permet ensuite de l'intégrer facilement ailleurs. Pour cela, sélectionner les trois petits points de la barre grise de gauche et vous aurez l'option "Download".
#### NB: Si vous passez avec votre souris sur l'une des colonnes ou cercles des graphiques, vous aurez les données en détail`
)}

function _5(md){return(
md`## Voici un aperçu global sur la carte des données récoltées
Les points sont placés sur l'aéroport le plus grand de chaque pays (avec son code IATA à trois lettres). Je souhaitais montrer en faisant ainsi que l'aéroport le plus grand ne se situe pas toujours dans la capitale. Vous trouverez sur la carte: Pays, Capitale, Aéroport principal, Compagnie principale, Nombre d'avions au total dans le pays et l'âge moyen de la flotte du pays.  `
)}

function* _map(DOM,width,L)
{
  // You'll often see Leaflet examples initializing a map like L.map('map'),
  // which tells the library to look for a div with the id 'map' on the page.
  // In Observable, we instead create a div from scratch in this cell, so it's
  // completely self-contained.
  let container = DOM.element('div', { style: `width:${width}px;height:${width/1.6}px` });
  
  // Note that I'm yielding the container pretty early here: this allows the
  // div to be placed on the page. This is important, because Leaflet uses
  // the div's .offsetWidth and .offsetHeight to size the map. If I were
  // to only return the container at the end of this method, Leaflet might
  // get the wrong idea about the map's size.
  yield container;
  
  // Now we create a map object and add a layer to it.
  let map = L.map(container).setView([49.84,26.19], 4);
  let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 // let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
 //     attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> //contributors'
//  }).addTo(map);
  L.control.scale({imperial: false}).addTo(map);
  
  L.marker([40.4916,-3.5709]).addTo(map)
    .bindPopup('Espagne / Capitale: Madrid / Aéroport principal: Aéroport de Adolfo Suárez Madrid-Barajas (MAD) / Compagnie principale: Vueling / Nombre d avions au total dans le pays: 438 / Age moyen de la flotte du pays: 10.9 ans.')
    
  
  L.marker([38.7798,-9.1329]).addTo(map)
    .bindPopup('Portugal / Capitale: Lisbonne / Aéroport principal: Aéroport de Lisbonne (LIS) / Compagnie principale: Tap Air Portugal / Nombre d avions au total dans le pays: 120 / Age moyen de la flotte du pays: 13.9 ans.')
    
  
  L.marker([47.4582,8.5537]).addTo(map)
    .bindPopup('Suisse / Capitale: Berne / Aéroport principal: Aéroport de Zurich (ZRH) / Compagnie principale: Swiss / Nombre d avions au total dans le pays: 126 / Age moyen de la flotte du pays: 11.2 ans.')
    
    
  L.marker([49.0097,2.5528]).addTo(map)
    .bindPopup('France / Capitale: Paris / Aéroport principal: Aéroport de Paris-Charles de Gaulle (CDG) / Compagnie principale: Air France / Nombre d avions au total dans le pays: 360 / Age moyen de la flotte du pays: 9.4 ans.')
    
    
  L.marker([51.4714,-0.4607]).addTo(map)
    .bindPopup('Angleterre / Capitales: Londres / Aéroport principal: Aéroport de Londres Heathrow (LHR) / Compagnie principale: British Airways / Nombre d avions au total dans le pays: 688 / Age moyen de la flotte du pays: 12.8 ans')
    
  
  L.marker([53.4282,-6.2503]).addTo(map)
    .bindPopup('Irelande / Capitale: Dublin / Aéroport principal: Aéroport de Dublin (DUB) / Compagnie principale: Aer Lingus / Nombre d avions au total dans le pays: 72 / Age moyen de la flotte du pays: 11.7 ans')
    
 
  L.marker([50.0326,8.5381]).addTo(map)
    .bindPopup('Allemagne / Capitale: Berlin / Aéroport principal: Aéroport de Francfort (FRA) / Compagnie principale: Lufthansa / Nombre d avions au total dans le pays: 503 / Age moyen de la flotte du pays: 12.2 ans')
    

  L.marker([49.6277,6.2105]).addTo(map)
    .bindPopup('Luxembourg / Capitale: Luxembourg / Aéroport principal: Aéroport de Luxembourg (LUX) / Compagnie principale: Luxair / Nombre d avions au total dans le pays: 23 / Age moyen de la flotte du pays: 11.2 ans')
    

  L.marker([63.9890,-22.6304]).addTo(map)
    .bindPopup('Islande / Capitale: Reykjavik / Aéroport principal: Aéroport international de Keflavík (KEF) / Compagnie principale: Icelandair / Nombre d avions au total dans le pays: 56 / Age moyen de la flotte du pays: 13.2 ans')
    
  
 L.marker([62.0659,-7.2826]).addTo(map)
    .bindPopup('Iles Féroé / Capitale: Tórshavn / Aéroport principal: Aéroport de Vágar (FAE) / Compagnie principale: Atlantic Airways / Nombre d avions au total dans le pays: 4 / Age moyen de la flotte du pays: 6 ans')
    

 L.marker([41.8010,12.2530]).addTo(map)
    .bindPopup('Italie / Capitale: Rome / Aéroport principal: Aéroport Léonard-de-Vinci de Rome Fiumicino (FCO) / Compagnie principale: ITA Airways (ex Alitalia) / Nombre d avions au total dans le pays: 102 / Age moyen de la flotte du pays: 9.1 ans')
    

 L.marker([50.8992,4.4874]).addTo(map)
    .bindPopup('Belgique / Capitale: Bruxelles / Aéroport principal: Aéroport de Bruxelles (BRU) / Compagnie principale: Brussels Airlines / Nombre d avions au total dans le pays: 47 / Age moyen de la flotte du pays: 12.5 ans')
    

L.marker([52.3123,4.7602]).addTo(map)
    .bindPopup('Pays-Bas / Capitale: Amsterdam / Aéroport principal: Aéroport d Amsterdam-Schiphol (AMS) / Compagnie principale: KLM / Nombre d avions au total dans le pays: 216 / Age moyen de la flotte du pays: 11.9 ans')
    

L.marker([60.1918,11.0978]).addTo(map)
    .bindPopup('Norvège / Capitale: Oslo / Aéroport principal: Aéroport d Oslo-Gardermoen (OSL) / Compagnie principale: Norwegian / Nombre d avions au total dans le pays: 136 / Age moyen de la flotte du pays: 15.8 ans')
    

L.marker([60.3190,24.9493]).addTo(map)
    .bindPopup('Finlande / Capitale: Helsinki / Aéroport principal: Aéroport de Helsinki-Vantaa (HEL) / Compagnie principale: Finnair / Nombre d avions au total dans le pays: 78 / Age moyen de la flotte du pays: 14.2 ans')
    

L.marker([56.9207,23.9758]).addTo(map)
    .bindPopup('Lettonie / Capitale: Riga / Aéroport principal: Aéroport de Riga (RIX) / Compagnie principale: Air Baltic / Nombre d avions au total dans le pays: 44 / Age moyen de la flotte du pays: 3.2 ans')
   

L.marker([52.1646,20.9683]).addTo(map)
    .bindPopup('Pologne / Capitale: Varsovie / Aéroport principal: Aéroport de Varsovie-Chopin (WAW) / Compagnie principale: LOT / Nombre d avions au total dans le pays: 73 / Age moyen de la flotte du pays: 10.8 ans')
    

L.marker([50.1068,14.2615]).addTo(map)
    .bindPopup('République Tchèque / Capitale: Prague / Aéroport principal: Aéroport de Prague-Václav-Havel (PRG) / Compagnie principale: Czech Airlines / Nombre d avions au total dans le pays: 2 / Age moyen de la flotte du pays: 17.5 ans')
    

L.marker([48.1172,16.5665]).addTo(map)
    .bindPopup('Autriche / Capitale: Vienne / Aéroport principal: Aéroport de Vienne-Schwechat (VIE) / Compagnie principale: Austrian Airlines / Nombre d avions au total dans le pays: 66 / Age moyen de la flotte du pays: 16.9 ans')
    

L.marker([45.7408,16.0716]).addTo(map)
    .bindPopup('Croatie / Capitale: Zagreb / Aéroport principal: Aéroport Franjo-Tuđman de Zagreb (ZAG) / Compagnie principale: Croatia Airlines / Nombre d avions au total dans le pays: 13 / Age moyen de la flotte du pays: 18.9 ans')
    

L.marker([44.8187,20.3058]).addTo(map)
    .bindPopup('Serbie / Capitale: Belgrade / Aéroport principal: Aéroport Belgrade-Nikola Tesla (BEG) / Compagnie principale: AirSERBIA / Nombre d avions au total dans le pays: 25 / Age moyen de la flotte du pays: 14.7 ans')
    

L.marker([42.3636,19.2490]).addTo(map)
    .bindPopup('Monténégro / Capitale: Podgorica / Aéroport principal: Aéroport de Podgorica (TGD) / Compagnie principale: Air Montenegro / Nombre d avions au total dans le pays: 4 / Age moyen de la flotte du pays: 16.5 ans')
    

L.marker([41.4132,19.7197]).addTo(map)
    .bindPopup('Albanie / Capitale: Tirana / Aéroport principal: Aéroport de Tirana-Mère-Teresa (TIA) / Compagnie principale: Albawings / Nombre d avions au total dans le pays: 7 / Age moyen de la flotte du pays: 20.3 ans')
    

L.marker([37.9372,23.9450]).addTo(map)
    .bindPopup('Grèce / Capitale: Athènes / Aéroport principal: Aéroport de Athènes Elefthérios-Venizélos (ATH) / Compagnie principale: Aegean Airlines / Nombre d avions au total dans le pays: 100 / Age moyen de la flotte du pays: 11.8 ans')
    

L.marker([42.6924,23.4133]).addTo(map)
    .bindPopup('Bulgarie / Capitale: Sofia / Aéroport principal: Aéroport de Sofia (SOF) / Compagnie principale: Bulgaria Air / Nombre d avions au total dans le pays: 11 / Age moyen de la flotte du pays: 10.7 ans')
   

L.marker([44.5700,26.0898]).addTo(map)
    .bindPopup('Roumanie / Capitale: Bucarest / Aéroport principal: Aéroport Henri-Coandă (OTP) / Compagnie principale: Tarom / Nombre d avions au total dans le pays: 19 / Age moyen de la flotte du pays: 12.8 ans')
   

L.marker([46.9302,28.9352]).addTo(map)
    .bindPopup('Moldavie / Capitale: Chișinău / Aéroport principal: Aéroport de Chisinau (KIV) / Compagnie principale: Air Moldova / Nombre d avions au total dans le pays: 2 / Age moyen de la flotte du pays: 19.5 ans')
   

L.marker([35.8540,14.4811]).addTo(map)
    .bindPopup('Malte / Capitale: La Valette / Aéroport principal: Aéroport de Malte (MLA) / Compagnie principale: Air Malta / Nombre d avions au total dans le pays: 9 / Age moyen de la flotte du pays: 8.5 ans')
    

L.marker([34.8734,33.6216]).addTo(map)
    .bindPopup('Chypre / Capitale: Nicosie / Aéroport principal: Aéroport de Larnaca (LCA) / Compagnie principale: Tus Air / Nombre d avions au total dans le pays: 9 / Age moyen de la flotte du pays: 10.4 ans')
    


/*
L.routing.control({
  waypoints: [
    L.latLng(43.300006, -8.309442),  // Encosta
    L.latLng(41.436706, -8.362229)   // Pasarela
  ],router: L.Routing.osrmv1({
        serviceUrl: 'http://localhost:5000/route/v1'
    })}).addTo(map);*/
  
}


function _7(md){return(
md`## Ici vous trouverez le tableau des données utilisées dans ce projet: `
)}

function _liste_compagniesdefinitive(__query,FileAttachment,invalidation){return(
__query(FileAttachment("liste_compagniesDefinitive.csv"),{from:{table:"liste_compagniesDefinitive"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _table(Inputs,liste_compagniesdefinitive){return(
Inputs.table(liste_compagniesdefinitive)
)}

async function _10(Plot,FileAttachment,width){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: "Constructeur", y: {value: "Quantité", reduce: "sum"}, color: "#c83dac"}).plot({title: "Le nombre d'avions au total par constructeur", width})
)}

async function _11(Plot,FileAttachment,width){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: "Constructeur", y: {value: "Age Moyen", reduce: "mean"}, mark: "bar", color: "#ff77a7"}).plot({title: "Age moyen des avions par constructeur", width, caption: "On remarque que BAe et Saab sont les deux les plus âgés, pour deux raisons: il y en a peu et ils ne sont pas renouvellés"})
)}

async function _12(Plot,width,FileAttachment){return(
Plot.plot({
  color: { legend: true },
  width,
  marginBottom: 30,
  title:
    "Un graphique qui montre l'âge moyen des constructeurs (en Europe) en lien avec leur quantité",
  caption:
    "On remarque que la flotte d'Airbus est plus jeune que celle de Boeing. Les constructeurs qui sont minoritaires, comme Saab ou même ATR, ont des avions qui sont plus âgés que le reste. Ceci s'explique qu'ils sont moins plébiscités par les compagnies lors du renouvellement de leur flotte.",
  marks: [
    Plot.barY(
      await FileAttachment("liste_compagniesDefinitive.csv").csv({
        typed: "auto"
      }),
      Plot.groupX(
        { fill: "sum", y: "mean" },
        { x: "Constructeur", y: "Age Moyen", fill: "Quantité", tip: true }
      )
    ),
    Plot.ruleY([0])
  ]
})
)}

async function _13(Plot,FileAttachment){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: {value: "Age Moyen", reduce: "mean"}, y: "Pays", mark: "bar", color: "#4775de"}).plot({title: "Age moyen de la flotte pays par pays", height: 1500, marginLeft: 133, insetBottom: 12, marginBottom: 36})
)}

async function _14(Plot,FileAttachment,width){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: {value: "Age Moyen", reduce: "mean"}, y: {value: "Pays", reduce: null}, size: {value: "Quantité", reduce: "sum"}, color: {value: "Quantité", reduce: "sum"}}).plot({color: {legend: true}, title: "Ici on trouve les données d'âge moyen pays par pays en rapport avec leur quantité", width, caption: "Plus il y a d'avions, plus le cercle sera grand. On remarque que plus on se situe à droite, plus on trouve d'avions agés qui se trouve en Europe de l'Est. De plus, on remarque que l'age moyen européen se situe dans une fourchette entre 10 et 14,5 ans. D'après mes calculs, l'âge moyen en Europe est de 13 ans.", insetLeft: 14, marginLeft: 110})
)}

function _15(Plot,liste_compagniesdefinitive){return(
Plot.auto(liste_compagniesdefinitive, {x: {value: "Quantité", reduce: "sum"}, y: "Pays", mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Ce graphique représente la quantité d'avions par pays en comparaison avec l'âge moyen", caption: "Au travers de ce graphique, je souhaite montrer qu'une grande quantité d'avions ne tire pas nécessairement vers un âge moyen plus bas. ", subtitle: "Il ressemble au celui du dessus mais on inverse les variables. ", insetLeft: 16, marginLeft: 114})
)}

async function _16(Plot,FileAttachment,width){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: "Constructeur", y: "Pays", mark: "dot", size: {value: "Quantité", reduce: "sum"}, color: {value: "Quantité", reduce: "sum"}}).plot({color: {legend: true}, title: "Constructeurs pays par pays et leurs quantités respectives", width, height: 970, marginLeft: 110})
)}

async function _17(Plot,FileAttachment,width){return(
Plot.auto(await FileAttachment("liste_compagniesDefinitive.csv").csv({typed: "auto"}), {x: "Constructeur", y: "Pays", mark: "bar", size: {value: "Age Moyen", reduce: "mean"}, color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Constructeurs pays par pays et leurs âges moyens respectifs", width, marginLeft: 110})
)}

function _18(Plot,liste_compagniesdefinitive){return(
Plot.plot({
  title: "On a la fréquence de l'âge moyen par rapport aux constructeurs",
  caption: "Au travers de ce graphique, on remarque que la majorité des avions qui ont entre 0-5 ans d'âge moyen sont des Airbus. Ce qui pourrait s'expliquer par le fait qu'ils ont fait pleins de nouvelles livraison par rapport à Boeing. Cependant, Airbus est majoritaire sur la fréquence des 10-20 ans, ceci s'explique par le grand nombre d'avions Airbus présents en Europe depuis environ 15 ans. Enfin, Boeing tend à être majoritaire dès l'âge moyen de 20 ans, sans doutes que leur renouvellement s'effectue moins rapidement et que les compagnie choisissent peut être Airbus à leur place.",
  marks: [
    Plot.rectY(liste_compagniesdefinitive, Plot.binX({y: "count"}, {x: "Age Moyen", fill: "Constructeur"})),
    Plot.ruleY([0])
  ],
  color: {
    legend: true
  }
})
)}

function _19(md){return(
md`## Ici vous pouvez sélectionner le pays de votre choix et visualiser ses détails`
)}

function _Pays(Inputs,selection){return(
Inputs.select(selection, {label: "Pays:"})
)}

function _21(Plot,Pays,width){return(
Plot.auto(Pays, {x: {value: "Compagnie", reduce: null}, y: {value: "Quantité", reduce: "sum"}, mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Age moyen et la quantité d'avions par compagnie aérienne", width})
)}

function _22(Plot,Pays){return(
Plot.auto(Pays, {x: "Constructeur", y: {value: "Quantité", reduce: "sum"}, mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({x: {}, color: {legend: true}, title: "Age moyen et la quantité d'avions par constructeur"})
)}

function _23(Plot,Pays){return(
Plot.auto(Pays, {x: {value: "Age Moyen", reduce: "mean"}, y: "Modèle", mark: "bar", color: "Constructeur"}).plot({color: {legend: true}, title: "Quantité par modèles", marginLeft: 85})
)}

function _24(Plot,Pays){return(
Plot.auto(Pays, {x: {value: "Quantité", reduce: "sum"}, y: "Modèle", mark: "bar", color: "Constructeur"}).plot({color: {legend: true}, title: "Age moyen par modèles", marginLeft: 85})
)}

function _25(Plot,Pays){return(
Plot.auto(Pays, {x: {value: "Age Moyen", reduce: "mean"}, y: "Modèle", mark: "dot", size: {value: "Quantité", reduce: "sum"}, color: {value: "Quantité", reduce: "sum"}}).plot({color: {legend: true}, title: "Age moyen et quantité par modèle", marginLeft: 85})
)}

function _selection(d3,liste_compagniesdefinitive){return(
d3.group(liste_compagniesdefinitive, d => d.Pays)
)}

function _selection2(d3,liste_compagniesdefinitive){return(
d3.group(liste_compagniesdefinitive, d => d.Constructeur)
)}

function _selection3(d3,liste_compagniesdefinitive){return(
d3.group(liste_compagniesdefinitive, d => d.Compagnie)
)}

function _29(md){return(
md`## Ici vous pouvez sélectionner le constructeur de votre choix et visualiser ses détails`
)}

function _Constructeur(Inputs,selection2){return(
Inputs.select(selection2, {label: "Constructeur:"})
)}

function _31(Plot,Constructeur){return(
Plot.auto(Constructeur, {x: {value: "Quantité", reduce: "sum"}, y: "Modèle", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Modèles présents en Europe chez cet constructeur, leurs quantités et leur âge moyen", marginLeft: 85})
)}

function _32(Plot,Constructeur){return(
Plot.auto(Constructeur, {x: {value: "Age Moyen", reduce: "mean"}, y: "Compagnie", mark: "bar", color: {value: "Quantité", reduce: "sum"}}).plot({color: {legend: true}, title: "Age moyen du constructeur chez les compagnies ainsi que la quantité de leurs avions", marginLeft: 110})
)}

function _33(Plot,Constructeur){return(
Plot.auto(Constructeur, {x: {value: "Quantité", reduce: "sum"}, y: "Pays", mark: "bar", color: "#666666"}).plot({title: "Quantité des avions de ce constructeur par pays", marginLeft: 110})
)}

function _34(Plot,Constructeur){return(
Plot.auto(Constructeur, {x: {value: "Age Moyen", reduce: "mean"}, y: "Pays", mark: "bar", color: "#cccccc"}).plot({title: "Âge moyen de ce constructeur par pays", marginLeft: 110})
)}

function _35(Plot,Constructeur){return(
Plot.auto(Constructeur, {x: {value: "Quantité", reduce: "sum"}, y: "Pays", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Résumé: âge moyen par pays en rapport avec leurs quantités", marginLeft: 110})
)}

function _36(md){return(
md`## Ici vous pouvez sélectionner la compagnie de votre choix et visualiser ses détails`
)}

function _Compagnie(Inputs,selection3){return(
Inputs.select(selection3, {label: "Compagnie:"})
)}

function _38(Plot,Compagnie){return(
Plot.auto(Compagnie, {x: "Pays", y: {value: "Quantité", reduce: "sum"}, mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Pays, âge moyen de la compagnie et quantité d'avions"})
)}

function _39(Plot,Compagnie,width){return(
Plot.auto(Compagnie, {x: "Constructeur", y: {value: "Quantité", reduce: "sum"}, mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Les constructeurs présents dans la flotte", width})
)}

function _40(Plot,Compagnie,width){return(
Plot.auto(Compagnie, {x: "Modèle", y: {value: "Age Moyen", reduce: "mean"}, mark: "dot", size: {value: "Quantité", reduce: "sum"}, color: {value: "Quantité", reduce: "sum"}}).plot({color: {legend: true}, title: "Vue d'ensemble des modèles, âge moyen et leurs quantités", width})
)}

function _41(Plot,Compagnie,width){return(
Plot.auto(Compagnie, {x: "Pays", y: {value: "Quantité", reduce: "sum"}, fx: "Modèle", fy: "Constructeur", mark: "bar", color: {value: "Age Moyen", reduce: "mean"}}).plot({color: {legend: true}, title: "Une manière différente de représenter la vue d'ensemble", width, marginRight: 69})
)}

function _42(md){return(
md`## Merci! 
Merci d'avoir parcouru mon projet jusqu'au bout :-D ! Je vous souhaite de très bonnes fêtes de fin d'année! Je tiens également à remercier le Professeur Isaac Pante et son assistant Loris pour m'avoir appris pleins de notions durant leur cours de "Visualisation de données". `
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["liste_compagniesDefinitive.csv", {url: new URL("./files/ac9abd4025fbde3dbbd32366a8bd69e704ba8ec83c69c1da8c97f9e37bf3c98b638c0ba870574f847ac9072dbbfb72d0f9f2d5abbe63a597306a1fad7dbb7b0b.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("map")).define("map", ["DOM","width","L"], _map);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("liste_compagniesdefinitive")).define("liste_compagniesdefinitive", ["__query","FileAttachment","invalidation"], _liste_compagniesdefinitive);
  main.variable(observer("viewof table")).define("viewof table", ["Inputs","liste_compagniesdefinitive"], _table);
  main.variable(observer("table")).define("table", ["Generators", "viewof table"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","FileAttachment","width"], _10);
  main.variable(observer()).define(["Plot","FileAttachment","width"], _11);
  main.variable(observer()).define(["Plot","width","FileAttachment"], _12);
  main.variable(observer()).define(["Plot","FileAttachment"], _13);
  main.variable(observer()).define(["Plot","FileAttachment","width"], _14);
  main.variable(observer()).define(["Plot","liste_compagniesdefinitive"], _15);
  main.variable(observer()).define(["Plot","FileAttachment","width"], _16);
  main.variable(observer()).define(["Plot","FileAttachment","width"], _17);
  main.variable(observer()).define(["Plot","liste_compagniesdefinitive"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("viewof Pays")).define("viewof Pays", ["Inputs","selection"], _Pays);
  main.variable(observer("Pays")).define("Pays", ["Generators", "viewof Pays"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","Pays","width"], _21);
  main.variable(observer()).define(["Plot","Pays"], _22);
  main.variable(observer()).define(["Plot","Pays"], _23);
  main.variable(observer()).define(["Plot","Pays"], _24);
  main.variable(observer()).define(["Plot","Pays"], _25);
  main.variable(observer("selection")).define("selection", ["d3","liste_compagniesdefinitive"], _selection);
  main.variable(observer("selection2")).define("selection2", ["d3","liste_compagniesdefinitive"], _selection2);
  main.variable(observer("selection3")).define("selection3", ["d3","liste_compagniesdefinitive"], _selection3);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("viewof Constructeur")).define("viewof Constructeur", ["Inputs","selection2"], _Constructeur);
  main.variable(observer("Constructeur")).define("Constructeur", ["Generators", "viewof Constructeur"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","Constructeur"], _31);
  main.variable(observer()).define(["Plot","Constructeur"], _32);
  main.variable(observer()).define(["Plot","Constructeur"], _33);
  main.variable(observer()).define(["Plot","Constructeur"], _34);
  main.variable(observer()).define(["Plot","Constructeur"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("viewof Compagnie")).define("viewof Compagnie", ["Inputs","selection3"], _Compagnie);
  main.variable(observer("Compagnie")).define("Compagnie", ["Generators", "viewof Compagnie"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","Compagnie"], _38);
  main.variable(observer()).define(["Plot","Compagnie","width"], _39);
  main.variable(observer()).define(["Plot","Compagnie","width"], _40);
  main.variable(observer()).define(["Plot","Compagnie","width"], _41);
  main.variable(observer()).define(["md"], _42);
  return main;
}
