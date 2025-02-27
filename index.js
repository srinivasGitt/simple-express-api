const express = require('express');
const app = express()
const port = 3000;

const objects = [
    { id: 1, name: 'Object One', description: 'This is the first object.' },
    { id: 2, name: 'Object Two', description: 'This is the second object.' },
    { id: 3, name: 'Object Three', description: 'This is the third object.' }
];

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/objects', (req, res) => {
    res.json(objects);

})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

