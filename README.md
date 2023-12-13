# Données d'avions en Europe 
## Description
Ce projet, développé sur Observable Plot, représente une visualisation de l'état des lieux des compagnies aériennes et de leurs flottes en Europe. Il y a 6 catégories de données: pays, compagnie, constructeur, le modèle exact, la quantité de ce modèle chez la compagnie aérienne et l'âge moyen de la flotte du modèle chez la compagnie. En effet, je n'ai pris en compte que les compagnies qui sont commerciales, c'est à dire qui font des vols régulièrement et non à certaines périodes de l'année (charter et cargo supprimés). Par ailleurs, j'ai enlevé les compagnies qui n'existent plus ainsi que les avions qui ne volent plus (aucun vol effectué depuis plusieurs mois) mais qui sont encore dans la liste de la compagnie. Concernant les pays, j'ai compté les pays qui ont des avions effectivement basés et non qui sont seulement enregistrés (cas de Rayannair: enregistré en Irelande mais leurs avions sont dispersés dans le monde). 

## Procédure d'installation et d'exécution:
1. Téléchargez Visual Studio Code ([www.code.visualstudio.com](https://code.visualstudio.com)) et installez le
2. Téléchargez l'extension "Live Server"
3. Après avoir téléchargé le dossier contenant le code sur GitHub, ouvrez le dossier sous Fichier en haut à gauche dans Visual Studio Code, puis lancez le Live Server
   
## Cadre de développement
Ce projet a été développé exclusivement par moi, Artiom Voronine, dans le cadre du cours "Visualisation de données" dispensé par Isaac Pante (SLI, Lettres, UNIL)

## Sources utilisées pour ce projet
Il y a certes des sources qui existent déjà (à l'instar de www.airfleets.fr), mais j'ai voulu présenter les données à ma manière en filtrant les données déjà existantes. De plus, si on veut exporter les données en CSV, on doit payer et donc je suis dans une démarche open source. Ma source principale pour ce travail: www.flightradar24.com.
