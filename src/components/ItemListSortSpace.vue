<template>
  <div id="item-list-sort-space">
    <div></div>
    <div>
      <select v-model="selectSort">
        <option
          v-for="(sort, i) in sorts"
          :key="`key-${i}`"
          :value="sort.value"
        >
          {{sort.string}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemListSortSpace",
  data () {
    return {
      selectSort: this.$route.query.sort ? this.$route.query.sort : "standard",
      sorts: [
        {
          value: "standard",
          string: "楽天標準ソート順"
        },
        {
          value: "+reviewCount",
          string: "レビュー件数順（昇順）"
        },
        {
          value: "-reviewCount",
          string: "レビュー件数順（降順）"
        },
        {
          value: "+reviewAverage",
          string: "レビュー平均順（昇順）"
        },
        {
          value: "-reviewAverage",
          string: "レビュー平均順（降順）"
        },
        {
          value: "+itemPrice",
          string: "価格順（昇順）"
        },
        {
          value: "-itemPrice",
          string: "価格順（降順）"
        },
        {
          value: "+updateTimestamp",
          string: "商品更新日時順（昇順）"
        },
        {
          value: "-updateTimestamp",
          string: "商品更新日時順（降順）"
        },
        {
          value: "+affiliateRate",
          string: "アフィリエイト料率順（昇順）"
        },
        {
          value: "-affiliateRate",
          string: "アフィリエイト料率順（降順）"
        },
      ]
    }
  },
  watch: {
    selectSort: function () {
      this.$router.push(
        {
          name: "Home",
          query: {
            page: this.$route.query.page,
            genreId: this.$route.query.genreId,
            keyword: this.$route.query.keyword,
            pageN: 1,
            sort: this.selectSort,
            priceMin: this.$route.query.priceMin,
            priceMax: this.$route.query.priceMax,
          }
        }
      )
    }
  },
  async created () {
  }
}
</script>