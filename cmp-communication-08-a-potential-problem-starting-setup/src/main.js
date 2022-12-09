import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

/**
 * App-level provides are available to all components rendered in the app. 
 * This is especially useful when writing plugins, as plugins typically 
 * wouldn't be able to provide values using components.
 */
// app.provide(/* key */ 'message', /* value */ 'hello!')

app.mount('#app');
