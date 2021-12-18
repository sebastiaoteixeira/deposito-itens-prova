<template>
  <div>
		<filters :block="block"/>
  </div>
</template>

<script>
import Filters from '../components/Filters.vue'

export default {
	props: ["block", "subject"],
	components: {
		"filters": Filters
	}
}
</script>

<style scoped>

</style>