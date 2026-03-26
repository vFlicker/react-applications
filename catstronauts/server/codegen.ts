import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types/graphql.generated.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../context.js#DataSourceContext',
        mappers: {
          Track: '../models.js#TrackModel',
          Author: '../models.js#AuthorModel',
          Module: '../models.js#ModuleModel',
        },
        useTypeImports: true,
      },
    },
  },
};

export default config;
