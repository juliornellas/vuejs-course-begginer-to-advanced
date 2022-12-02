/**
 * Vanilla JavaScript
 * Imperative approach
 */
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = "";
// }

// buttonEl.addEventListener('click', addGoal)

/**
 * VueJS
 * Declarative approach
 */
Vue.createApp({
    data: function () {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal: function () {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
}).mount('#app');