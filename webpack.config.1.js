
const TerserPlugin = require('terser-webpack-plugin');

const entry = [
  "simple",
  "simple-with-cjs",
  "simple-with-asm",
].reduce((akk,file) => Object.assign(akk, { [file]: './cases/'+file }), {});

module.exports = {
  mode: 'production',
	entry,
	output: {
    libraryTarget: 'umd',
		path: __dirname + "/dist/config1",
		filename: "bundle-[name].js"
  },
  node: {
    fs: 'empty'
  },

	// disable uglify
	optimization: {
    usedExports: true,
    /*minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: false,
          mangle: false
        }
      }),
    ],*/
  },

  stats: {
    // Examine all modules
    maxModules: Infinity,
    // Display bailout reasons
    optimizationBailout: true
  }
}