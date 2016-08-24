"use strict";
/// <reference path="../../typings/index.d.ts" />
var graphql = require('graphql');
var SchemaQL = (function () {
    function SchemaQL(data) {
        this.data = data;
    }
    SchemaQL.prototype.get = function () {
        var model = this.createModel();
        this.createSchema(new graphql.GraphQLObjectType(model), this.data);
        return;
    };
    return SchemaQL;
}());
exports.SchemaQL = SchemaQL;
//# sourceMappingURL=_schemas-abstract.js.map