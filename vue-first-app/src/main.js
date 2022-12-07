import { createApp } from 'vue';
import App from './App.vue';

//Components
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend'

const app = createApp(App)

app.component('Friend-Contact', FriendContact);
app.component('New-Friend', NewFriend);

app.mount('#app');
