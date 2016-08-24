/// <reference path="../typings/index.d.ts" />
"use strict";
var graphqlHTTP = require('express-graphql');
var express = require('express');
var path = require('path');
var ql_1 = require('./ql');
// Import the data you created above
var data = require('./data.json');
var graphql_1 = require("graphql");
var graphql_2 = require("graphql");
// Import existing schemas
var Server = (function () {
    /**
     * Constructor.
     *
     * @constructor
     */
    function Server() {
        this.app = express();
        this.app.listen(3000);
        this.configClientHtml();
        this.configGraphQL();
    }
    /**
     * Bootstrap the application.
     *
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.configClientHtml = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/public/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, '../../client/public')));
    };
    Server.prototype.configGraphQL = function () {
        var userType = ql_1.QL.createModel({
            // What name is doing ? not used at all ?!?!
            name: "Goldberg",
            description: "Member of The Goldbergs",
            fields: {
                character: {
                    type: graphql_2.GraphQLString,
                    description: "Name of the character"
                },
                actor: {
                    type: graphql_2.GraphQLString,
                    description: "Actor playing the character"
                },
                role: {
                    type: graphql_2.GraphQLString,
                    description: "Family role"
                },
                traits: {
                    type: graphql_2.GraphQLString,
                    description: "Traits this Goldberg is known for"
                },
                id: {
                    type: graphql_1.GraphQLInt,
                    description: "ID of this Goldberg"
                }
            }
        });
        var schema = ql_1.QL.createSchema(userType, data);
        this.app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
        console.log('GraphQL server running on http://localhost:3000/graphql');
    };
    return Server;
}());
Server.bootstrap();
//# sourceMappingURL=server.js.map