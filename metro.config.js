/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

//const jsoMetroPlugin = require("obfuscator-io-metro-plugin")(
//  {
//    // for these option look javascript-obfuscator library options from  above url
//    compact: false,
//    sourceMap: false,
//    controlFlowFlattening: true,
//    controlFlowFlatteningThreshold: 1,
//    numbersToExpressions: true,
//    simplify: true,
//    stringArrayShuffle: true,
//    splitStrings: true,
//    stringArrayThreshold: 1,
//  },
//  {
//    runInDev: false /* optional */,
//    logObfuscatedFiles: true /* optional generated files will be located at ./.jso */
//  }
//);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
//  ...jsoMetroPlugin,
};
//
//const obfuscator = require('obfuscator-io-metro-plugin');
//const upstreamTransformer = require('metro-react-native-babel-transformer');
//
//const isAndroid = process.argv.includes('--platform android');
//
//module.exports = {
//  transformer: {
//    getTransformOptions: async () => ({
//      transform: {
//        experimentalImportSupport: false,
//        inlineRequires: false,
//      },
//    }),
//    transform: async (props) => {
//      const transformed = await upstreamTransformer.transform(props);
//
//      if (isAndroid && !props.options.dev) {
//        const obfuscationResult = obfuscator.obfuscate(
//          transformed.code,
//          {
//            // Pass your obfuscation options here for Android. Example:
//            compact: true,
//            controlFlowFlattening: true,
//            controlFlowFlatteningThreshold: 0.75,
//            deadCodeInjection: true,
//            deadCodeInjectionThreshold: 0.4,
//            debugProtection: true,
//            debugProtectionInterval: true,
//            disableConsoleOutput: true,
//            identifierNamesGenerator: 'hexadecimal',
//            log: false,
//            renameGlobals: false,
//            rotateStringArray: true,
//            selfDefending: true,
//            shuffleStringArray: true,
//            splitStrings: true,
//            splitStringsChunkLength: 10,
//            stringArray: true,
//            stringArrayEncoding: 'rc4',
//            stringArrayThreshold: 0.75,
//            unicodeEscapeSequence: false,
//          }
//        );
//
//        transformed.code = obfuscationResult.getObfuscatedCode();
//      }
//
//      return transformed;
//    },
//  },
//};

