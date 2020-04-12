<template>
  <div>
    <banner-container />
    <nav-container />
  <div class="wp index">
    <carousel-container :data="carouselData"></carousel-container>
    <div class="comic">
      <div class="left">
        <div class="headline clearfix">
          <h3>最近更新</h3>
          <a href="//www.bilibili.com/anime/timeline" target="_blank" class="timeline-more">
            新番时间表
            <i class="b-icon b-icon-arrow-red-r" /></a>
        </div>
        <ul style="height:315px;">
          <li v-for="item in items" :key="item.id" class="timeline-item">
            <a class="preview">
              <div class="common-lazy-img">
                <img :src="item.url">
              </div>
            </a>
            <div class="item-right">
              <p class="t">
                <a>{{ item.title }}</a>
              </p>
              <p class="num">
                更新至<a>{{ item.update }}</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div>
          <h3>我的追番</h3>
          <a href="//space.bilibili.com/13124563/bangumi" target="_blank" class="follow-more">更多<i class="icon" /></a>
        </div>
        <div class="follow-list reduce">
          <div v-for="item in datas" :key="item.id" class="follow-item clearfix">
            <a href="//localhost:8080/play" target="_blank" :title="item.title" class="follow-cover">
              <div class="bangumi-home-lazy-img">
                <img :alt="item.title" :src="item.url" height="60" style="margin-top: -30px;" lazy="loaded">
              </div>
            </a>
            <div class="details">
              <a href="//localhost:8080/play" target="_blank" :title="item.title" class="season-title">
                <span>{{item.title}}</span>
              </a>
              <div class="ep-intro">全25话</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
import CarouselContainer from '@/components/common/CarouselContainer'

export default {
    components: {
        bannerContainer,
        navContainer,
        CarouselContainer
    },
    data () {
        return {
            carouselData: [
                require('@/assets/carousel/1.jpg'),
                require('@/assets/carousel/2.png'),
                require('@/assets/carousel/3.jpg'),
                require('@/assets/carousel/4.jpg'),
                require('@/assets/carousel/5.jpg')
            ],
            datas: [
                {
                    id: '1',
                    title: '命运-冠位指定 绝对魔兽战线 巴比伦尼亚',
                    url: require('@/assets/comic/suoluetu/2.jpg')
                },
                {
                    id: '2',
                    title: '命运-冠位指定 绝对魔兽战线 巴比伦尼亚',
                    url: require('@/assets/comic/suoluetu/2.jpg')
                },
                {
                    id: '3',
                    title: '命运-冠位指定 绝对魔兽战线 巴比伦尼亚',
                    url: require('@/assets/comic/suoluetu/2.jpg')
                },
                {
                    id: '4',
                    title: '命运-冠位指定 绝对魔兽战线 巴比伦尼亚',
                    url: require('@/assets/comic/suoluetu/2.jpg')
                }
            ],
            items: [
                {
                    id: '1',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '2',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '3',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '4',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '5',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '6',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '7',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '8',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '9',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '10',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '11',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                },
                {
                    id: '12',
                    title: '智龙迷城',
                    update: '104话',
                    url: require('@/assets/comic/suoluetu/lc.jpg')
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.index{
  height: 708px;
  position: relative;
}
.comic{
  margin-top:40px;
  height: 335px;
  h3{
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    float: left;
    color: #222;
  }
  .left{
    width: 78%;
    float: left;
    .headline {
        height: 24px;
        padding: 0 0 20px;
        .timeline-more {
            float: right;
            border: 1px solid #f25d8e;
            width: 104px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
            border-radius: 4px;
            -webkit-transition: all .2s;
            -o-transition: all .2s;
            transition: all .2s;
            color: #f25d8e;
            margin-right: 20px;
            i {
                display: inline-block;
                vertical-align: middle;
                width: 6px;
                height: 12px;
                margin: -2px 0 0 5px;
                background: url(//s1.hdslb.com/bfs/static/bangumi-home/asserts/icons.png) no-repeat;
                background-position: -478px -281px;
            }
        }
    }
    .timeline-item {
      float: left;
      width: auto;
      padding-bottom: 35px;
      padding-right: 45px;
      zoom: 1;
      font-size: 12px;
      .preview{
        margin-right: 12px;
        display: block;
        float: left;
        position: relative;
        overflow: hidden;
        -webkit-mask-image: -webkit-radial-gradient(circle,#fff,#000);
        // .common-lazy-img {
        //     background: url(//s1.hdslb.com/bfs/static/bangumi-home/asserts/img_loading.png) 50% no-repeat;
        //     background-size: 50px;
        //     width: 100%;
        //     height: 100%;
        //     display: inline-block;
        //     vertical-align: top;
        // }
        img {
          width: 72px;
          height: 72px;
          border-radius: 4px;
        }
      }
      .item-right{
        float: left;
        width: 96px;
        height: 72px;
        position: relative;
        .t {
            height: 57px;
            line-height: 18px;
            overflow: hidden;
            text-align: left;
            width: 100%;
            margin-top: -3px;
            word-break: break-all;
            word-wrap: break-word;
        }
        .num {
            position: absolute;
            bottom: 0;
            text-align: left;
            margin-top: 2px;
            color: #aaa;
            left: 0;
            white-space: nowrap;
            line-height: 18px;
            a{
              background: #ff8eb3;
              max-width: 50px;
              display: inline-block;
              border-radius: 9px;
              vertical-align: top;
              text-align: center;
              padding: 0 4px;
              height: 18px;
              line-height: 18px;
              min-width: 28px;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #fff;
              margin-left: 5px;
            }
        }
        a {
            color: inherit;
            text-align: left;
            display: block;
            height: 100%;
        }
      }
  }

  }
  .right{
    width: 22%;
    float: right;
    .follow-more {
        float: right;
        width: 52px;
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        background-color: #fff;
        border: 1px solid #ccd0d7;
        color: #555;
        border-radius: 4px;
        text-align: center;
        margin: 0 0 0 10px;
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;
        .icon {
            display: inline-block;
            width: 6px;
            height: 12px;
            margin-top: -2px;
            margin-left: 2px;
            vertical-align: middle;
            -webkit-transition: all .2s;
            -o-transition: all .2s;
            transition: all .2s;
            background: url(//static.hdslb.com/images/base/icons.png) no-repeat -478px -218px;
        }
    }
    .follow-list {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 15px;
        overflow: hidden;
        .follow-item {
            margin-top: 15px;
            height: 60px;
            .details {
                float: left;
                padding-left: 8px;
                max-width: 155px;
                .ep-intro {
                    display: block;
                    height: 16px;
                    line-height: 16px;
                    font-size: 12px;
                    color: #999;
                    margin-top: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                }
                .season-title {
                  display: block;
                  height: 20px;
                  line-height: 20px;
                  margin-top: -3px;
                  width: 150px;
                  padding: 0;
                  font-size: 12px;
                  color: #222;
                  overflow: hidden;
                  white-space: nowrap;
                  -o-text-overflow: ellipsis;
                  text-overflow: ellipsis;
              }
            }
            .follow-cover {
                float: left;
                width: 96px;
                height: 60px;
                .bangumi-home-lazy-img {
                    position: relative;
                    background: url(//s1.hdslb.com/bfs/static/bangumi-home/asserts/img_loading.png) 50% no-repeat;
                    background-size: 50px;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    vertical-align: top;
                    border-radius: 4px;
                    overflow: hidden;
                    img {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        display: block;
                        width: 100%;
                    }
                }
            }
        }
    }
    .reduce {
        height: 285px;
    }
  }
}
</style>
