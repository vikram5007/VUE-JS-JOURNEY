const app=Vue.createApp({
 data(){
    return{
    OUTPUT:'',
    Confirmed:''
    }
 },
 methods:{
 alerter(){
    alert('Event Is Triggered ! ')
 },
 txtprinter(e){
    this.OUTPUT=e.target.value;
 },
 txtConfirmed(e){
    this.Confirmed=e.target.value;
 }
 }
})

app.mount("#assignment")