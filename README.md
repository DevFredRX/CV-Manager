# CV Manager
La solution intelligente pour vos candidatures

<div align="center">
    <img src="https://img.shields.io/badge/Maintenu-Oui-success?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Licence-MIT-yellow?style=for-the-badge" />
</div>

<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

## Présentation du projet

**CV Manager** est une application moderne conçue pour centraliser et optimiser la gestion des candidatures. Le projet adopte une architecture robuste permettant une séparation claire entre la logique métier (NestJS) et l'interface utilisateur (React).

> **NOTE**  
> *Ce projet est actuellement en version `0.0.0` et utilise le système de modules `commonjs`.*

## Stack technique & Orchestration <img align="right" src="https://img.shields.io/badge/Concurrently-FF69B4?style=for-the-badge&logo=npm&logoColor=white" />

L'écosystème repose sur des technologies de pointe garantissant scalabilité et maintenabilité :

* **Frontend :** React.js - Interface utilisateur réactive et composable.
* **Backend :** NestJS - Frameword Node.js progressif pour des API fiables.
* **Base de données :** MySQL - Gestion relationnelle pour une intégrité maximale.
* **Validation :** Utilisation de `class-validator` (^0.15.1) et `class-transformer` (^0.5.1) pour la sécurité des données.
* **Orchestration :** `concurrently` (^9.2.1) - Utilisé pour piloter le développement Fullstack en une seule commande.

## Installation et Démarrage <img align="right" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" /> <img align="right" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />

### Prérequis

* **Node.js** (Version LTS recommandée)
* **NPM**
* Une instance **MySQL** active

### Clonage et Installation

```Bash
git clone git+ssh://git@github.com/DevFredRX/CV-Manager.git
cd CV-Manager
npm install
```

> **NOTE**  
> *L'installation à la racine permet de configurer les outils d'orchestration.*

### Commandes de développement

Le projet utilise des scripts automatisés pour simplifier votre flux de travail :

|Commande|Action|
|--|--|
|npm run dev|Lancement combiné (Serveur NestJS + Client React)|
|npm run dev:server|Lance uniquement le serveur NestJS (mode watch)|
|npm run dev:client|Lance uniquement le client React|

## Roadmap & Conception

* Initialisation de l'architecture Monorepo.
* Modélisation de la base de données MySQL.
* Développement des API Endpoints (Auth, CV, Applications).
* Design de l'interface Dashboard sur React.

## Licence

Distribué sous la licence MIT. Voir [LICENCE](./LICENSE) pour plus d'informations.

## Contact <img align="right" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />

**FredRX** - [GitHub Profile](https://github.com/DevFredRX)  
**CV Manager** - [Link Project](https://github.com/DevFredRX/CV-Manager)  
**Bugs & Issues** - [Link Bugs](https://github.com/DevFredRX/CV-Manager/issues)

___

**© 2026 CV Manager. La solution intelligente pour vos candidatures.**