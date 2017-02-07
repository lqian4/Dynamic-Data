'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: "GET",
  path: "/",
    handler: function(request,reply){
        reply("Hello World");
    }
    
});

server.route({
    method: "GET",
    path: "/{name}/{Lastname}",
    handler: function(request,reply){
      reply("Hello "+ encodeURIComponent(request.params.name)+ " "  + encodeURIComponent(request.params.Lastname) + "!");  
    }
})

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});