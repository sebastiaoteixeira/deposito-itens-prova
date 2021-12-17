<template>
  <div class="w3-bar w3-block">
    <button v-for="(tab, index) in SchoolBlocks" :key="tab" class="w3-btn w3-topbar w3-border-blue w3-bar-item" :class="IsSelected(index)" @click="set_block(index)">
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
      block: null
    };
  },
  methods: {
    set_block(id) {
      this.block = id;
      this.$emit('block-changed', id);
    },

    IsSelected(btn) {
      if (btn == this.block) {
        return "w3-blue  w3-animate-bottom";
      } else {
       return "w3-light-grey w3-hover-light-blue";
      }
    }
  }
};
</script>

<style scoped>
  button {
    width: 25% !important;
  }
</style>