"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var graphql_1 = require("graphql");
var graphql_2 = require("graphql");
var _schemas_abstract_1 = require("./_schemas-abstract");
/**
 * Goldberg Schema for GraphQL
 * - extends SchemaQL for implementation
 */
var SchemaMovies = (function (_super) {
    __extends(SchemaMovies, _super);
    function SchemaMovies(data) {
        _super.call(this, data);
    }
    /**
     * Static create
     * - creates new schema
     * @param data
     * @returns {SchemaMovies}
     */
    SchemaMovies.create = function (data) {
        return new SchemaMovies(data);
    };
    SchemaMovies.prototype.createModel = function () {
        return {
            name: 'movies',
            description: 'Movies database',
            fields: {
                id: {
                    type: graphql_2.GraphQLInt,
                    description: "ID of the movie"
                },
                title: {
                    type: graphql_1.GraphQLString,
                    description: "Name of the movie"
                }
            }
        };
    };
    SchemaMovies.prototype.createSchema = function (schemaDataType, data) {
        return {
            name: "query",
            description: "Movies query",
            fields: {
                movies: {
                    type: schemaDataType,
                    args: {
                        id: {
                            type: graphql_2.GraphQLInt
                        }
                    },
                    resolve: function (_, args) {
                        return data[args.id];
                    }
                }
            }
        };
    };
    return SchemaMovies;
}(_schemas_abstract_1.SchemaQL));
exports.__esModule = true;
exports["default"] = SchemaMovies;
//# sourceMappingURL=movies.js.map