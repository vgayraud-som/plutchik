import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/plutchik.js',
  output: {
    file: 'dist/plutchik.umd.js',
    format: 'umd',
    name: 'Plutchik',      // global name for UMD
    exports: 'auto'        // ✅ Fix for mixed named/default exports
  },
  plugins: [resolve(), commonjs()]
};
