const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const db = require('./config/db')

const tickerSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
});

const Ticker = mongoose.model('Ticker', tickerSchema);
app.use(express.static('public'));


async function fetchDataAndStore() {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;

        const top10 = Object.values(tickers).slice(0, 10);

        await Ticker.deleteMany({}); 

        for (const ticker of top10) {
            const { name, last, buy, sell, volume, base_unit } = ticker;
            const newTicker = new Ticker({ name, last, buy, sell, volume, base_unit });
            await newTicker.save();
        }
    } catch (error) {
        console.error(error);
    }
}


app.get('/api/tickers', async (req, res) => {
    try {
        fetchDataAndStore();
        const tickers = await Ticker.find({});
        res.json(tickers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
