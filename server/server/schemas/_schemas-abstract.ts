/// <reference path="../../typings/index.d.ts" />
import graphql  = require('graphql');

export interface SchemaQLModel {
    name: string;
    description: string;
    fields: any;
}

export interface SchemaQLQuery {
    name: string;
    description: string;
    fields: any;
}

export abstract class SchemaQL {
    private data;
    protected constructor(data) {
        this.data = data;
    }
    protected abstract createModel(): SchemaQLModel;
    protected abstract createSchema(schemaDataType : any, data : any): SchemaQLQuery;
    get() {
        var model = this.createModel();
        this.createSchema(new graphql.GraphQLObjectType(model), this.data);
        return
    }
}