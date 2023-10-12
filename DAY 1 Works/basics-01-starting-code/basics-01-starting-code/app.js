const app = Vue.createApp({
  data() {
    return {
      goals: ["Complete the task !", "Go Home Sleep Well !"],
      textA:"Random Number is Cool ",
      textB:"Random number is much More Cooler",
      link: "https://www.g2techsoft.com/",
      target: "_blank",
    };
  },
  methods: {
    randomGenerator() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.textA;
      } else {
        return this.textB;
      }
    },
  },
});

app.mount("#user-goal");
