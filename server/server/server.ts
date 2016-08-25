/// <reference path="../typings/index.d.ts" />

// Import the required libraries
import graphql      = require('graphql');
import express      = require('express');
import path         = require('path');

// Import the data
import data = require('./data/data.json');
import dataMovies = require('./data/movies.json');
import SchemaGoldberg from "./schemas/goldberg";
import SchemaMovies from "./schemas/movies";

class Server {

    private app;

    /**
     * Bootstrap the application.
     *
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap():Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor() {
        this.app = express();
        this.app.listen(3000);
        this.configClientHtml();
        this.configGraphQL();
    }

    /**
     * Configure web page
     */
    configClientHtml() {
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/public/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, '../../client/public')));
    }

    /**
     * Configure GraphQL schemas
     */
    configGraphQL() {

        // Create goldberg schema
        SchemaGoldberg.create(data).use(this.app, '/goldberg');
        // Create movies schema
        SchemaMovies.create(dataMovies).use(this.app, '/movies');

    }

}


Server.bootstrap();