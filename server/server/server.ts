/// <reference path="../typings/index.d.ts" />

// Import the required libraries
import graphql      = require('graphql');
import graphqlHTTP  = require('express-graphql');
import express      = require('express');
import path         = require('path');
import {QL} from './ql';


// Import the data you created above
import data = require('./data.json');
import {GraphQLInt} from "graphql";
import {GraphQLString} from "graphql";

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

    configClientHtml() {
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/public/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, '../../client/public')));
    }

    configGraphQL() {
        var userType = QL.createModel({
            name: "Goldberg",
            description: "Member of The Goldbergs",
            fields: {
                character: {
                    type: GraphQLString,
                    description: "Name of the character",
                },
                actor: {
                    type: GraphQLString,
                    description: "Actor playing the character",
                },
                role: {
                    type: GraphQLString,
                    description: "Family role"
                },
                traits: {
                    type: GraphQLString,
                    description: "Traits this Goldberg is known for"
                },
                id: {
                    type: GraphQLInt,
                    description: "ID of this Goldberg"
                }
            }
        });
        var schema = QL.createSchema(userType, data);
        this.app.use('/graphql', graphqlHTTP({schema: schema, pretty: true}));
        console.log('GraphQL server running on http://localhost:3000/graphql');

    }

}


Server.bootstrap();