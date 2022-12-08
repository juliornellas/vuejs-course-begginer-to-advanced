import { createApp } from 'vue';
import App from './App.vue';

//Components
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend'

//Practice
import UserData from './components/practice/UserData'
import ActiveUser from './components/practice/ActiveUser'

const app = createApp(App)

app.component('Friend-Contact', FriendContact);
app.component('New-Friend', NewFriend);

//practice
app.component('User-Data', UserData);
app.component('Active-User', ActiveUser);

app.mount('#app');
