const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000; // Port de l'API

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://Anicet:Anicet1604@cluster0.r1ckt.mongodb.net/taskBD')
    .then(() => {
        console.log('Connecté à la base de données MongoDB');
    })
    .catch(err => {
        console.error('Erreur de connexion à MongoDB:', err);
    });

// Définir le modèle de tâche
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

// Route pour créer une nouvelle tâche
app.post('/tasks', async (req, res) => {
    
    try {
    const task = new Task({
        title: req.body.title
    });
        const result = await task.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Route pour lire la liste des tâches
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route pour afficher une tâche spécifique
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send('Tâche non trouvée');
        res.json(task);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route pour modifier une tâche
app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            completed: req.body.completed
        }, { new: true });

        if (!task) return res.status(404).send('Tâche non trouvée');
        res.json(task);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Route pour supprimer une tâche
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send('Tâche non trouvée');
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en cours d'exécution à http://localhost:${port}`);
});


//Pour le message dans le naviguateur
app.get(`/`,(request,response)=>{
    response.send(`Salut les amis, Bienvenu sur l'API de Anicet`);
})