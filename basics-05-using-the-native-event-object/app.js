const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      finalName: "",
    };
  },
  watch:{
  name(value){
  if(value==""){
    this.finalName='';
  }else{
    this.finalName=value + ' ' + ' Vijayakumar '
  }
  }
  },
  computed: {
    // fullname() {
    //   console.log("Calling");
    //   if(this.name) 
    //   return this.name + " " + " Vijayakumar";
    //   else
    //   return " "
    // },
  },
  methods: {
    reset() {
      this.name = "";
    },
    setName(e) {
      this.finalName = e.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
