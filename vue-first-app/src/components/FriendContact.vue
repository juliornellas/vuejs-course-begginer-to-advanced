<template>
    <div>
        <li>
            <!-- <h2>{{name}} {{friendIsFavorite === '1' ? '(Favorite)':''}} </h2> -->
            <!-- <h2>{{name}} {{friendIsFavorite ? '(Favorite)':''}} </h2> -->
            <h2>{{name}} {{isFavorite ? '(Favorite)':''}} </h2>
            <button @click="toggleDetails()"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <br /><br />
            <button @click="toggleIsFavorite()"> Are you favorite? {{isFavorite === '1' ? 'Yes :)':'No :('}}</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong>{{phoneNumber}}</li>
                <li><strong>Email:</strong>{{emailAddress}}</li>
            </ul>
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                required: true
            },
            'name': {
                type: String,
                required: true
            },
            'phoneNumber': {
                type: String,
                required: true
            },
            'emailAddress': {
                type: String,
                required: true
            },
            'isFavorite': {
                type: Boolean,
                required: false,
                default: false
            },
            // 'isFavorite': {
            //     type: String,
            //     required: false,
            //     default: '0', //may be a function(){}
            //     validator: function(value){
            //         return value === '1' || value === '0'; //In this way you can ensure only 0 and 1 can be passed through
            //     }
            // }
        },
        data(){
            return {
                // friend: {
                //         id: 'joaquim',
                //         name: 'Joaquim José',
                //         phone: '0123 45678 90',
                //         email: 'joaquim@mail.com'
                // },
                // friendIsFavorite: this.isFavorite,
                detailsAreVisible: false,
            };
        },

        methods:{
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleIsFavorite(){
                // return this.friendIsFavorite === '1'
                // ? this.friendIsFavorite = '0'
                // : this.friendIsFavorite = '1'

                // this.friendIsFavorite = !this.friendIsFavorite

                console.log('inside component', this.id)
                this.$emit('toggle-favorite', this.id);
            }
        }
    };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
    * {
    box-sizing: border-box;
    }

    html {
    font-family: 'Jost', sans-serif;
    }

    body {
    margin: 0;
    }

    header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
    }

    #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
</style>
