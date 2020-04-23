<template>
  <div id = "ModuleDesc">
    <modreviewheader></modreviewheader>
    <modsummary></modsummary>
    <modoverview></modoverview>
    <modreview></modreview>
    <samples></samples>

  </div>
</template>

<script>
import ModReviewHeader from './ModReviewHeader.vue'
import ModSummary from './ModSummary.vue'
import ModOverview from './ModOverview.vue'
import ModReview from './ModReview.vue'
import Samples from './Samples.vue'
export default {
  data(){  },
    components: {
      'modreviewheader': ModReviewHeader,
      'modsummary': ModSummary,
      'modoverview': ModOverview,
      'modreview': ModReview,
      'samples': Samples,
     }
}
</script>

<style scoped>
.router-link-active{
    background: ivory;
    color: #444;
}
</style>