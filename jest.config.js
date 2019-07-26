switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: ['/node_modules/', '/tools/'],
      moduleFileExtensions: ['js', 'jsx'],
      moduleNameMapper: {
        '~(.*)': '<rootDir>/src$1',
      },
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.js',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.flow-typed',
        '.*\\.e2e-spec.js$',
      ],
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
          '<rootDir>/tools/assets-transform.js',
      },
    };
    break;

  case 'e2e':
    module.exports = {
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.js',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.flow-typed',
        '.*\\.spec.js$',
      ],
      transform: {
        '^.+\\.js$': 'babel-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
