//Function out vue app because this function it's not used by any methods, etc
function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound:0,
            winner: null,
            logMessages: []
        }
    },

    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster(){
            this.currentRound++;
            //Range max (12) ~ min (5) and add min again (5)
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 14);
            this.playerHealth -= attackValue;
            this.addLogMessage('Monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(9, 23);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'special attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8, 25);
            // if(this.playerHealth + healValue > 100){
            //     this.playerHealth = 100;
            // }else{
            //     this.playerHealth += healValue;
            // }
            (this.playerHealth + healValue > 100) ? this.playerHealth = 100 : this.playerHealth += healValue;
            this.addLogMessage('Player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'Monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },

    computed: {
        monsterBarStyles(){
            return this.monsterHealth < 0
            ? { width: '0%' }
            : {width: this.monsterHealth + '%'}
        },

        playerBarStyles(){
            return this.playerHealth < 0
            ? { width: '0%' }
            : {width: this.playerHealth + '%'}
        },
        useSpecialAttackOrHeal(){
            return this.currentRound % 3 !==0
        }
    },

    watch: {
        playerHealth(newValue){
            if(newValue <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw'
            }else if(newValue <= 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(newValue){
            if(newValue <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }else if(newValue <= 0){
                this.winner = 'player'
            }
        }
    }
})
app.mount('#game')