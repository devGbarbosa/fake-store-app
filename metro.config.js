const path = require('node:path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withZephyr } = require('zephyr-metro-plugin');
const { withModuleFederation } = require('@module-federation/metro');

const config = {
  resolver: { useWatchman: false },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../packages/core'),
  ],
};

const getConfig = async () => {
  const zephyrConfig = await withZephyr()({
    name: 'hostApp',
    remotes: {
      miniApp: 'miniApp@http://localhost:8082/mf-manifest.json',
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: '19.1.0',
        version: '19.1.0',
      },
      'react-native': {
        singleton: true,
        eager: true,
        requiredVersion: '0.80.0',
        version: '0.80.0',
      },
    },
    shareStrategy: 'loaded-first',
    plugins: [path.resolve(__dirname, './runtime-plugin.ts')],
  });

  return withModuleFederation(
    mergeConfig(getDefaultConfig(__dirname), config),
    zephyrConfig,
    {
      flags: {
        unstable_patchHMRClient: true,
        unstable_patchInitializeCore: true,
        unstable_patchRuntimeRequire: true,
      },
    },
  );
};

module.exports = getConfig;
