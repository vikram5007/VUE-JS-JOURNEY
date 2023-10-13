const cssapp = Vue.createApp({
  data() {
    return {
      Inp: "",
      StyleA: false,
      StyleB: false,
      view: "",
      inliner: "red",
    };
  },
  computed: {
    styler() {
      if (this.Inp == "user1") {
        return !this.StyleA;
      } else {
        return this.StyleA;
      }
    },
    styler2() {
      if (this.Inp == "user2") {
        return !this.StyleB;
      } else {
        return this.StyleB;
      }
    },
  },
  methods: {
    toggler() {
      if (this.view == "hidden") {
        this.view = "visible";
      } else {
        this.view = "hidden";
      }
    },
  },
});

cssapp.mount("#assignment");
