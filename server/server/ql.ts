/// <reference path="../typings/index.d.ts" />
import graphql  = require('graphql');
import {GraphQLString} from "graphql";
import {GraphQLInt} from "graphql";

export class QL{

    constructor(){

    }

    // Define the User type with two string fields: `id` and `name`.
    // The type of User is GraphQLObjectType, which has child fields
    // with their own types (in this case, GraphQLString).
    static createModel(model){
        return new graphql.GraphQLObjectType(model);
    }

    // Define the schema with one top-level field, `user`, that
    // takes an `id` argument and returns the User with that ID.
    // Note that the `query` is a GraphQLObjectType, just like User.
    // The `user` field, however, is a userType, which we defined above.
    static createSchema(schemaDataType, data){
        return new graphql.GraphQLSchema({
            query: new graphql.GraphQLObjectType({
                name: "query",
                description: "Goldberg query",
                fields: {
                    goldberg: {
                        type: schemaDataType,
                        args: {
                            id: {
                                type: GraphQLInt
                            }
                        },
                        resolve: function(_, args : any){
                            return data[args.id];
                        }
                    }
                // fields: {
                //     user: {
                //         type: userType,
                //         // `args` describes the arguments that the `user` query accepts
                //         args: {
                //             id: { type: graphql.GraphQLString }
                //         },
                //         // The resolve function describes how to "resolve" or fulfill
                //         // the incoming query.
                //         // In this case we use the `id` argument from above as a key
                //         // to get the User from `data`
                //         resolve: function (_, args : any) {
                //             return data[args.id];
                //         }
                //     }
                // }
            })
        });
    }

}

