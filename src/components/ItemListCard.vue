<template>
  <div class="item-list-card">
    <a
      :href="item.affiliateUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="item-list-card-img-space">
        <!-- <img
          v-if="item.imageFlag && this.item.mediumImageUrls.length"
          :src="this.item.mediumImageUrls[0].imageUrl"
          :alt="this.item.mediumImageUrls[0].imageUrl"
        >
        <mdicon
          v-else
          name="image"
          :width="30"
          :height="30"
          class="nothing-image"
        /> -->
      </div>
    </a>
    <div class="item-list-card-info-space">
      <div class="item-list-card-item-name">
        <a
          :href="item.affiliateUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{item.itemName}}
        </a>
      </div>
      <div class="item-list-card-info-space-in">
        <div class="item-list-card-price">
          <span>{{item.itemPrice}}円</span>
        </div>
        <div class="item-list-card-point">
          <span>ポイント還元：</span>
          <span>{{item.pointRate}}倍</span>
          <span>（{{Math.floor(item.itemPrice * item.pointRate / 100)}}ポイント）</span>
        </div>
        <div class="item-list-card-shop">
          <span>ショップ：</span>
          <a
            :href="item.shopAffiliateUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{item.shopName}}
          </a>
        </div>
        <div class="item-list-card-review">
          <span>レビュー：</span>
          <span>{{item.reviewAverage}}</span>
          <a
            v-if="item.reviewCount"
            :href="item.affiliateUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            （{{item.reviewCount}}件）
          </a>
        </div>
        <div class="item-list-card-affiliate">
          <span>アフィリエイト還元率：</span>
          <span>{{item.affiliateRate}}%</span>
        </div>
        <div class="item-list-card-option-space">
          <div
            v-if="item.asurakuFlag"
            class="item-list-card-option-asuraku item-list-card-option-icon"
          >
            あす楽
          </div>
        </div>
      </div>
    <!-- {{item}} -->
    <!-- {{Object.keys(item)}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSelector",
  props: {
    item: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
    }
  },
  async created () {
  },
  methods: {
  }
}
</script>