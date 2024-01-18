<template>
  <div>
    <SearchSpace />
    <ItemListSortSpace v-if="items.length" />
    <div id="item-list-result-space">
      <ItemListCard
        v-for="(item, i) in items"
        :key="`item-${i}`"
        :item="item.Item"
      />
    </div>
    <ItemListPageNumberSelector
      v-if="$route.query.pageN"
      :pageNumber="Number($route.query.pageN)"
      :pageNumberMax="pageNumberMax"
    />
  </div>
</template>

<script>
import SearchSpace from '@/components/SearchSpace.vue'
import ItemListCard from '@/components/ItemListCard.vue'
import ItemListPageNumberSelector from '@/components/ItemListPageNumberSelector.vue'
import ItemListSortSpace from '@/components/ItemListSortSpace.vue'

export default {
  name: "ItemList",
  components: {
    SearchSpace,
    ItemListCard,
    ItemListPageNumberSelector,
    ItemListSortSpace
  },
  data () {
    return {
      items: [],
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
      const sort = this.$route.query.sort
      const priceMin = this.$route.query.priceMin
      const priceMax = this.$route.query.priceMax
      console.log(sort)
      this.items = []
      if (keyword || genreId) {
        const responseData = await this.getRakutenItem(
          {
            keyword: keyword,
            genreId: genreId,
            page: pageNumber,
            sort: sort,
            priceMin: priceMin,
            priceMax: priceMax
          }
        )
        this.pageNumberMax = Math.ceil(responseData.count / responseData.Items.length)
        this.items = responseData.Items
      }
    }
  }
}
</script>