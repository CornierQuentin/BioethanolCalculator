# Bioéthanol Calculator

Une application développé en Electron JS permettant de calculer ses gains pour une conversion d'un véhicule au bioéthanol E85

## Pour Commencer

Ce projet se base sur la technologie ELectron JS qui permet la création de software à partir d'une architecture web, avec de l'HTML et du CSS pour la partie graphique et du javascript pour la partie logique.

### Pré-requis

Vous avez besion d'installer [Node.js](https://nodejs.org/en/download/)

### Installation

Pour commencer vous avez besoin de télécharger le repository sur votre machine

Vous devez, créer un nouveau dossier :

```
$ mkdir MonDossier

$ cd MonDossier
```

Installer Electron JS :

```
$ git clone https://github.com/electron/electron-quick-start

$ cd electron-quick-start

$ npm install
```

Vous devez ensuite copier les fichiers du dossier Electron JS du repository dans le dossier electron-quick-start de votre nouveau dossier, en remplaçant ceux en double.

Vous devez ensuite installer electron forge avec la commande:

```
$ npx @electron-forge/cli import
```

Vous pouvez ensuite lancer l'application avec la commande :
```
$ npm start
```
![alt text](https://github.com/CornierQuentin/BioethanolCalculator/blob/main/Screenshots/Exemple%20de%20lancement.JPG "Image montrant la page d'accueil de l'application")

## Distribution

Pour distribuer l'application il faut compiler le programme avec la commande :

```
$ npm run make
```

Ensuite il faut créer un package en installant [Inno Setup](https://jrsoftware.org/isdl.php)

Et en ouvrant le code .iss, disponible dans Electron_JS/Inno_Setup, dans le logiciel et ensuite il faut exécuter ce code, qui créera un fichier .exe sur le bureau.

## Développer avcec

* [Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown) - VS Code comme IDE de développement et pour la rédaction des markdown avec le README.md basé sur le template GitHub :
  * [README-Template.md](https://gist.github.com/JulienRAVIA/1cc6589cbf880d380a5bb574baa38811/) - Template en Français créé par [@JulienRAVIA](https://gist.github.com/JulienRAVIA/)
* [Node.js](https://nodejs.org/en) - Technologie permettant de faire tourner Electron JS
* [Electron JS](https://www.electronjs.org/) - Framework permettant de créer l'application

## Versions

Versions disponible :

- **Dernière version stable :** 1.3
- **Dernière version :** 1.3

Liste des versions : [Cliquer pour afficher](https://github.com/CornierQuentin/BioethanolCalculator/releases/tag/1.3)

## Auteurs

Application développée par :

* **Quentin Cornier** _alias_ [@CornierQuentin](https://github.com/CornierQuentin/)

## License

Ce projet est sous licence ``AGPL - GNU Affero General Public License v3.0`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

