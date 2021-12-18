<template>
  <div id="container" class="w3-container w3-border">
    <transition name="slide-fade" mode="out-in">
      <component :is="page" :[ComponentProps]="ComponentData"
      @next-page="GoToItemsMenu" id="page"></component>
    </transition>
  </div>
</template>

<script>
import SubjectsMenu from "../components/SubjectsMenu.vue";
import ItemsMenu from "../components/ItemsMenu.vue";
import InitialPage from "../components/InitialPage.vue";

export default {
  data() {
    return {
      page: "initial-page",
      subject: null,
      ComponentProps: "block"
    }
  },
  props: ['block'],
  watch: {
    block() {
      this.GoTo('subject-menu')
      this.subject = null
      this.ComponentProps = "block"
    }
  },
  computed: {
    ComponentData (){
      if (this.page === 'subject-menu') {
        return this.block
      } else if (this.page === "items-menu") {
        return this.subject
      } else {
        return null
      }
    }
  },
  methods: {
    GoTo(NewPage){
      console.log(NewPage)
      this.page = NewPage
    },
    GoToItemsMenu(subject) {
      this.GoTo('items-menu')
      this.subject = subject
      this.ComponentProps = "subject"
    }
  },
  components: {
    "initial-page": InitialPage,
    "subject-menu": SubjectsMenu,
    "items-menu": ItemsMenu
  }
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

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
	.slide-fade-enter-from {
    right: -960px !important;
		opacity: 0 !important;
	}

  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-to {
		right:960px !important;
    opacity:0 !important;
	}
</style>