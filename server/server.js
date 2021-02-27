const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const path = require('path');

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// rutas
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Modo history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
    console.log(`Port: ${app.get('port')}`);
});