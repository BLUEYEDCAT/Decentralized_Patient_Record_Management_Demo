const {createServer} = require('http');
const next = require('next');


 const app = next({
   dev : process.env.NODE_ENV !== 'production'
 });

const port = parseInt(process.env.PORT, 10) || 3000;
const routes = require('./routes');
const handler = routes.getRequestHandler(app);


app.prepare().then( () => {

    createServer(handler).listen(port, (err) => {
      if (err) throw err;
      console.log('the server is ready on port 4000');
      console.log('please proceed to the browser and access localhost on port 4000');
    });
});
