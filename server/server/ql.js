"use strict";
/// <reference path="../typings/index.d.ts" />
var graphql = require('graphql');
var graphql_1 = require("graphql");
var QL = (function () {
    function QL() {
    }
    // Define the User type with two string fields: `id` and `name`.
    // The type of User is GraphQLObjectType, which has child fields
    // with their own types (in this case, GraphQLString).
    QL.createModel = function (model) {
        return new graphql.GraphQLObjectType(model);
    };
    // Define the schema with one top-level field, `user`, that
    // takes an `id` argument and returns the User with that ID.
    // Note that the `query` is a GraphQLObjectType, just like User.
    // The `user` field, however, is a userType, which we defined above.
    QL.createSchema = function (schemaDataType, data) {
        return new graphql.GraphQLSchema({
            query: new graphql.GraphQLObjectType({
                name: "query",
                description: "Goldberg query",
                fields: {
                    goldberg: {
                        type: schemaDataType,
                        args: {
                            id: {
                                type: graphql_1.GraphQLInt
                            }
                        },
                        resolve: function (_, args) {
                            return data[args.id];
                        }
                    }
                } })
        });
    };
    return QL;
}());
exports.QL = QL;
//# sourceMappingURL=ql.js.map