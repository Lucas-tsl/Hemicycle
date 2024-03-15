Contrôle des accès de l’hémicycle de l’Assemblée Nationale

Ce projet vise à renforcer la sécurité des députés siégeant à l’Assemblée Nationale en fournissant un nouveau badge contenant un QR code. 

Un sas de sécurité contrôlera l’accès aux zones réservées aux députés via leur QR Code personnel. 

Pour réaliser cette fonctionnalité, une application mobile sera développée et s’exécutera sur des terminaux fournis par la DGSI.

Objectifs du Projet

Développer une application mobile capable de lire un QR Code et d’afficher les informations qu’il contient.
Assurer que seuls les QR Code de type Vcard soient pris en charge.

Afficher les informations des députés contenues dans le QR Code, incluant leur photo pour une meilleure reconnaissance.
Enregistrer les accès à l’hémicycle dans une base de données, incluant le nom, prénom, date et heure d'entrée, pour un suivi des accès.
Technologies Utilisées

Expo pour le développement d'applications mobiles multi-plateformes.
Bibliothèque de lecture de QR Code (à déterminer).

Utilisation de données provenant de nosdeputes.fr API et du Répertoire National des Élus.
Base de données pour stocker les informations sur les accès à l'hémicycle.

Installation et Exécution

Clonez le dépôt Git :
bash
Copy code
git clone https://github.com/Lucas-tsl/Hemicycle.git

Installez les dépendances :
bash
Copy code
cd nom-du-repertoire
npm install

Lancez l'application :
bash
Copy code
npm start

Suivez les instructions pour exécuter l'application sur un émulateur ou un appareil réel.

Fonctionnalités

Lecture des QR Code de type Vcard.
Affichage des informations des députés, y compris leur photo.
Enregistrement des accès à l'hémicycle dans une base de données.
Commentaires sur le Code
Le code source est commenté pour expliquer les choix techniques, l'implémentation des fonctionnalités et les décisions de conception.

Charte d'Utilisation
Dans le cadre de ce projet, l'outil qui m'accompagne dans la réalisation du code est ChatGPT.

Vidéo de Présentation
Une vidéo de présentation de la plateforme sera fournie, présentant les fonctionnalités et expliquant les choix techniques en 5 minutes maximum.

Pour toute question ou assistance, veuillez contacter https://gisseugi.fr/.
