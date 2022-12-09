import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseBadge from './components/BaseBadge.vue';

//SLOTS
import SlotBaseCard from './components/SlotBaseCard'

const app = createApp(App);

// app.component('the-header', TheHeader);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);
app.component('base-badge', BaseBadge);

//SLOTS
app.component('slot-base-card', SlotBaseCard)

app.mount('#app');
