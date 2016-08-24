/// <reference path="../typings/index.d.ts" />

// Import the required libraries
import graphql      = require('graphql');
import graphqlHTTP  = require('express-graphql');
import express      = require('express');
import path         = require('path');
import {QL} from './ql';


// Import the data you created above
import data = require('./data.json');

class Server{

    private app;

    /**
     * Bootstrap the application.
     *
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
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

    configClientHtml() {
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/public/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, '../../client/public')));
    }

    configGraphQL() {
        var userType = QL.createUser({
            id: { type: graphql.GraphQLString },
            name: { type: graphql.GraphQLString },
        });
        var schema = QL.createSchema(userType, data);
        this.app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
        console.log('GraphQL server running on http://localhost:3000/graphql');

    }

}




Server.bootstrap();