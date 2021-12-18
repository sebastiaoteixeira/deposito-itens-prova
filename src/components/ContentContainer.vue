<template>
  <div id="container" class="w3-container w3-border w3-soft-grey">
    <transition name="slide-fade">
      <component :is="page" :[ComponentProps]="ComponentData"
      @next-page="GoToItemsMenu"></component>
    </transition>
  </div>
</template>

<script>
import SubjectsMenu from "./SubjectsMenu.vue";
import ItemsMenu from "./ItemsMenu.vue";

export default {
  data() {
    return {
      page: "subject-menu",
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
    overflow: hidden;
  }

	.slide-fade-leave-to {
		position:relative;
		animation:right-slide-fade 0.6s;
		animation-fill-mode: forwards;
	}
	@keyframes right-slide-fade{
		from{right:0px;opacity:1}
		to{right:960px;opacity:0}
	}
</style>