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
      // this.message = this.currentUserInput;
      // console.dir(this.$refs.userText);
      // console.log(this.$refs.userText.value);
      this.message = this.$refs.userText.value;
    },
  },

  //Nothing on screen
  //No access to data(), methods, etc
  beforeCreate() {
    console.log('beforeCreate()', this.message)
  },

  //Nothing on screen
  //the $el property will not be available
  //Data(), methods, etc are accessible and reactive
  //Created to beforeMount -> compile template
  created(){
    console.log('created()', this.message)
  },

  //Nothing on screen
  //Data(), methods, etc are accessible
  //This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.
  //This hook is not called during server-side rendering.
  beforeMount() {
    console.log('beforeMount()', this.message)
  },

  //Data(), methods, etc are processed, template was compiled and all is visible on screen
  //Useful when need access to the component rendered DOM
  //This hook is not called during server-side rendering.
  mounted() {
    console.log('mounted()', this.message)
  },

  //The data was changed but on screen (DOM) still the oldest
  //This hook is not called during server-side rendering.
  beforeUpdate(){
    console.log('beforeUpdate()', this.message)
  },

  //DOM load the new data
  //This hook is not called during server-side rendering.
  updated(){
    console.log('update()', this.message)
  },

  //You'll still see the app in the DOM
  // the component instance is still fully functional.
  //This hook is not called during server-side rendering.
  beforeUnmount() {
    console.log('beforeUnmount()', this.message)
  },

  //Removed from the DOM
  //Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.
  //This hook is not called during server-side rendering.
  unmounted() {
    console.log('unmounted()', this.message)
  },
});

app.mount('#app');

setTimeout(
  () => {
    app.unmount();//Just to see how beforeUnmount() and unmounted() works
  },
  3000
);


/**
 * APP2
 */
Vue.createApp({
  data(){
    return {
      favoriteMeal: 'Hamburger'
    }
  },
  template: `
    <p>{{favoriteMeal}}</p>
  `
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

// console.log('Message', proxy.message)
// console.log('Other', proxy.other)