const express = require('express');
const app = express();

// Define the metadata for the planets
const planets = [
    {
        id: 1,
        name: 'Earth',
        description: 'The third planet from the sun and the only known planet to support life.',
        image: 'https://th.bing.com/th/id/OIG.GTounlNIilFmqI8RVk8n?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },
    {
        id: 2,
        name: 'Mars',
        description: 'The fourth planet from the sun and the second-smallest planet in the solar system.',
        image: 'https://th.bing.com/th/id/OIG.bZp9NJ3QjR_jHRoryhD_?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    }
];

// Define the route to get the metadata for a planet by ID
app.get('/planets/:id', (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (!planet) return res.status(404).send('The planet with the given ID was not found.');
    res.send(planet);
});

// Define the route to get the metadata for all planets
app.get('/planets', (req, res) => {
    res.send(planets);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));