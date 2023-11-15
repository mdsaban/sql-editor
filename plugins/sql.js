import Vue from "vue";
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/sql/sql.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon//hint/sql-hint.js'


import 'codemirror/theme/base16-dark.css'
const VueCodemirror = require('vue-codemirror')

Vue.use(VueCodemirror, {
  options: {
    tabSize: 4,
    mode: { name: 'sql' },
    showHint: true,
    // theme: 'base16-dark',
    lineNumbers: true,
    height: "500px",
    hint: true,
    autocomplete: true,
    // extraKeys: {"Ctrl-Space": "autocomplete"},
  },
})
