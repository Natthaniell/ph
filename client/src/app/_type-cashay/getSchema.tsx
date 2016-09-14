require('babel-polyfill');
require('babel-register');
const {transformSchema} = require('cashay');
const graphql = require('graphql').graphql;
const rootSchema = require('./schema.tsx');
module.exports = transformSchema(rootSchema, graphql);