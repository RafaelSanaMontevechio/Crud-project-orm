const app = require('./app')();
const model = require('./models/index');

const port = process.env.PORT || 3000;

/* Sincroniza o banco e inicia a aplicação */
model.sequelize.sync({}).then(() => {
    app.listen(port, (err) => {
        if (err) {
            console.log('It could not initiate the server!');
        } else {
            console.log('CRUD-ORM is running');
        }
    });
});


