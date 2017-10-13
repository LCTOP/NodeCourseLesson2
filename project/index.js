const ChatApp = require('./app');

const app = new ChatApp();

app.listen()
    .then(() => console.log('yeee'))
    .then(() => console.log('yeee2'));
