<template>
  <div>
    <banner-container />
    <nav-container />
    <div class="articles">
      <div v-for="item in items"
           :key="item.id">
        <contribution :data="item"></contribution>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.articles {
  padding: 56px 0;
}
</style>

<script>
import contribution from '@/components/common/Contribution'
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
import * as contributionapi from '@/api/contribution'
export default {
    data () {
        return {
            items: [

            ]
        }
    },
    components: {
        contribution,
        bannerContainer,
        navContainer
    },
    methods: {
        init () {
            contributionapi.page().then(result => {
                this.items = result.data
            })
        }
    },
    created () {
        this.init()
    }
}
</script>
