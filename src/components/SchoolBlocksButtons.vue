<template>
  <div>
    <button v-for="(tab, index) in SchoolBlocks" :key="tab" @click="set_block(index)">
      {{ tab }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SchoolBlocksButtons",
  emits: ['block-changed'],
  data() {
    return {
      SchoolBlocks: ["1º Ciclo", "2º Ciclo", "3º Ciclo", "Secundário"],
    };
  },
  methods: {
    set_block(id) {
      this.$emit('block-changed', id)
    }
  }
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