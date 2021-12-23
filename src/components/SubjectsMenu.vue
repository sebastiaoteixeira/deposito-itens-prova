<template>
	<div id="subjects-container">
		<div>
			<button
				v-for="subject in subjects[this.$route.params.BlockId]"
				:key="subject"
				class="w3-btn w3-white w3-hover-light-grey w3-round-xlarge"
				@click="GoToContentPage(subject)">
					<h2><b>{{ subject }}</b></h2>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			subjects: [["Matemática"], ["esate"]],
		}
	},
	emits: ["next-page"],
	methods: {
		GoToContentPage(subject) {
			let self = this
			this.$router.push({ name: 'Items Menu', params: {
				BlockId: self.$route.params.BlockId,
				Subject: subject}
			})
		}
	}
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
</style>