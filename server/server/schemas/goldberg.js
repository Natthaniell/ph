"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/index.d.ts" />
var ql_1 = require('../ql');
var graphql_1 = require("graphql");
var graphql_2 = require("graphql");
var SchemaQL = (function () {
    function SchemaQL() {
    }
    return SchemaQL;
}());
var SchemaGoldberg = (function (_super) {
    __extends(SchemaGoldberg, _super);
    function SchemaGoldberg() {
        _super.call(this);
    }
    SchemaGoldberg.prototype.createSchema = function () {
    };
    SchemaGoldberg.prototype.createModel = function () {
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
    };
    return SchemaGoldberg;
}(SchemaQL));
exports.__esModule = true;
exports["default"] = SchemaGoldberg;
//# sourceMappingURL=goldberg.js.map