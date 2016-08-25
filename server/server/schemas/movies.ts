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
export default class SchemaMovies extends SchemaQL {

    protected constructor(data) {
        super(data);
    }

    /**
     * Static create
     * - creates new schema
     * @param data
     * @returns {SchemaMovies}
     */
    static create(data){
        return new SchemaMovies(data);
    }

    protected createModel() : SchemaQLModel {
        return {
            name: 'movies',
            description: 'Movies database',
            fields: {
                id: {
                    type: GraphQLInt,
                    description: "ID of the movie"
                },
                title: {
                    type: GraphQLString,
                    description: "Name of the movie",
                }
            }
        }
    }

    protected createSchema(schemaDataType, data) : SchemaQLQuery {
        return {
            name: "query",
            description: "Movies query",
            fields: {
                movies: {
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