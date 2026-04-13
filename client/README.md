# CV Manager - Client Application
La solution intelligente pour vos candidatures

<div align="center">
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
</div>

## Vision & Philosophie du projet

**CV Manager - Client Application** n'est pas qu'une simple interface ; c'est un projet bâti sur le principe de **Souveraineté Numérique**. L'architecture est pensée pour être la moins invasive possible tout en offrant une expérience fluide et performante.

### Le choix éthique : Privacy-by-Choice

Le projet se distingue par sa gestion granulaire du consentement. Nous ne décidons pas de l'empreinte technique à la place de l'utilisateur :

* **Mode éphémère (Par défaut) :** Utilisation du *SessionStorage*. Aucune donnée ne survit à la fermeture de l'onglet. Empreinte disque nulle.
* **Mode persistante (Sur consentement) :** Utilisation du *LocalStorage*. Permet une reconnexion automatique et un confort d'usage accru.
* **Source de vérité (SSOT) :** Dans les deux cas, 100% des données métier (CV, informations personnelles) résident sur le serveur. Le client ne sert que de terminal de consultation et d'édition.

## Stack technique (Mise à jour 2026)

L'application exploite les versions les plus récentes de l'écosystème JavaScript pour garantir longévité et performances.

|Technologie|Version|Rôle|
|--|--|--|
|React.js|^19.2.5|UI Library utilisant les *Actions* et le hook *use()*.|
|React Router|^7.14.0|Framework de routage complet (Data Loading, Mutations, Hydratation).|
|Vite|^8.0.8|Build Tool de nouvelle génération (ES Modules natifs).|
|ESLint|^9.39.4|Analyse statique avec support des nouveaux standards JS.|

## Architecture de l'état & Données

### Gestion d'état via React Context

Plutôt que d'alourdir le projet avec des bibliothèque tierce, nous utilisons l'API **Context** native pour une intégration parfaite avec **React 19** :

* **AuthContext :** Gère l'identité et les permissions.
* **StorageContext :** Pilote dynamiquement le choix entre *SessionStorage* et *LocalStorage*.
* **DataContext :** Cache temporaire pour les données récupérées de l'API.

### Flux de synchronisation

1. **Chargement :** Les *Loaders* de React Router récupèrent les données en amont du rendu.
2. **Affichage :** Les composants consomment le Context pour un accès immédiat.
3. **Mutation :** Toute modification est envoyée au serveur, puis le cache local est invalidé pour garantir la fraîcheur.

## Installation et Développement <img align="right" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" /> <img align="right" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />

### Prérequis

* **Node.js** (Version 20+ recommandée)
* **Type** : ESM (ES Modules) activé.
* Une instance **CV Manager - Server Application** active.

### Commandes disponibles

* **npm install :** Installe les dépendances du projet.
* **npm run dev :** Lance le serveur de développement via **Vite**.
* **npm run build :** Compile et optimise le projet pour la production.
* **npm run lint :** Exécute **ESLint** (v9.39+) pour vérifier la qualité du code.
* **npm run preview :** Visualise localement le rendu de production après un build.

## Roadmap de développement

* **Système de consentement :** UI non-intrusive pour le choix du mode de stockage.
* **Moteur de stockage hybride :** Développement de l'utilitaire switchant entre session et local.
* **Sécurisation des routes :** Mise en place des gardes (Guards) via React Router 7.
* **Optimisation accessibilité (A11y) :** Audit complet pour garantir l'usage à tous.

___

**Note :** Ce projet est configuré en mode private: true. Toute distribution non autorisée est interdite.

**© 2026 CV Manager. La solution intelligente pour vos candidatures.**