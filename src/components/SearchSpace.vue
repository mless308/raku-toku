<template>
  <div id="search-space">
    <div class="search-space-one">
      <div class="word-space">
        <div class="word-input-index">検索ワード：</div>
        <input
          v-model="inputWord"
          type="text"
          class="word-input"
        >
      </div>
    </div>
    <div class="search-space-one">
      <div class="search-space-one">
        <div>検索対象：</div>
        <div class="genre-space">
          <div class="genre-index">大区分：</div>
          <select
            id="parent-genre-select"
            v-model="selectParentGenreId"
            class="genre-select"
          >
            <option :value="0">すべてのジャンル</option>
            <option
              v-for="(data, i) in parentGenreIds"
              :key="`parent-genre-${i}`"
              :value="data.child.genreId"
            >
              {{data.child.genreName}}
            </option>
          </select>
        </div>
        <div class="genre-space">
          <div class="genre-index">中区分：</div>
          <select
            id="child-genre-select"
            v-model="selectChildGenreId"
            :disabled="!(selectParentGenreId && childGenreIds.length)"
            class="genre-select"
          >
            <option :value="0">すべてのジャンル</option>
            <option
              v-for="(data, i) in childGenreIds"
              :key="`child-genre-${i}`"
              :value="data.child.genreId"
            >
              {{data.child.genreName}}
            </option>
          </select>
        </div>
        <div class="genre-space">
          <div class="genre-index">小区分：</div>
          <select
            id="child-genre-select"
            v-model="selectGrandchildGenreId"
            :disabled="!(selectChildGenreId && grandchildGenreIds.length)"
            class="genre-select"
          >
            <option :value="0">すべてのジャンル</option>
            <option
              v-for="(data, i) in grandchildGenreIds"
              :key="`child-genre-${i}`"
              :value="data.child.genreId"
            >
              {{data.child.genreName}}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="search-btn-space-one">
      <div
        class="btn click"
        @click="search()"
      >
        検索
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchSpace",
  data () {
    return {
      selectGenreId: 0,
      parentGenreIds: [],
      selectParentGenreId: 0,
      childGenreIds: [],
      selectChildGenreId: 0,
      grandchildGenreIds: [],
      selectGrandchildGenreId: 0,
      inputWord: ""
    }
  },
  async created () {
    this.setParentGenreIds()
    console.log(await this.setChildGenreIds(568650))
  },
  watch: {
    selectParentGenreId: function () {
      this.selectGenreId = this.selectParentGenreId
      this.childGenreIds = []
      this.grandchildGenreIds = []
      this.selectChildGenreId = 0
      this.selectGrandchildGenreId = 0
      if (this.selectParentGenreId) {
        this.setChildGenreIds()
      }
    },
    selectChildGenreId: async function () {
      this.selectGenreId = this.selectChildGenreId ? this.selectChildGenreId : this.selectParentGenreId
      this.grandchildGenreIds = []
      this.selectGrandchildGenreId = 0
      if (this.selectChildGenreId) {
        this.setGrandchildGenreIds()
      }
    },
    selectGrandchildGenreId: async function () {
      this.selectGenreId = this.selectGrandchildGenreId ? this.selectGrandchildGenreId : this.selectChildGenreId
    },
  },
  methods: {
    setParentGenreIds: async function () {
      const responseData = await this.getRakutenGenreId()
      this.parentGenreIds = responseData.children
    },
    setChildGenreIds: async function () {
      const responseData = await this.getRakutenGenreId(this.selectParentGenreId)
      this.childGenreIds = responseData.children
    },
    setGrandchildGenreIds: async function () {
      const responseData = await this.getRakutenGenreId(this.selectChildGenreId)
      this.grandchildGenreIds = responseData.children
    },
    search: function () {
      if (!this.inputWord.trim() && !this.selectGenreId) {
        alert("検索ワードか検索区分を選択してください。")
        return
      }
      this.$router.push(
        {
          name: "Home",
          query: {
            page: this.$route.query.page,
            genreId: this.selectGenreId,
            keyword: this.inputWord,
            pageN: 1
          }
        }
      )
    }
  }
}
</script>