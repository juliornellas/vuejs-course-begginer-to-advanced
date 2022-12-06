<template>
    <section>
        <header>
            <h1>My friends</h1>
        </header>
        <ul>
            <Friend-Contact
            v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                :is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteStatus"
            ></Friend-Contact>
            <!-- <Friend-Contact
                name="Maria Emilia"
                phone-number="0987 65432 10"
                email-address="maria@mail.com"
            ></Friend-Contact>         -->
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
                        email: 'joaquim@mail.com',
                        isFavorite: false
                    },
                    {
                        id: 'maria',
                        name: 'Maria Emilia',
                        phone: '0987 65432 10',
                        email: 'maria@mail.com',
                        isFavorite: true
                    },
                ]
            };
        },

        methods:{
            toggleFavoriteStatus(friendId){
                const identifiedFriend = this.friends.find(friend => friend.id === friendId);
                identifiedFriend.isFavorite = !identifiedFriend.isFavorite
            }
        }
        // components:{
        //     FriendContact
        // }
    };
</script>