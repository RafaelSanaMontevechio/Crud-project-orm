const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const model = require('./models/index');
const pessoasRouter = require('./routes/pessoas');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => { res.render('index') });
app.use('/pessoas', pessoasRouter);

/* Sincroniza o banco e inicia a aplicação */
model.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => console.log('CRUD-ORM is running'));
});


