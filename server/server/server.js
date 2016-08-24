/// <reference path="../typings/index.d.ts" />
"use strict";
var graphqlHTTP = require('express-graphql');
var express = require('express');
var path = require('path');
// Import the data
var data = require('./data/data.json');
var goldberg_1 = require("./schemas/goldberg");
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
    /**
     * Configure web page
     */
    Server.prototype.configClientHtml = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/public/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, '../../client/public')));
    };
    /**
     * Configure GraphQL schemas
     */
    Server.prototype.configGraphQL = function () {
        var schema = goldberg_1["default"].create(data);
        this.app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
        console.log('GraphQL server running on http://localhost:3000/graphql');
    };
    return Server;
}());
Server.bootstrap();
//# sourceMappingURL=server.js.map