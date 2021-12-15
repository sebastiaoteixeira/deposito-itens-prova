<template>
  <div>
    <school-blocks-buttons/>
    <content-menu/>
  </div>
</template>

<script>
import SchoolBlocksButtons from './components/SchoolBlocksButtons.vue';
import ContentMenu from './components/ContentMenu.vue';

export default {
  name: 'App',
  components: {
    "school-blocks-buttons": SchoolBlocksButtons,
    "content-menu": ContentMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 720px;
}
</style>
