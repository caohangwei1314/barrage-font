<template>
  <div>
    <banner-container />
    <nav-container />
    <div class="articles">
      <div v-for="item in items"
           :key="item.id">
        <articles-line :data="item"></articles-line>
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
import articlesLine from '@/components/common/ArticlesLine'
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
import * as articles from '@/api/articles'
export default {
    data () {
        return {
            items: [

            ]
        }
    },
    components: {
        articlesLine,
        bannerContainer,
        navContainer
    },
    methods: {
        init () {
            articles.page().then(result => {
                this.items = result.data
            })
        }
    },
    created () {
        this.init()
    }
}
</script>
