require('dotenv').config();
// console.log(process.env);

const express = require('express'); 
const app = express(); 

// Mention port on which listening
const port = 4000;

app.get('/', (req, res) => {
    console.log('juicy p');
    res.send('Welll cummm to port!!'); 
});

app.get('/bb', (req, res) => {
    res.send('<h1>Oooo Meri ZOHRAJABEEN, ISHQ DA JAM BEECHA JA</h1>')
});


// Server is always listening.
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${port}`);
})