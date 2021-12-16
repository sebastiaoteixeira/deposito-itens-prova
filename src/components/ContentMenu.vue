<template>
  <div id="container">
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
  border: 1px solid;
  size: auto;
}
</style>