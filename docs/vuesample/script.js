'use strict';

new Vue({
  el: '.js-component01',
  data: {
    text: 'テキストテキスト'
  }
});

new Vue({
  el: '.js-component02',
  data: {
    text: ''
  }
});

new Vue({
  el: '.js-component03',
  data: {
    input: '',
    text: ''
  },
  methods: {
    output: function() {
      this.text = this.input;
    }
  }
});
