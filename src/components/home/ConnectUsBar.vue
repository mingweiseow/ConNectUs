<template>
  <div class="chart">
<!--     <h1>Posts by Day</h1>
 -->    <chart></chart>
  </div>
</template>

<script>
import Chart from "./ConnectUsBar.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
div {
	margin: 50px;
}
h1 {
	text-align: center;
}
</style>