Mon Projet de Gestion de Tâches

## Description
Une application simple pour gérer des tâches en utilisant MongoDB et Mongoose.

## Installation
1. Clonage du repository.

2. Naviguation dans le dossier de votre projet.

   cd server.js
   
3. Installation les dépendances.

4. Démarrage du  serveur.

   npm start

   5. Tester avec Postman


   PLUS DE DETAILS

   Description

Ce projet est une API REST simple permettant la gestion des tâches à l'aide de Node.js, Express et MongoDB. Elle permet de créer, lire, mettre à jour et supprimer des tâches stockées dans une base de données MongoDB.
Prérequis

Avant d'exécuter ce projet, assurez-vous d'avoir installé les éléments suivants :

    Node.js
    MongoDB

Installation

    Clonez ce dépôt :

    git clone https://github.com/votre-repo.git

    Accédez au dossier du projet :

    cd votre-repo

    Installez les dépendances :

    npm install

Configuration de la base de données

Le projet utilise MongoDB Atlas. Modifiez l'URL de connexion dans le fichier principal si nécessaire :

mongoose.connect('mongodb+srv://votre-utilisateur:motdepasse@cluster0.mongodb.net/taskBD')

Utilisation

Lancez le serveur avec la commande suivante :

node sever.js

Le serveur démarrera sur http://localhost:4000
Endpoints de l'API
1. Créer une tâche

POST /tasks

    Body : { "title": "Nom", "completed": "true" }

2. Lire toutes les tâches

GET /tasks
3. Lire une tâche spécifique

GET /tasks/:id
4. Mettre à jour une tâche

PUT /tasks/:id

    Body : { "title": "Nouveau nom", "completed": "false" }

5. Supprimer une tâche

DELETE /tasks/:id