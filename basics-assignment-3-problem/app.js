const app = Vue.createApp({
  data() {
    return {
      stringA: "Not there yet",
      stringB: "Too much!",
      value:0
    };
  },
  watch: {
    string(value) {
        const that=this;
        setTimeout(() => {
        that.value = 0;
        }, 5000);
    },
  },
  computed: {
    string() {
      if (this.value < 37) {
        return this.stringA;
      } else if (this.value > 37) {
        return this.stringB;
      } else {
        return this.value;
      }
    },
  },
  methods: {
    adder(num) {
      this.value+=num;
    },
  },
});

app.mount("#assignment");
