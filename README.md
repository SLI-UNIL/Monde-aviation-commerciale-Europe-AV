# Le monde de l'aviation commerciale en Europe

## Description
Ce projet représente une visualisation de l'état des lieux de l'aviation commerciale en Europe (état à mai 2023). 
<img width="1280" alt="Capture d’écran 2023-12-14 à 11 06 57" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/47e683ff-476e-4f54-b82d-f4540c858fdd">

## But de ce projet et sources utilisées
Il y a certes des sources qui existent déjà (à l'instar de www.airfleets.fr), mais j'ai voulu présenter les données à ma manière. De plus, si on veut exporter les données en CSV depuis ce site en question, on doit payer et par conséquent je suis dans une démarche open source pour que tout le monde puisse en disposer. Ma source principale pour ce travail: www.flightradar24.com. En effet, je n'ai pris en compte que les compagnies qui sont commerciales, c'est à dire qui font des vols régulièrement et non à certaines périodes de l'année (charter et cargo supprimés). Par ailleurs, j'ai enlevé les compagnies qui n'existent plus ainsi que les avions qui ne volent plus (aucun vol effectué depuis plusieurs mois) mais qui sont encore dans la liste de la compagnie. Concernant les pays, j'ai compté les pays qui ont des avions effectivement basés et non qui sont seulement enregistrés (Exemple de Ryanair: enregistré en Irlande mais leurs avions sont dispersés en Europe). C'est pour cela qu'il n'y a pas tous les pays car certains n'ont aucun avions commerciaux basés chez eux. Enfin, pour compter l'âge moyen, j'ai pris comme date de référence mai 2023, et j'ai fais des arrondis dans les moyennes.

## Outils utilisés
J'ai utilisé Observable car cela permet facilement de crée de la visualisation et de mettre à jour les données. Je souhaite que tout un chacun puisse visualiser les données à sa manière et les mettre à jour quand c'est pertinent. De plus, si vous allez sur le lien de mon projet, vous pouvez télécharger en PNG ou même en SVG le graphique de votre choix directement depuis Observable, ce qui permet ensuite de l'intégrer facilement ailleurs. Pour cela, sélectionner les trois petits points de la barre grise de gauche et vous aurez l'option "Download". 
<img width="192" alt="Capture d’écran 2023-12-14 à 11 17 08" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/55a135a3-0fb0-4513-a115-af6fbe0df006">

## Variables utilisées
- Pays
- Compagnie
- Constructeur
- Modèle: le modèle exact de l'avion
- Quantité: la quantité du modèle chez la compagnie aérienne
- Age moyen: c'est l'âge moyen de la flotte du modèle

## Méthodologie
Je n'ai pris en compte que les compagnies qui sont commerciales, c'est à dire qui font des vols régulièrement et non à certaines périodes de l'année (charter et cargo supprimés). Par ailleurs, j'ai enlevé les compagnies qui n'existent plus ainsi que les avions qui ne volent plus (aucun vol effectué depuis plusieurs mois) mais qui sont encore dans la liste de la compagnie. Concernant les pays, j'ai compté les pays qui ont des avions effectivement basés et non qui sont seulement enregistrés (Exemple de Ryanair: enregistré en Irlande mais leurs avions sont dispersés en Europe). C'est pour cela qu'il n'y a pas tous les pays car certains n'ont aucun avions commerciaux basés chez eux. Enfin, pour compter l'âge moyen, j'ai pris comme date de référence mai 2023, et j'ai fais des arrondis dans les moyennes.

## Interface
Tout d'abord, il y a une carte avec des points. Ses derniers sont placés sur l'aéroport le plus grand de chaque pays (avec son code IATA à trois lettres). Je souhaitais montrer en faisant ainsi que l'aéroport le plus grand ne se situe pas toujours dans la capitale. Vous trouverez sur la carte: Pays, Capitale, Aéroport principal, Compagnie principale, Nombre d'avions au total dans le pays et l'âge moyen de la flotte du pays.

<img width="1135" alt="Capture d’écran 2023-12-14 à 09 40 15" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/e9d88e11-bf4e-409e-92f7-f898ff8abd0c">

Ensuite vous avez les graphiques qui résument les données en général. 

![untitled(1)](https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/f1ef1987-14b0-4b8c-ae10-7809cd35c88a)
![untitled(2)](https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/20193454-ea77-4e36-884b-cb9d4b3ecd18)

Enfin, vous pouvez visualiser les données en détail pour la compagnie, constructeur et le pays.
<img width="1280" alt="Capture d’écran 2023-12-14 à 11 28 50" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/fd082541-99a8-43cc-a7fc-0699412444f9">
<img width="1280" alt="Capture d’écran 2023-12-14 à 11 29 14" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/2edc3656-0bcb-4317-8079-02817c045026">
<img width="1280" alt="Capture d’écran 2023-12-14 à 11 29 33" src="https://github.com/artii1202/Monde-aviation-commerciale-Europe/assets/100208267/54d4554f-5b53-429e-90dc-832f33b4bb88">

## Cadre de développement
Ce projet a été développé exclusivement par moi, Artiom Voronine, dans le cadre du cours "Visualisation de données" dispensé par Isaac Pante (SLI, Lettres, UNIL)

## Procédure d'installation et d'exécution:
1. Téléchargez Visual Studio Code (https://code.visualstudio.com) et installez le
2. Téléchargez l'extension "Live Server"
3. Après avoir téléchargé le dossier contenant le code sur GitHub, ouvrez le dossier sous Fichier, puis "Ouvrir le dossier" en haut à gauche dans Visual Studio Code, puis lancez le Live Server et votre navigateur par défaût s'ouvrira.

## Remerciements
Je vous souhaite de très bonnes fêtes de fin d'année! Je tiens également à remercier le Professeur Isaac Pante et son assistant Loris pour m'avoir appris pleins de notions durant leur cours de "Visualisation de données". 
