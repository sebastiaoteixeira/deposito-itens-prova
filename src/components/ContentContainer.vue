<template>
  <div id="container" class="w3-container w3-border">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" id="page" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "initial-page",
      transitionName: 'slide-right-fade',
      subject: null
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (to.path.split('/')[1] == from.path.split('/')[1]) {
        this.transitionName = toDepth > fromDepth ? 'slide-right-fade' : 'slide-left-fade'
      } else {
        this.transitionName = to.path.split('/')[1] > from.path.split('/')[1] ? 'slide-right-fade' : 'slide-left-fade'
      }
    }
  },
  props: ['block']
};
</script>

<style scoped>
  #container {
    min-height: 360px;
    border-top: none !important;
    border-radius: 0 0 10px 10px;
    padding: 0;
    overflow: hidden;
  }

  #page {
    position: relative;
    opacity: 1;
    right: 0px;
  }

  .slide-right-fade-enter-active, .slide-right-fade-leave-active, .slide-left-fade-enter-active, .slide-left-fade-leave-active {
    transition: all 0.4s ease;
  }
	.slide-right-fade-enter-from {
    right: -960px !important;
		opacity: 0 !important;
	}
  .slide-right-fade-leave-to {
		right: 960px !important;
    opacity: 0 !important;
	}
  .slide-left-fade-enter-from {
    right: 960px !important;
		opacity: 0 !important;
	}
  .slide-left-fade-leave-to {
		right: -960px !important;
    opacity: 0 !important;
	}
</style>