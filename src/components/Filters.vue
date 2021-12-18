<template>
  <div class="w3-bar w3-light-grey w3-border-top">
    <div class="w3-bar-item">Filters:</div>
    <div v-for="year in SchoolYears[block]" :key="year" class="w3-bar-item">
			{{ year }}º Ano <input type="checkbox" v-model="YearSelection[year - 1]">
		</div>
			{{ YearSelectionFormatted }}
  </div>
</template>

<script>
export default {
	props: ["block"],
	data() {
		return {
			SchoolYears: [["1", "2", "3", "4"], ["5", "6"], ["7", "8", "9"], ["10", "11", "12"]],
			YearSelection: Array.apply(null, Array(12)).map(() => { return true })
		}
	}
}
</script>

<style scoped>

</style>