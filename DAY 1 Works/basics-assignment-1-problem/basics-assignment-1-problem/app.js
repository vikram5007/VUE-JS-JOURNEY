const app = Vue.createApp({
  data: function () {
    return {
      Name: "Vikram",
      Age: 22,
      link: "https://picsum.photos/200",
    };
  },
  methods: {
  AgeCalc(){
  return this.Age+5;
  },
  RandomGenerator(){
  return Math.random();
  }
  },
});

app.mount("#assignment");
