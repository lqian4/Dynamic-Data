'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        view:{
            template: 'index',
            context:{
                title: 'My Home Page',
                message:'More stuff to come',
            }
        }
    }
});

server.connection({
    port: 3000,
    host: 'localhost'
});

server.register([Blipp]);

server.register([Blipp], () => {});

server.views({
    engines:{
        html: Handlebars  
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'layout'
});

server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply) {
        reply("Hello World");
    }

});

server.route({
    method: "GET",
    path: "/{name}/{Lastname}",
    handler: function (request, reply) {
        reply("Hello " + encodeURIComponent(request.params.name) + " " + encodeURIComponent(request.params.Lastname) + "!");
    }
})

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});