const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goal:'',
      show: true,
    };
  },

  methods: {
    addGoal(){
      this.goals.push(this.goal)
      this.goal=''
    },
    removeGoal(goal){
      this.goals.splice(goal, 1)
    },
    showOrHide(){
      this.show = !this.show
    }
  },

  computed:{
    label(){
      return this.show ? 'Hide' : 'Show'
    }
  }
});

app.mount('#user-goals');
