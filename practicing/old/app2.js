const app = Vue.createApp({
    data: function(){
        return {
            name:'',
            lastName:''
        }
    },

    methods: {
        showAlert(){
            alert('Show alert!')
        },
        downEvent(event){
            this.name = event.target.value
        },
        enterEvent(event){
            this.lastName = event.target.value
        },
    },
})

app.mount('#app')