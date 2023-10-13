const app = Vue.createApp({
  data() {
    return {
      userinp: "",
      goals: [],
      visualState: true,
      label: "hide",
    };
  },
  computed: {
    caption() {
      if (this.visualState) 
      return "Hide List";
      else 
      return "Show List";
    },
  },
  methods: {
    goaladder() {
      this.goals.push(this.userinp);
      this.userinp = "";
    },
    toggler() {
      this.visualState = !this.visualState;
      if (this.visualState) {
        this.label = "Hide";
      } else {
        this.label = "Show";
      }
    },
  },
});

app.mount("#assignment");
