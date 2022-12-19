<template>
    <li>
        <Base-Card>
          <header>
              <h3>{{title}}</h3>
              <Base-Button mode="flat" @click="removeResource(id)">Delete</Base-Button>
          </header>

          <p>{{description}}</p>
          <nav>
            <a :href="link" target="_blank">View Resource</a>
          </nav>
        </Base-Card>
    </li>
</template>

<script>
// import BaseCard from '../UI/BaseCard.vue';

export default {
  inject: ['removeResource'],
    props: {
      id: {
        type: String,
        required: true
      },
        "title": {
            "type": String,
            "required": true
        },
        "description": {
            "type": String,
            "required": true
        },
        "link": {
            "type": String,
            "required": true
        },
    },
    // components: { BaseCard }
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>