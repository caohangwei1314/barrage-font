<template>
  <div class="nav">
    <div class="top-nav">
      <ul class="first-container wp">
        <li
          v-for="(item,index) in items"
          :key="item.name"
        >
          <a
            href="#"
            :class="{on:item.checked}"
            class="first-link"
            @click="changeOn(index)"
          >{{ item.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    name: '全部',
                    checked: false
                },
                {
                    name: '新番时间表',
                    checked: false
                },
                {
                    name: '番剧索引',
                    checked: false
                },
                {
                    name: '视频资讯',
                    checked: false
                },
                {
                    name: '投稿视频',
                    checked: false
                }
            ]
        }
    },
    methods: {
        changeOn (index) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].checked = false
            }
            this.items[index].checked = true
            switch (index) {
            case 0:
                this.$router.push({ name: 'home' })
                break
            case 1:
                this.$router.push({ name: 'timeline' })
                break
            case 2:
                this.$router.push({ name: 'index' })
                break
            case 3:
                this.$router.push({ name: 'articles' })
                break
            default:
                break
            }
        }
    }
}
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 46px;
  margin: 0;
  .top-nav {
    border-bottom: 1px solid #e5e5e5;
    .first-container {
      li {
        display: inline-block;
        font-size: 14px;
        padding-right: 28px;
        color: #6d757a;
        .first-link {
          box-sizing: border-box;
          line-height: 46px;
          padding: 0 6px;
          height: 46px;
          display: block;
        }
      }
    }
  }
}
.on {
  color: #00a1d6;
}
</style>
