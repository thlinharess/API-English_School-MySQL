const bodyParser = require('body-parser');

const People = require('./peopleRoutes.js');
const Levels = require('./levelRoutes.js');
const Classes = require('./classesRoutes.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        People,
        Levels,
        Classes
    )
}