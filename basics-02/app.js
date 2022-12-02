Vue.createApp({
    data(){
        return {
            counter: 0,
            name:'',
            fullName:''
        };
    },
    methods: {
        increment(num){
            this.counter = this.counter + num;
        },
        decrement(num){
            this.counter = this.counter - num;
        },
        setName(event, lastName){
            this.name = event.target.value + ' ' + lastName;
        },
        submitForm(){
            // event.preventDefault(); //Using this way is Vanilla JavaScript
            alert('Submitted!')
        }
    },
    computed:{
        // fullName() {
        //     return this.name ? `${this.name} Orn`:''
        // }
    },
    watch: {
        name(newValue, oldValue){
            this.fullName =  newValue ? `${newValue} Orn`:''
        }
    }
})
.mount('#events');