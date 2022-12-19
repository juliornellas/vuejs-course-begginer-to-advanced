import { createApp } from 'vue';
import App from './App.vue'

//Slots
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App)

//Slots
app.component('Base-Card', BaseCard);
app.component('Base-Button', BaseButton);
app.component('Base-Dialog', BaseDialog);

app.mount('#app');
