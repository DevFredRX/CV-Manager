# CV Manager - Server Application
La solution intelligente pour vos candidatures

<div align="center">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeORM-FE0808?style=for-the-badge&logo=typeorm&logoColor=white" />
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
    <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
    <img src="https://img.shields.io/badge/prettier-1A2C37?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
</div>

**CV Manager - Server Application** est le coeur d'orchestration (Backend) de la plateforme de gestion de CV. Conçu avec le framework **NestJS**, il repose sur une architecture modulaire, scalable et typée, garantissant une haute fiabilité des données et des processus métier.

## Architecture & Conception

Le projet suit les principes de l'**Architecture Hexagonale**, favorisant le découplage entre la logique métier et les couches d'infrastructure.

### Stack technique (Mise à jour 2026)

* **Framework :** NestJS v11.1.18 (Progressive Node.js framework).
* **Langage :** TypeScript v6.0.2 pour un typage statique fort.
* **Base de données :** MySQL v3.21 via l'ORM TypeORM v0.3.28.
* **Sécurité :** Hachage via Argon2 v0.44.0 et authentification JWT avec Passport.
* **Tests :** Jest v30.3.0 pour les tests unitaires et E2E.
* **Qualité :** ESLint v10.2.0 et Prettier v3.8.1.

### Diagramme de flux de données

Le serveur traite les requêtes selon le cycle de vie suivant :

1. **Request Pipeline :** Guard (Auth) > Interceptor > Pipe (Validation).
2. **Controller :** Point d'entrée des API, gère le routage.
3. **Service :** Contient la logique métier pure.
4. **Repository :** Abstraction de la couche d'accès aux données MySQL.

## Installation & Configuration <img align="right" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" /> <img align="right" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />

### Prérequis

* Node.js (Version recommandée : v25.2+ selon types)
* Gestionnaire de paquets : npm
* Instance MySQL 8+ active

### Installation
```Bash
npm install
```

### Configuration du système

Le serveur utilise une configuration segmentée et typée via @nestjs/config, garantissant la validation des variables d'environnement dès le démarrage.

#### Modules de configuration

* **App (`app.config.ts`) :** Gestion des points de terminaison `FRONTEND_URL` et `BACKEND_URL`.
* **Database (`db.config.ts`) :** Connexion TypeORM sécurisée avec validation du port.
* **Mail (`mail.config.ts`) :** Configuration SMTP validée (Host, Port, User, Pass).
* **Serveur (`server.config.ts`) :** Sécurité JWT et paramètres globaux de l'application.

#### Variables d'environnement requises (.env)

Assurez-vous que votre fichier `.env` contient toutes les clés suivantes, sous peine d'erreur de lancement :

```Ini, TOML
# Base
FRONTEND_URL=...
BACKEND_URL=...

# Database (MySQL)
DB_HOST=...
DB_PORT=3306
DB_USER=...
DB_PASSWORD=...
DB_NAME=...

# Mail (SMTP)
MAIL_HOST=...
MAIL_PORT=...
MAIL_USER=...
MAIL_PASS=...
MAIL_FROM=...

# Security & Assets
JWT_SECRET=...
JWT_EXPIRES=...
LOGO_URL=...
COPY_URL=...
```

## Commandes & Scripts<img align="right" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />

|Commande|Description|
|--|--|
|npm run start:dev|Lance le serveur en mode **Watch** (Nest CLI).|
|npm run build|Compile le projet via nest build vers le dossier /dist.|
|npm run lint|Analyse et corrige le code avec ESLint v10.|
|npm run format|Formate le code selon les règles Prettier v3.8.|
|npm run migration:up|Applique les migrations TypeORM en attente.|

## Gestion de la base de données

Le projet utilise `typeorm-ts-node-commonjs` pour la gestion des données.

* **Génération** : `npm run migration:generate <path>/<name>`
* **Exécution** : `npm run migration:up`
* **Rollback** : `npm run migration:down`

## Stratégie de qualité & Tests

La fiabilité est assurée par une suite de tests rigoureuse (Jest v30) utilisant --detectOpenHandles pour éviter les fuites de mémoire.

* **Tests unitaires :** npm run test (Fichiers .spec.ts).
* **Tests End-to-End (E2E) :** npm run test:e2e (Intégration complète via Supertest).
* **Couverture :** npm run test:cov (Génère un rapport dans /coverage).

## Sécurité et Maintenance

* **Souveraineté des données :** Validation stricte des DTOs et communication chiffrée.
* **Gestion des vulnérabilités :** Overrides forcés pour lodash ^4.17.21.
* **Emails :** Intégration de nodemailer v8.0.5 pour les procédures d'activation et de récupération.

___

**Note :** Ce projet est configuré en mode private: true. Toute distribution non autorisée est interdite.

**© 2026 CV Manager. La solution intelligente pour vos candidatures.**