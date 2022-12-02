const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: ''
        }
    },
    methods: {
        addOne() {
            return this.counter++;
        },
        addFive() {
            return this.counter = this.counter + 5;
        },
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter == 37) {
                return this.counter
            } else {
                return 'Too much!'
            }
        }
    },
    watch: {
        counter() {
            const that = this
            setInterval(() => {
                this.counter = 0
            }, 5000)
        }
    }
})
app.mount('#assignment')