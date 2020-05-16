import { GraphQLSchema } from 'graphql'
import { relativeImportPath } from '../common/relativeImportPath'
import { RenderContext } from '../common/RenderContext'

const packageJson = require('../../../package.json')

export const renderClient = (schema: GraphQLSchema, ctx: RenderContext) => {
  const options = []

  const queryType = schema.getQueryType()
  const mutationType = schema.getMutationType()
  const subscriptionType = schema.getSubscriptionType()

  if (queryType) options.push(`queryRoot: typeMap.${queryType.name}`)
  if (mutationType) options.push(`mutationRoot: typeMap.${mutationType.name}`)
  if (subscriptionType) options.push(`subscriptionRoot: typeMap.${subscriptionType.name}`)

  const typeMapperImport =
    ctx.config &&
    ctx.config.output &&
    ctx.config.options &&
    ctx.config.options.typeMapper &&
    relativeImportPath(ctx.config.output, ctx.config.options.typeMapper.location)

  if (typeMapperImport) options.push('typeMapper')

  ctx.addCodeBlock(`
    "use strict";
    var __assign =
      (this && this.__assign) ||
      function() {
        __assign =
          Object.assign ||
          function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var __1 = require("${packageJson.name}");
    ${typeMapperImport ? `var typeMapper = require("${typeMapperImport}").typeMapper;` : ''}
    exports.createClient = function(options) {
      var typeMap = __1.linkTypeMap(require("./typeMap.json"));
      return __1.createClient(
        __assign({}, options, {
          ${options.join(',')}
        })
      );
    };
  `)
}
