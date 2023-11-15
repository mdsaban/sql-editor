<template>
  <EmptyPages page="Dashboard"/>
</template>

<script>
import EmptyPages from '~/components/Layout/EmptyPages.vue'
export default {
  components: { EmptyPages },
  created() {
    if(!this.$route.query.open) this.$router.push('/editor')
  }
}
</script>

<style>

</style>
