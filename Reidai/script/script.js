// JavaScript用ファイル
new Vue({
  el: '#app',

  data: {
    pass: '',
    spass: ''
  },
  computed: {
    isPasswordMatched() {
      return this.pass === this.spass && this.pass !== '' && this.spass !== '';
    },

    isButtonEnabled() {
      return this.isPasswordMatched;
    },

    shouldShowMismatchMessage() {
      return this.pass !== '' && this.spass !== '' && !this.isPasswordMatched;
    }
  }
});