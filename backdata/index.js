const express = require('express');
const fs = require('fs');
const app = express();

const stocksData = JSON.parse(fs.readFileSync(`${__dirname}/src/stockdata.json`));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/v1/all', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: stocksData.length,
        data: {
            stocksData
        }
    });
});

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})