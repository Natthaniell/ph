/// <reference path="../../typings/index.d.ts" />
import {QL} from '../ql';
import {GraphQLInt} from "graphql";
import {GraphQLString} from "graphql";

abstract class SchemaQL {
    constructor(){}
    abstract createModel();
    abstract createSchema();
}

export default class SchemaGoldberg extends SchemaQL {
    
    constructor() {
        super();
    }

    createSchema() {

    }

    createModel() {
        var userType = QL.createModel({
            // What name is doing ? not used at all ?!?!
            name: "Goldberg",
            description: "Member of The Goldbergs",
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
        });
    }
}