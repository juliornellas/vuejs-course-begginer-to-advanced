const app = Vue.createApp({
    data() {
        return {
            style:'',
            show: true,
            background:'',
        }
    },
    methods: {
        selectedClass(event){
            return this.style = event.target.value
        },
        visibleOrHidden(){
            return this.show = !this.show
        },
        backgroundColor(event){
            return this.background = `background-color:${event.target.value}`
        }
    },
    computed: {
        toggledOption(){
            return this.show 
            ? [{ visible: true}, {hidden: false }] 
            : [{ visible: false}, {hidden: true }]
        }
    }
})
app.mount('#assignment')