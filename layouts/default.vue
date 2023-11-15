<template>
  <v-app>
    <NavDrawer />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/Layout/NavDrawer.vue'

export default {
  name: 'DefaultLayout',
  components: { NavDrawer },
}
</script>
