const fs = require('fs');
const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    database: 'top-chat',
    dielect: 'sqlite',
    storage: path.join(__dirname, '..', '..', 'chat.db')
});

const models = { sequelize, Sequelize };
const modelsDirPath = __dirname;

fs.
    readdirSync(modelsDirPath)
    .filter(filename => filename !== 'index.js' && filename.substr(-3) === '.js')
    .forEach((filename) => {
        const filepath = path.join(modelsDirPath, filename);
        const Model = sequelize.import(filepath);

        models[Model.name] = Model;
    });

module.exports = models;
