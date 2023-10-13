const app=Vue.createApp({
   data(){
    return{
    Box1:0,
    Box2:0,
    Box3:0
    }
   },
   methods:{
    ActiveSwitcher(num){
    if(num===1){
        this.Box1=!this.Box1
    }
    else if(num===2){
        this.Box2=!this.Box2
    }
    else{
        this.Box3=!this.Box3
    }
    }
   }
})


app.mount("#styling")