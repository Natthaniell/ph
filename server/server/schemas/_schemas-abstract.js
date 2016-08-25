"use strict";
/// <reference path="../../typings/index.d.ts" />
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var SchemaQL = (function () {
    function SchemaQL(data) {
        this.data = data;
    }
    SchemaQL.prototype.get = function () {
        var model = this.createModel();
        var schema = this.createSchema(new graphql.GraphQLObjectType(model), this.data);
        return new graphql.GraphQLSchema({
            query: new graphql.GraphQLObjectType(schema)
        });
    };
    SchemaQL.prototype.use = function (app, name) {
        console.log('Schema ' + name + ' running on http://localhost:3000/' + name);
        app.use(name, graphqlHTTP({ schema: this.get(), pretty: true }));
    };
    return SchemaQL;
}());
exports.SchemaQL = SchemaQL;
//# sourceMappingURL=_schemas-abstract.js.map