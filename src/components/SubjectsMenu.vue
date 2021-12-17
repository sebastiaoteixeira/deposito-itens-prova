<template>
  <div id="subjects-container" :class="{ 'right-slide' : IsRightSlide}">
    <button v-for="subject in subjects[block]" 
			:key="subject"
			class="w3-btn w3-white w3-hover-light-grey w3-round-xlarge"
			@click="GoToContentPage(subject)">
        <h2><b>{{ subject }}</b></h2>
    </button>
		<p>{{ current_block_str }}</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			subjects: [["Matemática"], ["esate"]],
			IsRightSlide: false
		}
	},
	emits: ["next-page"],
	methods: {
		GoToContentPage(subject) {
			this.IsRightSlide = true
			this.$emit('next-page', subject);
		}
	},
	props: ['block']
}
</script>

<style scoped>
	#subjects-container {
		display: flex;
		justify-content: center;
	}

	button {
		margin : 10px;
		padding: 12px;
	}

	.right-slide {
		position:relative;
		animation:right-slide 0.4s;
		animation-fill-mode: forwards;
	}
	@keyframes right-slide{
		from{right:0px;opacity:1}
		to{right:960px;opacity:0}
	}
</style>