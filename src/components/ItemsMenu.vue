<template>
  <div>
		<filters :block="block"/>
  </div>
</template>

<script>
import Filters from '../components/Filters.vue'

export default {
	data() {
		return {
			block: this.$route.params.BlockId
		}
	},
	components: {
		"filters": Filters
	}
}
</script>

<style scoped>

</style>