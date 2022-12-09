<template>
  <div>

    <the-header></the-header>
    <!-- <TheHeader /> This way works when don't use dash -->

    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <button @click="setSelectedComponent('ListGoals')">List Goals</button>

    <!-- <Active-Goals v-if="selectedComponent === 'Active-Goals'"></Active-Goals>
    <Manage-Goals v-if="selectedComponent === 'Manage-Goals'"></Manage-Goals> -->

    <!-- Better practice -->
    <!-- is attribute say which component has to be shown -->
    <!-- Keep-alive do not destroy the component when you switch between then -->
    <keep-alive>
      <div  v-if="selectedComponent === 'Manage-Goals'">
        <component :is="selectedComponent"></component>
      </div>
      <div v-else>
        <component :is="selectedComponent"></component>
      </div>

    </keep-alive>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ListGoals from './components/ListGoals.vue'

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'Active-Goals'
    };
  },
  methods:{
    setSelectedComponent(component){
      this.selectedComponent = component;
    }
  },
  components:{
    // 'the-header': TheHeader,
    // TheHeader: TheHeader,
    TheHeader,
    ManageGoals,
    ActiveGoals,
    ListGoals
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