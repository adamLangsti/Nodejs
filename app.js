const express = require('express');
const app = express();
let { people } = require('./data');

// Static assets
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// Post name
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'Please provide a name' });
    }
    res.status(201).json({ success: true, person: name });
});
// Post alt url
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'Please provide a name' });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});
// Update
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id: ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
});

// Delete
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id: ${req.params.id}`,
        });
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: newPeople });
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
