<template>
  <div>
    <SearchSpace />
    <div id="item-list-result-space">
      <ItemListCard
        v-for="(item, i) in items"
        :key="`item-${i}`"
        :item="item.Item"
      />
    </div>
    <ItemListPageNumberSelector
      :pageNumber="$route.query.pageN"
      :pageNumberMax="pageNumberMax"
    />
  </div>
</template>

<script>
import SearchSpace from '@/components/SearchSpace.vue'
import ItemListCard from '@/components/ItemListCard.vue'
import ItemListPageNumberSelector from '@/components/ItemListPageNumberSelector.vue'

export default {
  name: "ItemList",
  components: {
    SearchSpace,
    ItemListCard,
    ItemListPageNumberSelector
  },
  data () {
    return {
      items: undefined,
      pageNumberMax: undefined
    }
  },
  watch: {
    $route: function () {
      this.getItems()
    }
  },
  async created () {
    this.getItems()
  },
  methods: {
    getItems: async function () {
      const keyword = this.$route.query.keyword
      const genreId = this.$route.query.genreId
      const pageNumber = this.$route.query.pageN
      this.items = []
      if (keyword || genreId) {
        const responseData = await this.getRakutenItem({keyword: keyword, genreId: genreId, page: pageNumber})
        this.pageNumberMax = Math.ceil(responseData.count / responseData.Items.length)
        this.items = responseData.Items
      }
    }
  }
}
</script>