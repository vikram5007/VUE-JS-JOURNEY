Vue.createApp({
  data() {
    return {
      goals: [],
      Enteredvalue: "",
    };
  },
  methods: {
    AddTask() {
      this.goals.push(this.Enteredvalue);
      this.Enteredvalue = "";
    },
  },
}).mount("#app");

// const btn = document.querySelector('button');
// const input= document.querySelector('input');
// const unordererlist=document.querySelector('ul');

// Add_List=()=>{
// const value=input.value;
// const list_element=document.createElement('li');
// list_element.textContent=value;
// unordererlist.appendChild(list_element);
// input.value='';
// }

// btn.addEventListener('click',Add_List);
