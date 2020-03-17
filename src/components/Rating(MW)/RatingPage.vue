<template>
    <div>
        <review-header></review-header>
        <rating></rating>
    </div>
</template>

<script>
import ReviewHeader from './ReviewHeader.vue'
import Rating from './Rating.vue'
export default {
    data() {},
    components: {
        'review-header': ReviewHeader,
        'rating': Rating,
    }
}
</script>

<style scoped>
</style>
 