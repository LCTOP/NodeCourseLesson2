const AbstractController = require('.');

const models = require('../models');

module.exports = class RoomsController extends AbstractController {
    initRouter() {
        this.router.get('/', (req, res) => res.redirect('/rooms'));
        this.router.get('/rooms', RoomsController.listAction);
    }

    static async listAction(req, res) {
        const rooms = await models.room.findAll();

        res.json({ rooms });
    };
};
