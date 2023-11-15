<template>
  <div class="pa-4">
    <div class="text--20 font-weight--500">{{page}} Page</div>
    <div class="grey--text">This is empty {{page}} page for this project, go to <nuxt-link to="/editor">SQL Editor</nuxt-link></div>
    <div class="mt-4">Github repo link - <a href="https://github.com/mdsaban/sql-editor" target="_blank">https://github.com/mdsaban/sql-editor</a></div>
    <div class="mt-4">Created by - Md Saban</div>
    <ul>
      <li><a href="https://mdsaban.com" target="_blank">Website</a></li>
      <li><a href="https://www.linkedin.com/in/iamsaban/" target="_blank">LinkedIn</a></li>
      <li><a href="https://twitter.com/iAmSaban" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page']
}
</script>

<style>

</style>
