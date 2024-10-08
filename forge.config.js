const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    executableName: 'Bluebird Teaching',
    asar: true,
    dir: __dirname,
    ignore: [
        '/var/run',
        '.*',         
        '/node_modules/.bin',
        '/out',  
        '/build-dir',  
      ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: "electron_quick_start",
        authors: "Yomen Tohmaz",
        description: "Sample App",
      },
    },
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          categories: ['Video'],
          mimeType: ['video/h264'],
          id: 'com.flathub.bluebird',
          runtimeVersion: '23.08',
          sdk: 'org.freedesktop.Sdk',
          runtime: 'org.freedesktop.Platform',
          base: 'org.electronjs.Electron2.BaseApp',
          baseVersion: '23.08'
        }
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};