<template>
    <div>
        <subthread-header
        v-bind:mod_name=mod_name></subthread-header>
        <subthread
        v-bind:data=data
        v-bind:mod_id=mod_id></subthread>
    </div>
</template>

<script>
import database from '../../firebase.js'
import SubthreadHeader from './SubthreadHeader.vue'
import Subthread from './Subthread.vue'
export default {
    data() {
        return {
            mod_name: "",
            mod_id: this.$route.params.module_id,
            data: null, 
        }
    },
    components: {
        'subthread-header': SubthreadHeader,
        'subthread': Subthread,
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