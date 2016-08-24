/// <reference path="../typings/index.d.ts" />
"use strict";
// Import the required libraries
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');
var ql_1 = require('./ql');
// Import the data you created above
var data = require('./data.json');
var Server = (function () {
    /**
     * Constructor.
     *
     * @constructor
     */
    function Server() {
        this.app = express();
        this.app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
        this.app.listen(3000);
        console.log('GraphQL server running on http://localhost:3000/graphql');
        // GraphQL schema
        var userType = ql_1.QL.createUser({
            id: { type: graphql.GraphQLString },
            name: { type: graphql.GraphQLString }
        });
        var schema = ql_1.QL.createSchema(userType, data);
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
    return Server;
}());
Server.bootstrap();
//# sourceMappingURL=server.js.map