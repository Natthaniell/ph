/// <reference path="../typings/index.d.ts" />
"use strict";
// Import the required libraries
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');
var path = require('path');
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
        var userType = ql_1.QL.createUser({
            id: { type: graphql.GraphQLString },
            name: { type: graphql.GraphQLString }
        });
        var schema = ql_1.QL.createSchema(userType, data);
        this.app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
        console.log('GraphQL server running on http://localhost:3000/graphql');
    };
    return Server;
}());
Server.bootstrap();
//# sourceMappingURL=server.js.map