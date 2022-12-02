//Global available object: Vue
//The object passed into .createApp() is the configuration of the main app created
const app = Vue.createApp({
    //data always return an object that can be access in the HTML page "Template"
    data(){
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/',
            courseGoalA:'Learn Vue',
            courseGoalB:'Master Vue',
            textWithHtml: '<h1>IT Courses</h1>'
        };
    },
    //Define an object with functions to be executed
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    },
})


app.mount('#user-goal');