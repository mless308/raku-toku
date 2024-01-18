<template>
  <div id="item-list-page-number-selector">
    <div class="chevron-space">
      <mdicon
        v-if="pageNumber>1"
        name="chevron-left"
        :width="20"
        :height="20"
        class="icon click"
        @click="changePageNumber(Number(pageNumber)-1)"
      />
    </div>
    <div class="number-space">{{pageNumber}}</div>
    <div>/</div>
    <div class="number-max-space">{{pageNumberMax}}</div>
    <div class="chevron-space">
      <mdicon
        v-if="pageNumber!==pageNumberMax"
        name="chevron-right"
        :width="20"
        :height="20"
        class="icon click"
        @click="changePageNumber(Number(pageNumber)+1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemListPageNumberSelector",
  props: {
    pageNumber: {
      type: Number,
      default: 1
    },
    pageNumberMax: {
      type: Number,
      default: 1
    }
  },
  async created () {
  },
  methods: {
    changePageNumber: function (pageNuber) {
      this.$router.push(
        {
          name: "Home",
          query: {
            page: this.$route.query.page,
            genreId: this.$route.query.genreId,
            keyword: this.$route.query.keyword,
            pageN: pageNuber,
            sort: this.$route.query.sort,
            priceMin: this.$route.query.priceMin,
            priceMax: this.$route.query.priceMax,
          }
        }
      )
    }
  }
}
</script>