<template>
    <div>

        <section>
            <header>
                <h1>My friends</h1>
            </header>
            <New-Friend @add-new-friend="addNewFriend"></New-Friend>
            <ul>
                <div v-if="(friends.length === 0)">
                    You don't have any friends!
                </div>
                <Friend-Contact
                v-for="friend in friends"
                    :key="friend.id"
                    :id="friend.id"
                    :name="friend.name"
                    :phone-number="friend.phone"
                    :email-address="friend.email"
                    :is-favorite="friend.isFavorite"
                    @toggle-favorite="toggleFavoriteStatus"
                    @delete-friend="deleteFriend"
                ></Friend-Contact>
                <!-- <Friend-Contact
                    name="Maria Emilia"
                    phone-number="0987 65432 10"
                    email-address="maria@mail.com"
                ></Friend-Contact>         -->
            </ul>
        </section>
        <br />
        <hr />
        <section>
            <header>
                <h1>Practice</h1>
            </header>
            <User-Data @register-user="registerUser"></User-Data>
            <br />
            <div v-if="(users.length === 0)">
                No Active Users!
            </div>
            <br />
            <Active-User v-for="user in users"
            :key="user.id"
            :name="user.name"
            :age="user.age"></Active-User>
        </section>

    </div>
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
                ],
                users: [],
            };
        },

        methods:{
            toggleFavoriteStatus(friendId){
                const identifiedFriend = this.friends.find(friend => friend.id === friendId);
                console.log('favorite toggle', identifiedFriend)
                identifiedFriend.isFavorite = !identifiedFriend.isFavorite
            },
            addNewFriend(newFriend){
                console.info('New Friend data', newFriend)
                this.friends.push(newFriend)
            },
            deleteFriend(friendId){
                this.friends = this.friends.filter(friend => friend.id !== friendId)
            },
            //Practice
            registerUser(newUser){
                console.log('New Active User', newUser)
                this.users.push(newUser)
            }
        }
        // components:{
        //     FriendContact
        // }
    };
</script>