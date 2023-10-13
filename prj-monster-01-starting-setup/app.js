random_gen=(min,max)=>{
    return Math.floor(Math.random() * (max-min))+ min;
}

const app=Vue.createApp({
    data(){
    return {
    MonsterHealth:100,
    PlayerHealth:100,
    count:0
    }
    },
    computed:{
    MonsterHealthBar(){
    return {width:this.MonsterHealth+'%'};
    },
    PlayerHealthBar(){
    return {width:this.PlayerHealth+'%'};
    },
    specialAttackOption(){ 
    return this.count % 3 != 0 
    }
    },
    methods:{
    PlayerAttacking(){
    const playerDamage=random_gen(7,12)
    this.MonsterHealth-=playerDamage;
    this.MonsterAttacking();
    },
    MonsterAttacking(){
    const monsterDamage=random_gen(8,15);
    this.PlayerHealth-=monsterDamage;
    this.count++;
    },
    SpecialPlayerAttacking(){
    const specialDamagepoint=random_gen(10,20);
    this.MonsterHealth-=specialDamagepoint;
    this.MonsterAttacking();
    }
    }
})

app.mount("#game");