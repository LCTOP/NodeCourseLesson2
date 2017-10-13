const http = require('http');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const RoutersController = require('../controllers/');

const models = require('../models');

module.exports = class ChatApp {
    constructor() {
        this.initServer();
        this.initMiddlwares();
        this.initControllers();
    }

    initServer() {
        this.app = express();
        this.server = http.createServer(this.app);

        this.server.on('error', error => console.log(error));
    }

    initMiddlwares() {
        this.app.use(morgan('dev'));
        this.app.use(express.static(path.join(__dirname, '..', 'public')));
    }

    initControllers() {
        this.app.use(new RoutersController().router);
    }

    async listen() {
        await models.sequelize.sync();

        return new Promise((resolve, reject) => {
            this.server.listen(3000, resolve);
        });
    }
};