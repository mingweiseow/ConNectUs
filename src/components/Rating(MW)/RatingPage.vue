<template>
    <div>
        <rating-header
        v-bind:mod_name=mod_name>
        </rating-header>
        <rating
        v-bind:data=data
        v-bind:mod_id=mod_id></rating>
    </div>
</template>

<script>
import database from '../../firebase.js'
import RatingHeader from './RatingHeader.vue'
import Rating from './Rating.vue'
export default {
    data() {
        return {
            mod_name: "",
            mod_id: this.$route.params.module_id,
            data: null, 
        }
    },
    components: {
        'rating-header': RatingHeader,
        'rating': Rating,
    },
    methods: {
        fetchModuleInfo: async function() {
            return database.collection("Modules").
            doc(this.$route.params.module_id).
            get().
            then(doc => {
                this.mod_name = doc.data().mod_name
                this.data = doc.data()
            })
        },
    },
    async created() {
        await this.fetchModuleInfo()
    }
}
</script>

<style scoped>
</style>
 