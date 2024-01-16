<template>
  <div id="app">
    <AppHeader />
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "App",
  components: {AppHeader},
  async created () {
    console.log(await this.getRakutenItem("タオル"))
  }
}
</script>