module.exports = api => {
  api.cache(true);

  return {
    env: {
      app: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              corejs: '3',
              shippedProposals: true,
              targets: '> 0.25%, not dead',
            },
          ],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-syntax-dynamic-import',
        ],
      },
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              corejs: '3',
              shippedProposals: true,
              targets: {
                node: 'current',
              },
            },
          ],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-syntax-dynamic-import',
          'dynamic-import-node',
        ],
      },
    },
  };
};
