const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      Name:'',
      ConfirmName:''
    };
  },
  methods:{
    confirmer(){
    this.ConfirmName=this.Name;
    },
    adder(n){
      this.counter=this.counter+n;
    },
    reducer(n){
      this.counter=this.counter-n;
    },
    setName(e,lastname){
      this.Name=e.target.value +" "+ lastname;
    }
  }
});

app.mount('#events');
