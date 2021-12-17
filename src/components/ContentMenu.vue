<template>
  <div id="container" class="w3-container w3-border w3-round">
    <component :is="page" :block="block"></component>
  </div>
</template>

<script>
import SubjectsMenu from "../components/SubjectsMenu.vue"

export default {
  data() {
    return {
      page: "subject-menu"
    }
  },
  props: ['block'],
  methods: {
    go_to(new_page){
      this.page = new_page
    }
  },
  components: {
    "subject-menu": SubjectsMenu
  }
};
</script>

<style scoped>
  #container {
    min-height: 240px;
  }
</style>