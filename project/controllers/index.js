const express = require('express');

module.exports = class AbstractController {
    constructor() {
        this.router = express.Router();

        this.initRouter();
    }

    Router() {
        throw new Error('"initRouter" must be defined');
    }

};
