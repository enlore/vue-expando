/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'

export default {
    entry: 'src/expando.vue',
    targets: [
        { dest: 'dist/expando.umd.js', format: 'umd', moduleName: 'Expando', moduleId: 'Expando' },
        { dest: 'dist/expando.js', format: 'es' },
    ],
    plugins: [
        vue({
            css: 'dist/expando.css',
            compileTemplate: true
        }),
        buble()
    ]
}
