<template>
    <section>
        <header>
            <h1>My friends</h1>
        </header>
        <ul>
            <Friend-Contact></Friend-Contact>
            <Friend-Contact></Friend-Contact>
        </ul>
    </section>
</template>

<script>
// import FriendContact from './components/FriendContact.vue'

    export default {
        data(){
            return {
                friends: [
                    {
                        id: 'joaquim',
                        name: 'Joaquim José',
                        phone: '0123 45678 90',
                        email: 'joaquim@mail.com'
                    },
                    {
                        id: 'maria',
                        name: 'Maria Emilia',
                        phone: '0987 65432 10',
                        email: 'maria@mail.com'
                    },
                ]
            };
        },
        // components:{
        //     FriendContact
        // }
    };
</script>