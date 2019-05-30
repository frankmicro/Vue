Vue.component('Hello', {
    template: "<h1 style=text-align:center>Hello Component</h1>"
});

var vm = new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    methods: {
        startGame:function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack:function () {
            vm.$refs.attacked.innerText = "Attacked"
            this.monsterAttack()
            
            if (this.checkWin()) {
                return
            }
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: 'Player hits monster for' + damage
            })
            this.checkWin()
        },
        specialAttack: function () {
            vm.$refs.specialAttacked.innerText = "specialAttacked"
            this.monsterHealth -= this.calculateDamage(10, 20)
            if (this.checkWin()) {
                return
            }
            this.monsterAttack();
        },
        monsterAttack:function(min, max) {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Monster hits player for' + damage
            })
        },
        heal:function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
                
            } else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttack()
        },
        giveUp:function() {
            this.gameIsRunning = false
            this.turns = []
        },
        calculateDamage:function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function() {
            if (this.playerHealth <= 0) {
                if (confirm('You lost! new game')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if(this.monsterHealth <= 0) {
                if (confirm('You won! new game')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    },
});

var vm2 = new Vue({
    el:"#app2",
    methods: {
        display:function() {
            console.log(vm.$data.playerHealth) //global instance 
            vm.$refs.attacked.innerText = "Attacked" //referenced variable
        }
    },
});

var vm3 = new Vue({ 
    template:'<h1 style=text-align:center>Hello!</h1>'
});

vm3.$mount('#app3')


