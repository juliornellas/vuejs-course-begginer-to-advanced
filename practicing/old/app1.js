const app = Vue.createApp({
    data: function(){
        return {
            courseName: 'Vue JS for Beginners',
            courseDescription: 'This is a basic course of VueJS the JavaScript Framework!',
            courseDuration: '1 hour',
            coursesList: ['Vue JS', 'JavaScript Essentials', 'PHP Basics', 'HTML', 'CSS3', 'Angular', 'Tailwind','Laravel','Quasar Framework', 'Inertia']
        }
    },

    methods: {
        raffleCourse(){
            const x = Math.floor(Math.random()*10)
            return this.coursesList[x]
        }
    },
})

app.mount('#app')