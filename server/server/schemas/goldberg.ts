/// <reference path="../../typings/index.d.ts" />
///<reference path="../../typings/modules/graphql/index.d.ts"/>
import graphql  = require('graphql');
import {GraphQLString} from "graphql";
import {GraphQLInt} from "graphql";
import {SchemaQL, SchemaQLModel, SchemaQLQuery} from "./_schemas-abstract";

/**
 * Goldberg Schema for GraphQL
 * - extends SchemaQL for implementation
 */
export default class SchemaGoldberg extends SchemaQL {

    protected constructor(data) {
        super(data);
    }

    /**
     * Static create
     * - creates new schema
     * @param data
     * @returns {SchemaGoldberg}
     */
    static create(data){
        return new SchemaGoldberg(data);
    }

    protected createModel() : SchemaQLModel {
        return {
            name: 'Goldberg',
            description: 'asdasdsa',
            fields: {
                character: {
                    type: GraphQLString,
                    description: "Name of the character",
                },
                actor: {
                    type: GraphQLString,
                    description: "Actor playing the character",
                },
                role: {
                    type: GraphQLString,
                    description: "Family role"
                },
                traits: {
                    type: GraphQLString,
                    description: "Traits this Goldberg is known for"
                },
                id: {
                    type: GraphQLInt,
                    description: "ID of this Goldberg"
                }
            }
        }
    }

    protected createSchema(schemaDataType, data) : SchemaQLQuery {
        return {
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
                    resolve: function (_, args: any) {
                        return data[args.id];
                    }
                }
            }
        }
    }

}