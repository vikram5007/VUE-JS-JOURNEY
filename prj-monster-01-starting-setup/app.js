random_gen = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      MonsterHealth: 100,
      PlayerHealth: 100,
      count: 0,
      Match: null,
      battleLog:[]
    };
  },
  computed: {
    MonsterHealthBar() {
      if (this.MonsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.MonsterHealth + "%" };
    },
    PlayerHealthBar() {
      if (this.PlayerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.PlayerHealth + "%" };
    },
    specialAttackOption() {
      return this.count % 3 != 0;
    },
  },
  watch: {
    PlayerHealth(value) {
      if (value <= 0 && this.MonsterHealth <= 0) {
        this.Match = "Draw";
      } else if (value <= 0) {
        this.Match = "Monster";
      }
    },
    MonsterHealth(value) {
      if (value <= 0 && this.PlayerHealth <= 0) {
        this.Match = "Draw";
      } else if (value <= 0) {
        this.Match = "Player";
      }
    },
  },
  methods: {
    restart(){
    this.count=0;
    this.PlayerHealth=100;
    this.MonsterHealth=100;
    this.Match=null;
    this.battleLog=[];
    },
    PlayerAttacking() {
      const playerDamage = random_gen(7, 12);
      this.MonsterHealth -= playerDamage;
      this.AddEvents('player','Attack',playerDamage)
      this.MonsterAttacking();
    },
    MonsterAttacking() {
      const monsterDamage = random_gen(8, 15);
      this.PlayerHealth -= monsterDamage;
      this.AddEvents('Monster','Attack',monsterDamage)
      this.count++;
    },
    SpecialPlayerAttacking() {
      const specialDamagepoint = random_gen(10, 20);
      this.MonsterHealth -= specialDamagepoint;
      this.AddEvents('player','Special Attack',specialDamagepoint)
      this.MonsterAttacking();
    },
    HealPlayer() {
      this.count++;
      const healvalue = random_gen(10, 15);
      if (this.PlayerHealth + healvalue >= 100) {
        this.PlayerHealth = 100;
      } else {
        this.PlayerHealth += healvalue;
      }
      this.AddEvents('player','Heals',healvalue)
      MonsterAttacking();
    },
    Surrendered(){
    this.Match='Monster';
    },
    AddEvents(who,what,value){
    this.battleLog.unshift({
        Actioner:who,
        ActionType:what,
        Value:value
    });
    }
  },
});

app.mount("#game");
