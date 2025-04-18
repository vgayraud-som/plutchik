import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/plutchik.js', // 👈 Your existing JS file
  output: {
    file: 'dist/plutchik.umd.js',
    format: 'umd',
    name: 'Plutchik', // 👈 exposes window.Plutchik globally
    exports: 'default' // 👈 ensures default export works
  },
  plugins: [resolve(), commonjs()]
};
