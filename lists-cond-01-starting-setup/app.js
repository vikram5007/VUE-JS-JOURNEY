const app = Vue.createApp({
  data() {
    return { 
      goals: [] ,
      usergoals:""    
    };
  },
  methods:{
  addgoals(e){
  this.goals.push(this.usergoals);
  this.usergoals=''
  },
  goalremover(index){
  this.goals.splice(index,1)
  }
  }
});

app.mount('#user-goals');
