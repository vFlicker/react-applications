import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/',
  documents: ['src/**/*.{ts,tsx,gql}'],
  ignoreNoDocuments: true,

  generates: {
    './src/types/graphql.generated.ts': {
      plugins: [{ add: { content: '// @ts-nocheck' } }, 'typescript'],
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: './types/graphql.generated.ts',
      },
      plugins: [
        { add: { content: '// @ts-nocheck' } },
        'typescript-operations',
        'typed-document-node',
      ],
      config: {
        useTypeImports: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        defaultScalarType: 'unknown',
        nonOptionalTypename: false,
        skipTypeNameForRoot: true,
      },
    },
  },
};

export default config;
