<template>
    <form>
        <label for="firstName">First name:</label>
        <input type="text" v-model="firstName" />
        <br />
        <label for="firstName">Last name:</label>
        <input type="text" v-model="lastName" />
        <br />
        <label for="firstName">Email:</label>
        <input type="email" v-model="email" />
        <br />
        <label for="firstName">Phone number:</label>
        <input type="tel" v-model="phoneNumber" />
        <br />
        <button @click.prevent="addNewFriend()">Submit</button>
    </form>
</template>
<script>
export default {
    emits: ['add-new-friend'],
    data(){
        return {
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',

        };
    },
    methods:{
        addNewFriend(){
            this.$emit('add-new-friend', {
                id: this.firstName.toLocaleLowerCase(),
                name: this.firstName + ' ' + this.lastName,
                phone: this.phoneNumber,
                email: this.email
            })
        }
    }
}
</script>
