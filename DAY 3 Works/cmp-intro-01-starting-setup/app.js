const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("friend-renderer", {
  data() {
    return {
      friend: {
        id: "Manuel ",
        Name: "Manuel Lorenz",
        Phone: "01234 5678 991",
        Email: "manuel@localhost.com",
      },
      visible: false,
    };
  },
  methods: {
    Toggler() {
      this.visible = !this.visible;
    },
  },
  template: `<li>
  <h2>{{friend.Name}}</h2>
  <button @click="Toggler">{{visible ? 'Hide': 'Show'}}</button>
  <ul v-if="visible">
    <li><strong>Phone:</strong> {{friend.Phone}}</li>
    <li><strong>Email:</strong>{{friend.Email}}</li>
  </ul>
</li>`,
});

app.mount("#app");
