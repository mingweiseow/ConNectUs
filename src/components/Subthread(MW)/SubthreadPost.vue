<template>
    <div>
        <subthread-header></subthread-header>
        <subthread></subthread>
    </div>
</template>

<script>
import SubthreadHeader from './SubthreadHeader.vue'
import Subthread from './Subthread.vue'
export default {
    data() {},
    components: {
        'subthread-header': SubthreadHeader,
        'subthread': Subthread,
    }
}
</script>

<style scoped>

</style>