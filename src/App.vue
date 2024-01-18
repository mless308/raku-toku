<template>
  <div id="app-in">
    <AppHeader />
    <PageSelector />
    <div id="main">
      <Home v-if="page=='home'" />
      <ItemList v-else-if="page=='itemlist'" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import PageSelector from '@/components/PageSelector.vue'

// page
import Home from '@/views/Home.vue'
import ItemList from '@/views/ItemList.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    PageSelector,
    Home,
    ItemList
  },
  data () {
    return {
    }
  },
  watch: {
  },
  async created () {
  },
  computed: {
    page: function () {
      return this.$route.query.page ? this.$route.query.page.toLowerCase() : "home"
    }
  }
}
</script>