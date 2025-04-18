import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/plutchik.umd.js',
    format: 'umd',
    name: 'Plutchik' // exposes window.Plutchik
  },
  plugins: [resolve(), commonjs()]
};
