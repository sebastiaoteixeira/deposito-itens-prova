<template>
  <div class="w3-animate-opacity">
    <school-blocks-buttons @block-changed="update"/>
    <content-menu :block="this.current_block"/>
  </div>
</template>

<script>
import SchoolBlocksButtons from './components/SchoolBlocksButtons.vue';
import ContentContainer from './components/ContentContainer.vue';

export default {
  name: 'App',
  data() {
    return { current_block: null }
  },
  components: {
    "school-blocks-buttons": SchoolBlocksButtons,
    "content-menu": ContentContainer
  },
  methods: {
    update(block_id) {
      this.current_block = block_id;
      console.log(block_id)
    }
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
  width: 95%;
  max-width: 960px;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>
