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
var SchemaGoldberg = (function (_super) {
    __extends(SchemaGoldberg, _super);
    function SchemaGoldberg(data) {
        _super.call(this, data);
    }
    /**
     * Static create
     * - creates new schema
     * @param data
     * @returns {SchemaGoldberg}
     */
    SchemaGoldberg.create = function (data) {
        return new SchemaGoldberg(data);
    };
    SchemaGoldberg.prototype.createModel = function () {
        return {
            name: 'Goldberg',
            description: 'asdasdsa',
            fields: {
                character: {
                    type: graphql_1.GraphQLString,
                    description: "Name of the character"
                },
                actor: {
                    type: graphql_1.GraphQLString,
                    description: "Actor playing the character"
                },
                role: {
                    type: graphql_1.GraphQLString,
                    description: "Family role"
                },
                traits: {
                    type: graphql_1.GraphQLString,
                    description: "Traits this Goldberg is known for"
                },
                id: {
                    type: graphql_2.GraphQLInt,
                    description: "ID of this Goldberg"
                }
            }
        };
    };
    SchemaGoldberg.prototype.createSchema = function (schemaDataType, data) {
        return {
            name: "query",
            description: "Goldberg query",
            fields: {
                goldberg: {
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
    return SchemaGoldberg;
}(_schemas_abstract_1.SchemaQL));
exports.__esModule = true;
exports["default"] = SchemaGoldberg;
//# sourceMappingURL=goldberg.js.map