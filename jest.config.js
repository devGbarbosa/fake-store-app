const config = {
  preset: 'react-native',
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/src/features/**/tests/*.test.tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation|@?react-native)',
  ],
  globals: {
    __DEV__: true,
  },
}

module.exports = config
