const express = require('express');
const config = require('config');
const connectDB = require('./config/db');
const flipCoin = require('./bot-actions/flipCoin');
const searchNark = require('./bot-actions/searchNark');
const weatherForcast = require('./bot-actions/weatherForcast');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// // Define Routes
app.use('/api/test', require('./routes/api/test'));

// TG example
const TelegramBot = require('node-telegram-bot-api');
const token = config.get('telegram-bot-token');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

flipCoin(bot);
searchNark(bot);
weatherForcast(bot);

app.locals.bot = bot;

//////////////////////

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
