'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');
const Vision = require('vision');
const Inert = require('inert');
const Path = require('path');
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

server.connection({
    port: 3000
});

server.register([Blipp, Inert, Vision], () => {});

server.views({
    engines: {
        html: Handlebars
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'layout',
    helpersPath: 'views/helpers'
        //partialsPath: 'views/partials'
});



server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: {
            template: 'index',
            context: {
                title: 'Beginning of the legend',
                menu: [
                    {
                        item: 'Go inside by himself.'
                    },
                    {
                        item: 'Find the way back home.'
                    },
                    {
                        item: 'Find someone to go inside with him'
                    }
                    ],
                message: 'The Evil King T has been the world for a long time and there is an ordinary little boy named Rooster who wants to be a swordsman all along starting at a very young age so that he can defeat the demon. So one day when he is practicing but the rain is too big and the ground become so wet that he falls off from a cliff. He wakes up and finds out that there is a mysterious cave with lights shining in front of him. What should he do?'
            }
        }
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './',
            listing: true,
            index: false,
            redirectToSlash: true
        }
    }
});


server.route({
    method: 'GET',
    path: '/dynamic',
    handler: {
        view: {
            template: 'dynamic',
            context: {
                title: "Rooster's Adventure",
                message: 'On a Spring Morning, Phil the Dino went to the park. Walking, he was startled by a ....',
                nav: [
                    {
                        url: "/page2/squirrel",
                        title: "squirrel"
                    },
                    {
                        url: "/page2/kite",
                        title: "kite"
                    },
                    {
                        url: "/page2/computer",
                        title: "computer"
                    }
                ]
            }

            //
        }
    }
});

server.route({
    method: 'GET',
    path: '/page2/{played*}',
    handler: function (request, reply) {

        var played = encodeURIComponent(request.params.played);
        var message = "" + played;


        reply.view('page2', {
            title: "Rooster's Adventure",
            message: message,
            pic: played,
            nav: [
                    {
                        url: "/page3/diamond",
                        title: "diamond"
                    },
                    {
                        url: "/page3/chest",
                        title: "chest"
                    },
                    {
                        url: "/page3/sword",
                        title: "sword"
                    }
                ]

        });
    }
});


server.route({
    method: 'GET',
    path: '/page3/{played*}',
    handler: function (request, reply) {
         var played = encodeURIComponent(request.params.played);
        var message = "found " + played ;
        reply.view('page2', {
            title: "Rooster's Adventure",
            message: message,
            pic: played

        });
    }
});

server.route({
    method: 'GET',
    path: '/basicHandler',
    handler: {
        view:{
            template: 'basic',
            context: {
               title: "Basic Handler",
                message: "More information"
            }

        }
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);

});
