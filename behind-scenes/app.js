const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

/**
 * APP2
 */
Vue.createApp({
  data(){
    return {
      favoriteMeal: 'Hamburger'
    }
  }
})
.mount('#app2')

/**
 * OUT OF VUE
 * UNDERSTANDING THE REACTIVITY
 */
// let message = 'Hello';

// let longMessage = message + ' World!'
// console.log (longMessage)

// message = 'Helloooooo'
// console.log (longMessage) //Not change

//Proxy
const data = {
  message: 'Hello',
  other: 'Other message'
};

const handler = {
  set(target, key, value) {
    if(key === 'message'){
      target.other = value + ' there !!!'
    }
    target.message = value
    // console.log('Target',target)
    // console.log(`Key: ${key} - Value: ${value}`)
  }
}

//Wrap with Proxy
//Constructor function built into modern javascript browser. Make sure you're testing this code in a modern browser
//HANDLER is the object that sets new values to the 'data' object tracking by Proxy
const proxy = new Proxy(data, handler);

proxy.message = 'New Hello';

proxy.other = 'New other message';

console.log('Message', proxy.message)
console.log('Other', proxy.other)