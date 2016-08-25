/// <reference path="../../typings/index.d.ts" />
import graphql  = require('graphql');
import graphqlHTTP  = require('express-graphql');

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
        var schema = this.createSchema(new graphql.GraphQLObjectType(model), this.data);
        return new graphql.GraphQLSchema({
            query: new graphql.GraphQLObjectType(schema)
        });
    }

    use(app, name) {
        console.log('Schema '+name+' running on http://localhost:3000/' + name);
        app.use(name, graphqlHTTP({schema: this.get(), pretty: true}));
    }
}