<template>
  <div id="page-selector">
    <router-link :to="{name: 'Home', query: {page: 'home'}}" class="page-btn">
      ホーム
    </router-link>
    <router-link :to="{name: 'Home', query: {page: 'itemlist'}}" class="page-btn">
      商品検索
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageSelector",
  async created () {
  }
}
</script>