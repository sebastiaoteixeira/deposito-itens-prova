<template>
  <div class="w3-bar w3-block">
    <button v-for="(tab, index) in SchoolBlocks" :key="tab" class="w3-btn w3-topbar w3-border-blue w3-bar-item" :class="ButtonStyles(index)" @click="SetBlock(index)">
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
    SetBlock(BlockId) {
      this.block = BlockId;
      this.$router.push({ name: 'Subjects Menu', params: {BlockId} })
      this.$emit('block-changed', BlockId);
    },

    ButtonStyles(btn) {
      let classes = ""
      classes += btn == this.block ? "w3-blue  w3-animate-bottom " : "w3-light-grey w3-hover-light-blue ";
      classes += (btn == 3 ? "long-button" : "short-button")
      return classes
    }
  }
};
</script>

<style scoped>
  .long-button {
    width: 28% !important;
  }
  
  .short-button {
    width: 24% !important;
  }
  
  @media only screen and (max-width: 768px) {
    button {  
      padding-inline: 10px !important;
    }
  }

</style>