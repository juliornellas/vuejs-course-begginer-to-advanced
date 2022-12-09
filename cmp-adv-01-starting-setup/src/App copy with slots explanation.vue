<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> This way works when don't use dash -->

    <badge-list></badge-list>

    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <!-- If you've just one slot you don't need to use the "template", you just identify in the "course-goals" tag -->
    <course-goals #default="otherAnyName">
      <!-- The otherAnyName is an object that holds all props that came from the slot -->
      <!-- <template v-slot:default="otherAnyName">  -->
        <h2>{{ otherAnyName.anyNameYouWant }}</h2>
        <p>{{ otherAnyName.otherProp }}</p>
      <!-- </template> -->
    </course-goals>
    
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue'

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components:{
    // 'the-header': TheHeader,
    // TheHeader: TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>