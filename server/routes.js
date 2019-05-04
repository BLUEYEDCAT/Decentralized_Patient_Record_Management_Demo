const routes = require('next-routes')();

routes
    .add('/','/index')
    .add('/patient/signup','/patient/signup');


module.exports = routes;
