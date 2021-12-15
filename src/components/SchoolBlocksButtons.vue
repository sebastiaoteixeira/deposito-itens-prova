<template>
  <div>
    <button v-for="tab in SchoolBlocks" :key="tab">
      {{ tab }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SchoolBlocksButtons",
  data() {
    return {
      SchoolBlocks: ["1º Ciclo", "2º Ciclo", "3º Ciclo", "Secundário"],
    };
  },
};
</script>

<style scoped>
button {
  color: black;
  margin-right: 2px;
  margin-left: 2px;
  width: 22%;
  padding: 1px;
}
</style>