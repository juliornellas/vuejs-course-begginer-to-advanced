<template>
    <form>
        <div>
            <label for="username">Name</label>
            <input type="text" v-model="username" />
        </div>
        <div>
            <label for="userAge">Age</label>
            <input type="number" v-model="userAge">
        </div>
        <button @click.prevent="registerUser">Submit</button>
    </form>
</template>
<script>
export default {
    emits: ['register-user'],
    data(){
        return {
            username:'',
            userAge: null
        };
    },
    methods:{
        registerUser(){
            this.$emit('register-user', {
                id: this.username.toLocaleLowerCase()+Math.floor(Math.random()*100),
                name: this.username,
                age: this.userAge
            })
            this.username = '';
            this.userAge = null;
        }
    }
}
</script>