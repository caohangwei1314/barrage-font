<template>
    <div class="wp clearfixs">
        <div class="video-left fl">
            <vue-dplayer :video="video" :isVip="currentSeries.isVip"></vue-dplayer>
            <div class="media-wrapper">
                <h1 :title="anime.name + '：第' + currentSeries.number + '节 ' + currentSeries.title">
                    {{anime.name}}：第{{currentSeries.title}}节 {{currentSeries.title}}
                </h1>
                <div class="tool-bar clearfix report-wrap-module report-scroll-module">
                    <div class="coin-info">
                        <i class="iconfont icon-coins"></i>
                        <span>{{currentSeries.totalCoin}}万</span>
                    </div>
                    <div class="share-info">
                        <i class="iconfont icon-share"></i>
                        <span>分享</span> <!---->
                    </div>
                    <div class="mobile-info">
                        <i class="iconfont icon-mobile-full"></i>
                        <span>用手机观看</span> <!---->
                    </div>
                </div>
                <div class="media-info clearfix report-wrap-module">
                    <a href="//www.bilibili.com/bangumi/media/md28222061/" target="_blank" class="media-cover">
                        <img :src="GLOBAL.oss + anime.image" alt="">
                    </a>
                    <div class="media-right">
                        <a href="//www.bilibili.com/bangumi/media/md28222061/" target="_blank" :title="anime.name" class="media-title">
                            {{anime.name}}
                        </a>
                        <div class="media-count">
                            {{anime.totalPlay}}播放&nbsp;&nbsp;·&nbsp;&nbsp;{{anime.totalDanmaku}}弹幕&nbsp;&nbsp;·&nbsp;&nbsp;{{anime.totalFollow}}系列追番
                        </div>
                        <div class="pub-wrapper clearfix">
                            <a href="//www.bilibili.com/anime/" target="_blank" class="home-link">番剧</a>
                            <span class="pub-info">已完结, 全{{anime.count}}话</span>
                            <a href="//www.bilibili.com/video/BV1fE411c7D8/" target="_blank" class="av-link">{{anime.id}}</a>
                        </div>
                        <a href="//www.bilibili.com/bangumi/media/md28222061/" target="_blank" class="media-desc webkit-ellipsis">
                            <span class="absolute">
                                {{anime.description}}
                            </span>
                            <span>
                                {{anime.description}}
                            </span>
                            <i style="">展开</i>
                        </a>
                        <div class="media-rating">
                            <h4 class="score">{{anime.score}}</h4>
                            <p>{{anime.totalEvaluate}}人评分</p>
                        </div>
                    </div>
                </div>
                <div class="review-module report-wrap-module report-scroll-module">
                    <div class="module-title clearfix">
                        <h4>点评</h4>
                        <a href="//www.bilibili.com/bangumi/media/md28222061/" target="_blank" class="more-link">查看全部</a>
                    </div>
                    <div class="review-list">
                        <div class="review-item" v-for="item in evaluate" :key="item.id">
                            <a :href="'/articles/detail?id=' + item.id" target="_blank">
                                <div class="review-body">
                                    <div class="review-header clearfix">
                                        <a href="//space.bilibili.com/2908810/" target="_blank" class="review-author is-vip">{{item.author}}</a>
                                        <ul class="review-star clearfix">
                                            <li v-for="itemChild in parseInt(item.evaluateScore / 2)" :key="itemChild"><!----> <i class="iconfont icon-star-full"></i></li>
                                            <li v-for="itemChild in parseInt((10-item.evaluateScore) / 2)" :key="itemChild"><i class="iconfont icon-star-empty"></i> <!----></li>
                                        </ul>
                                    </div>
                                    <div class="review-title">
                                        {{item.title}}
                                    </div>
                                    <p class="review-content webkit-ellipsis l3">
                                        {{item.content}}
                                    </p>
                                    <span class="pub-time">{{item.time}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-right fr">
            <div class="pay-bar report-wrap-module">
                <div class="vip">
                    <a href="javascript:;" class="btn-pay active">大会员专享观看特权哦~</a>
                    <div class="img-icon"></div>
                </div>
            </div>
            <div class="ep-list-wrapper report-wrap-module">
                <div class="list-title">
                    <h4 title="正片">正片</h4>
                    <span class="mode-change" style="position:relative">
                        <i report-id="click_ep_switch" class="iconfont icon-ep-list-detail"></i> <!---->
                    </span>
                    <span class="ep-list-progress">{{series.total}}/{{series.total}}</span>
                </div>
                <div class="list-wrapper longlist">
                    <ul>
                        <li v-for="(item,index) in series.records" :key="item.id" class="ep-item" style="left: 0px; right: 0px;" :style="{top:index*36 + 'px'}">
                            <i class="iconfont icon-play"></i>
                            <span v-if="item.id === currentSeries.id" :title="'第' + item.number + '节 ' + item.title" class="ep-title on">第{{item.number}}节 {{item.title}}</span>
                            <span v-if="item.id !== currentSeries.id" :title="'第' + item.number + '节 ' + item.title" class="ep-title on">第{{item.number}}节 {{item.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueDplayer from '@/components/common/VueDplayers'
import * as anime from '@/api/anime'
import * as animeSeries from '@/api/animeSeries'
import * as articles from '@/api/articles'
export default {
    data () {
        return {
            id: 0,
            animeId: 0,
            video: {
                url: ''
            },
            anime: {

            },
            currentSeries: {

            },
            series: {

            },
            evaluate: [
                {
                    id: 1,
                    time: '03-22',
                    title: '一部令人惋惜的作品，一部效果不太好的粉丝向作品，一块瑕疵巨大的玉（3.22已更新）',
                    content: '3月22日更新：最后一集21集也出来了，复杂的心情也花了一周时间平静下来了，观看了21集，说不感动是不可能的，毕竟也是开服老玩家了，不是黑粉更不是想让它死，但是综观整部作品，心里落差是确实难以平复。如果现在让我评价这部作品，我会认为这是一部差强人意的粉丝向作品。因此修改了评分，给到的三星，勉强及格，让人勉强满意吧。全部21集有闪光点吗？毫无疑问是有的。炎头和牛若丸对抗戈耳工的宝具，弓凛的全力输出，羽蛇神和安娜的宝具炸提妈，西杜丽的剧情和“乌鲁克仍存于此”，闪闪的王之号炮和金固的天之锁，都是给人震'
                },
                {
                    id: 2,
                    time: '03-22',
                    title: '一部令人惋惜的作品，一部效果不太好的粉丝向作品，一块瑕疵巨大的玉（3.22已更新）',
                    content: '3月22日更新：最后一集21集也出来了，复杂的心情也花了一周时间平静下来了，观看了21集，说不感动是不可能的，毕竟也是开服老玩家了，不是黑粉更不是想让它死，但是综观整部作品，心里落差是确实难以平复。如果现在让我评价这部作品，我会认为这是一部差强人意的粉丝向作品。因此修改了评分，给到的三星，勉强及格，让人勉强满意吧。全部21集有闪光点吗？毫无疑问是有的。炎头和牛若丸对抗戈耳工的宝具，弓凛的全力输出，羽蛇神和安娜的宝具炸提妈，西杜丽的剧情和“乌鲁克仍存于此”，闪闪的王之号炮和金固的天之锁，都是给人震'
                },
                {
                    id: 3,
                    time: '03-22',
                    title: '一部令人惋惜的作品，一部效果不太好的粉丝向作品，一块瑕疵巨大的玉（3.22已更新）',
                    content: '3月22日更新：最后一集21集也出来了，复杂的心情也花了一周时间平静下来了，观看了21集，说不感动是不可能的，毕竟也是开服老玩家了，不是黑粉更不是想让它死，但是综观整部作品，心里落差是确实难以平复。如果现在让我评价这部作品，我会认为这是一部差强人意的粉丝向作品。因此修改了评分，给到的三星，勉强及格，让人勉强满意吧。全部21集有闪光点吗？毫无疑问是有的。炎头和牛若丸对抗戈耳工的宝具，弓凛的全力输出，羽蛇神和安娜的宝具炸提妈，西杜丽的剧情和“乌鲁克仍存于此”，闪闪的王之号炮和金固的天之锁，都是给人震'
                }
            ]
        }
    },
    components: {
        VueDplayer
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            this.id = this.$router.currentRoute.query.id
            this.animeId = this.$router.currentRoute.query.animeId
            this.video.url = this.GLOBAL.oss + this.$router.currentRoute.query.video
            anime.detail(this.animeId).then(result => {
                this.anime = result.data
            })
            animeSeries.detail(this.id).then(result => {
                this.currentSeries = result.data
            })
            animeSeries.page(this.animeId, 1, 500).then(result => {
                this.series = result.data
            })
            articles.listThree(this.animeId).then(result => {
                this.evaluate = result.data
            })
        }
    }
}
</script>

<style lang="scss">
.video-right .ep-list-wrapper .list-wrapper ul .ep-item .ep-title.on {
    color:#00a1d6
}
.video-left{
    width: 70%;
    padding-top: 10px;
    .media-wrapper {
        padding-top: 16px;
        .review-module {
            padding: 16px 0;
            border-top: 1px solid #e5e9ef;
            .review-list {
                height: 152px;
                white-space: nowrap;
                overflow: hidden;
                .review-item {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    width: 33.333%;
                    height: 152px;
                    padding-right: 10px;
                    overflow: hidden;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    .pub-time {
                        position: absolute;
                        left: 16px;
                        bottom: 12px;
                        height: 18px;
                        line-height: 18px;
                        color: #999;
                        font-size: 12px;
                    }
                    .review-content {
                        height: 54px;
                        font-size: 12px;
                        color: #212121;
                        line-height: 18px;
                    }
                    .webkit-ellipsis.l3 {
                        -webkit-line-clamp: 3;
                    }
                    .webkit-ellipsis {
                        display: -webkit-box!important;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        word-wrap: break-word!important;
                        word-break: break-word!important;
                        white-space: normal!important;
                        overflow: hidden!important;
                        -o-text-overflow: ellipsis!important;
                        text-overflow: ellipsis!important;
                    }
                    .review-title {
                        height: 18px;
                        line-height: 18px;
                        font-size: 14px;
                        color: #212121;
                        font-weight: 500;
                        white-space: nowrap;
                        margin-bottom: 4px;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                    }
                    .review-body {
                        padding: 12px 16px;
                        border-radius: 2px;
                        height: 100%;
                        background-color: #f4f4f4;
                        .review-header {
                            position: relative;
                            height: 18px;
                            margin-bottom: 8px;
                            .review-star {
                                display: block;
                                float: left;
                                height: 18px;
                                width: 72px;
                                li{
                                    position: relative;
                                    display: inline-block;
                                    vertical-align: top;
                                    width: 16px;
                                    height: 16px;
                                    background-size: cover;
                                    background-position: 50%;
                                    background-repeat: no-repeat;
                                    i {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        display: block;
                                        width: 100%;
                                        height: 100%;
                                        line-height: 16px;
                                        font-size: 16px;
                                        text-align: center;
                                        color: #999;
                                    }
                                    .icon-star-full {
                                        color: #ffa726;
                                    }
                                    .icon-star-full:before {
                                        content: "\E709";
                                    }
                                    .icon-star-empty:before {
                                        content: "\E70A";
                                    }
                                }
                            }
                            .review-author {
                                display: block;
                                float: left;
                                height: 18px;
                                line-height: 18px;
                                font-size: 12px;
                                color: #505050;
                                max-width: 90px;
                                overflow: hidden;
                                -o-text-overflow: ellipsis;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                margin-right: 8px;
                            }
                            .review-author.is-vip {
                                color: #fb7299!important;
                            }
                        }
                    }
                }
            }
            .module-title {
                height: 24px;
                color: #212121;
                margin-bottom: 16px;
                h4 {
                    float: left;
                    height: 24px;
                    line-height: 24px;
                    font-size: 16px;
                    font-weight: 400;
                }
                .more-link {
                    display: block;
                    float: right;
                    height: 24px;
                    line-height: 24px;
                    font-size: 12px;
                    color: #212121;
                    -webkit-transition: color .3s ease;
                    -o-transition: color .3s ease;
                    transition: color .3s ease;
                }
            }
        }
        .media-info {
            border-top: 1px solid #e7e7e7;
            padding: 16px 0;
            .media-right {
                position: relative;
                padding-left: 150px;
                height: 100%;
                z-index: 1;
                .media-rating {
                    margin-top: 11px;
                    p {
                        height: 16px;
                        line-height: 16px;
                        font-size: 12px;
                        color: #999;
                    }
                    .score {
                        position: relative;
                        height: 24px;
                        line-height: 24px;
                        font-weight: 700;
                        font-size: 24px;
                        color: #ffa726;
                        margin-bottom: 4px;
                        font-family: HelveticaNeue-Bold;
                        padding-right: 14px;
                        display: inline-block;
                    }
                    .score:after {
                        content: "\5206";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 14px;
                        height: 16px;
                        line-height: 16px;
                        font-size: 12px;
                        text-align: right;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                    }
                }
                .webkit-ellipsis {
                    display: -webkit-box!important;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    word-wrap: break-word!important;
                    word-break: break-word!important;
                    white-space: normal!important;
                    overflow: hidden!important;
                    -o-text-overflow: ellipsis!important;
                    text-overflow: ellipsis!important;
                }
                .media-desc.webkit-ellipsis i {
                    position: absolute;
                    padding-left: 12px;
                    right: 0;
                    bottom: -2px;
                }
                .media-desc {
                    position: relative;
                    display: block;
                    font-size: 12px;
                    color: #212121;
                    min-height: 18px;
                    line-height: 18px;
                    word-wrap: break-word;
                    word-break: break-all;
                    white-space: normal;
                    i {
                        position: relative;
                        display: inline-block;
                        vertical-align: top;
                        padding-left: 4px;
                        height: 18px;
                        line-height: 18px;
                        text-align: right;
                        color: #00a1d6;
                        background-color: #fff;
                        font-style: normal;
                        cursor: pointer;
                        z-index: 3;
                    }
                    span {
                        position: relative;
                        z-index: 1;
                    }
                    span.absolute {
                        position: absolute;
                        display: inline-block;
                        vertical-align: top;
                        top: 0;
                        left: 0;
                        right: 0;
                        line-height: 18px;
                        opacity: 0;
                        z-index: 2;
                    }
                }
                .pub-wrapper {
                    height: 16px;
                    margin-bottom: 8px;
                    font-size: 12px;
                    color: #212121;
                    .home-link {
                        display: block;
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin-right: 10px;
                        color: #212121;
                        cursor: pointer;
                    }
                    .pub-info {
                        display: block;
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin-right: 10px;
                    }
                    .av-link {
                        display: block;
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        color: #212121;
                        margin-right: 16px;
                    }
                }
                .media-count {
                    height: 16px;
                    line-height: 16px;
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 8px;
                }
                .media-title {
                    display: block;
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    color: #212121;
                    font-weight: 500;
                    margin-top: 4px;
                    margin-bottom: 16px;
                    padding-right: 240px;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .media-cover {
                position: relative;
                display: block;
                float: left;
                width: 134px;
                height: 179px;
                z-index: 2;
                border-radius: 2px;
                overflow: hidden;
                background-color: #f4f5f7;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        h1 {
            display: none;
            color: #222;
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-bottom: 16px;
        }
        .mobile-info {
            position: relative;
            display: block;
            float: left;
            height: 36px;
            cursor: pointer;
            i {
                display: inline-block;
                vertical-align: top;
                height: 28px;
                line-height: 28px;
                font-size: 28px;
                color: #757575;
                margin-right: 6px;
                text-align: center;
            }
            .iconfont {
                font-family: iconfont!important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            .iconfont.icon-mobile-full:before {
                content: "\E6E2";
            }
        }
        .clearfix:after {
            content: "";
            display: block;
            visibility: hidden;
            height: 0;
            clear: both;
            font-size: 0;
        }
        .tool-bar {
            height: 40px;
            .share-info {
                position: relative;
                display: block;
                float: left;
                height: 36px;
                margin-right: 8px;
                cursor: pointer;
                i {
                    display: inline-block;
                    vertical-align: top;
                    width: 28px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 28px;
                    color: #757575;
                    margin-right: 6px;
                    text-align: center;
                }
                .iconfont {
                    font-family: iconfont!important;
                    font-size: 16px;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .iconfont.icon-share:before {
                    content: "\E70F";
                }
            }
            .coin-info {
                display: block;
                float: left;
                height: 28px;
                margin-right: 8px;
                cursor: pointer;
                .iconfont {
                    font-family: iconfont!important;
                    font-size: 16px;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .iconfont.icon-coins:before {
                    content: "\E6E4";
                }
                i {
                    display: inline-block;
                    vertical-align: top;
                    width: 28px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 28px;
                    color: #757575;
                    margin-right: 6px;
                    text-align: center;
                }
            }
        }
    }
}
.video-right{
     width: 27%;
     padding-top: 10px;
    .ep-list-wrapper {
        position: relative;
        background-color: #f4f4f4;
        border-radius: 2px;
        margin-bottom: 20px;
        .list-wrapper {
            position: relative;
            padding: 0 0 6px 6px;
            display: block;
            overflow: auto;
            max-height: 175px;
            ul {
                position: relative;
                height: 894px;
                .ep-item {
                    position: absolute;
                    display: block;
                    height: 30px;
                    border-radius: 2px;
                    padding: 0 0 0 10px;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    -webkit-transition: background-color .3s ease;
                    -o-transition: background-color .3s ease;
                    transition: background-color .3s ease;
                    color: #222;
                    cursor: pointer;
                    i {
                        display: none;
                        height: 100%;
                        line-height: 30px;
                        width: 22px;
                        vertical-align: top;
                        color: #00a1d6;
                        font-size: 13px;
                    }
                    .ep-title {
                        line-height: 30px;
                        font-size: 12px;
                    }
                }
            }
        }
        .longlist {
            max-height: 350px;
        }
        .list-title {
            height: 42px;
            padding: 0 16px;
            h4 {
                float: left;
                height: 42px;
                line-height: 42px;
                font-size: 16px;
                color: #212121;
                font-weight: 400;
                max-width: 220px;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .mode-change {
                display: block;
                float: left;
                width: 30px;
                height: 42px;
                line-height: 42px;
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                color: #757575;
                position: relative;
                .iconfont {
                    font-family: iconfont!important;
                    font-size: 16px;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .icon-ep-list-detail:before {
                    content: "\E706";
                }
            }
            .ep-list-progress {
                display: block;
                float: right;
                height: 42px;
                line-height: 42px;
                font-size: 12px;
                color: #999;
            }
        }
    }
    .pay-bar {
        position: relative;
        height: 44px;
        margin-bottom: 20px;
        .vip {
            position: relative;
            height: 44px;
            .btn-pay {
                background-color: #00a1d6;
                display: block;
                height: 100%;
                line-height: 44px;
                text-align: center;
                color: #fff;
                border-radius: 2px;
                font-size: 16px;
                -webkit-transition: all .3s ease;
                -o-transition: all .3s ease;
                transition: all .3s ease;
            }
            .active {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #e7e7e7;
                line-height: 42px;
                color: #999;
                background-color: #fff!important;
                cursor: default;
            }
            .img-icon {
                position: absolute;
                background-image: url(../../assets/comic/suoluetu/func-icon-vip.png);
                width: 60px;
                height: 60px;
                left: 0;
                bottom: 0;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100%;
            }
        }
    }
}
</style>
