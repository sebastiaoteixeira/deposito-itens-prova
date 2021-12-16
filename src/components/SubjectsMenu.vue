<template>
  <div id="subjects-container">
    <div v-for="subject in subjects" :key="subject" class="subject">
        <button>{{ subject }}</button>
    </div>
		<p>{{ current_block_str }}</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			subjects: 
				[]
		}
	},
	props: ['block'],
	computed: {}
}
</script>

<style scoped>
	#subjects-container {
		display: flex;
	}

	button {
		margin : 10px;
		padding: 12px;
	}
</style>