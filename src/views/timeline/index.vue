<template>
    <div>
        <banner-container />
        <nav-container />
        <div class="wp clearfixs">
            <div class="timeline-container">
                <div class="timeline-header">
                    <div class="arrow-left"></div>
                    <div class="tl-weeks">
                        <ul class="tl-head-list">
                            <div class="tl-head" v-for="item in items" :key="item.id">
                                <div class="tl-day">
                                    <span class="indicator"></span>
                                    <div class="day-of-week week-2"></div>
                                    <span class="t-date">{{item.date}}</span>
                                    <span class="t-week">{{item.work}}</span>
                                </div>
                            </div>
                            <!-- <div class="tl-head">
                                <div class="tl-day">
                                    <span class="indicator"></span>
                                    <div class="day-of-week week-2"></div>
                                    <span class="t-date">4-7</span>
                                    <span class="t-week">周二</span>
                                </div>
                            </div>
                            <div class="tl-head">
                                <div class="tl-day">
                                    <span class="indicator"></span>
                                    <div class="day-of-week week-2"></div>
                                    <span class="t-date">4-7</span>
                                    <span class="t-week">周二</span>
                                </div>
                            </div> -->
                        </ul>
                    </div>
                    <div class="arrow-right"></div>
                </div>
                <div class="timeline-wrapper clearfix">
                    <div class="tl-body-list clearfix">
                        <div class="season-timeline" v-for="item in items" :key="item.date">
                            <div class="season-group is-published" v-for="itemSon in item.data" :key="itemSon.time">
                                <div class="group-time">
                                    {{itemSon.time}}
                                </div>
                                <ul class="season-list">
                                    <li class="season-item" v-for="itemGrandSon in itemSon.data" :key="itemGrandSon.id">
                                        <a href="//www.bilibili.com/bangumi/play/ss32982" target="_blank" :title="itemGrandSon.title">
                                            <img :src="GLOBAL.oss + itemGrandSon.image">
                                        </a>
                                        <div class="season-body">
                                            <a href="//www.bilibili.com/bangumi/play/ss32982" target="_blank" :title="itemGrandSon.title">
                                                <div :title="itemGrandSon.title" class="season-title">
                                                    <span class="follow" v-if="itemGrandSon.isFollow"></span>{{itemGrandSon.title}}
                                                </div>
                                            </a>
                                            <a href="//www.bilibili.com/bangumi/play/ep317925" target="_blank"><div class="season-desc published">第{{itemGrandSon.series}}话</div></a>
                                        </div>
                                    </li>
                                </ul>
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
import * as series from '@/api/animeSeries'
export default {
    methods: {
        init () {
            series.timeLine().then(result => {
                this.items = result.data
            })
        }
    },
    created () {
        this.init()
    },
    components: {
        bannerContainer,
        navContainer
    },
    data () {
        return {
            items: [
                {
                    date: '4-7',
                    work: '周二',
                    data: [
                        {
                            time: '00:00',
                            data: [
                                {
                                    id: '1',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    isFollow: true
                                },
                                {
                                    id: '2',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    isFollow: true
                                }
                            ]
                        }
                    ]
                },
                {
                    date: '4-8',
                    work: '周三',
                    data: [
                        {
                            time: '00:00',
                            data: [
                                {
                                    id: '1',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    time: '00:00',
                                    isFollow: true
                                },
                                {
                                    id: '2',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    time: '00:00',
                                    isFollow: true
                                }
                            ]
                        }
                    ]
                },
                {
                    date: '4-9',
                    work: '周四',
                    data: [
                        {
                            time: '00:00',
                            data: [
                                {
                                    id: '1',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    time: '00:00',
                                    isFollow: true
                                },
                                {
                                    id: '2',
                                    title: '辉夜大小姐想让我告白？～天才们的恋爱头脑战～',
                                    series: '1',
                                    time: '00:00',
                                    isFollow: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.timeline-container {
    position: relative;
    padding-top: 66px;
    padding-bottom: 20px;
    width: 1163px;
    .timeline-wrapper {
        width: 1163px;
        .tl-body-list {
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
            .season-timeline {
                width: 378px;
                float: left;
                // -webkit-animation: appear-from-left 1s linear;
                // animation: appear-from-left 1s linear;
                // -webkit-animation-fill-mode: both;
                // animation-fill-mode: both;
                // width: 280px;
                .season-group {
                    position: relative;
                    left: 46px;
                    padding-right: 46px;
                    ul.season-list {
                        list-style: none;
                        padding-left: 48px;
                        padding-top: 20px;
                        li.season-item:after {
                            content: " ";
                            display: block;
                            clear: both;
                        }
                        li.season-item:first-child {
                            margin-top: 0;
                        }
                        li.season-item {
                            position: relative;
                            margin-top: 20px;
                            img {
                                width: 72px;
                                height: 72px;
                                border-radius: 4px;
                                float: left;
                                cursor: pointer;
                                background: hsla(0,0%,47.1%,.1);
                            }
                            .season-body {
                                padding-left: 80px;
                                .season-desc.published {
                                    color: #fb7299;
                                }
                                .season-desc {
                                    position: absolute;
                                    bottom: 0;
                                    width: 140px;
                                    font-size: 12px;
                                    color: #aaa;
                                    overflow: hidden;
                                    -o-text-overflow: ellipsis;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    cursor: pointer;
                                }
                                .season-title {
                                    font-size: 12px;
                                    color: #222;
                                    cursor: pointer;
                                    display: -webkit-box;
                                    line-height: 18px;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    overflow: hidden;
                                    vertical-align: middle;
                                    span.follow {
                                        width: 40px;
                                        height: 18px;
                                        display: inline-block;
                                        margin-right: 4px;
                                        margin-top: -2px;
                                        background: #fff url(//s1.hdslb.com/bfs/static/bangumi-timeline/asserts/icons.png) no-repeat -145px -606px;
                                        background-size: 247px 663px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                    .group-time:before {
                        border-color: #e7e7e7;
                        background: #e7e7e7;
                        position: absolute;
                        left: -11px;
                        top: 6px;
                        width: 3px;
                        height: 3px;
                        background: #fff;
                        border: 1px solid #e7e7e7;
                        content: " ";
                        display: block;
                        border-radius: 50%;
                        z-index: 1;
                    }
                    .group-time {
                        position: absolute;
                        left: 8px;
                        top: 20px;
                        font-size: 12px;
                        color: #aaa;
                    }
                }
                .season-group.is-published {
                    border-left: 1px solid #ccc;
                    .group-time {
                        color: #aaa;
                    }
                }
            }
        }
    }
    .timeline-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 1160px;
        height: 60px;
        margin: 0 auto;
        background: #fff;
        -webkit-box-shadow: 0 10px 10px #fff;
        box-shadow: 0 10px 10px #fff;
        z-index: 10;
        -webkit-transition: height .3s;
        -o-transition: height .3s;
        transition: height .3s;
        .tl-weeks:after {
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            border-bottom: 1px solid #e7e7e7;
            content: "";
            z-index: -1;
        }
        .tl-weeks {
            position: relative;
            height: 66px;
            overflow: hidden;
            -webkit-box-shadow: inset 0 -33px 22px 12px #fff;
            box-shadow: inset 0 -33px 22px 12px #fff;
            z-index: 1;
            .tl-head-list {
                -webkit-transition: all .75s ease;
                -o-transition: all .75s ease;
                transition: all .75s ease;
                .tl-head {
                    position: relative;
                    width: 386px;
                    height: 66px;
                    float: left;
                    -webkit-animation: appear-from-left 1s linear;
                    animation: appear-from-left 1s linear;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                    .tl-day {
                        position: absolute;
                        bottom: 0;
                        left: 33px;
                        float: left;
                        padding: 10px 10px 2px;
                        background: #fff;
                        span {
                            font-size: 14px;
                            color: #999;
                            display: inline-block;
                            text-align: center;
                        }
                        .indicator {
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            width: 80px;
                            height: 3px;
                            margin-left: -40px;
                            padding: 0;
                            background: #dedede;
                            border-radius: 8px;
                            display: inline-block;
                        }
                        .day-of-week {
                            width: 38px;
                            height: 36px;
                            display: inline-block;
                        }
                        .week-2 {
                            background: url(//s1.hdslb.com/bfs/static/bangumi-timeline/asserts/icons.png) -146px -108px;
                            background-size: 247px 663px;
                        }
                        span.t-date {
                            position: absolute;
                            left: 48px;
                            top: 12px;
                            width: 40px;
                            font-size: 12px;
                        }
                        span.t-week {
                            position: relative;
                            left: 0;
                            top: -2px;
                            width: 40px;
                        }
                    }
                }
            }
        }
        .arrow-right {
            position: absolute;
            top: 38px;
            right: 0;
            width: 14px;
            height: 26px;
            background: url(//s1.hdslb.com/bfs/static/bangumi-timeline/asserts/icons.png) no-repeat -158px -542px;
            background-size: 247px 663px;
            cursor: pointer;
            -webkit-animation: arrow-from-right 1s;
            animation: arrow-from-right 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            z-index: 100;
        }
        .arrow-left {
            position: absolute;
            top: 38px;
            left: 0;
            width: 14px;
            height: 26px;
            background: url(//s1.hdslb.com/bfs/static/bangumi-timeline/asserts/icons.png) no-repeat -77px -542px;
            background-size: 247px 663px;
            cursor: pointer;
            -webkit-animation: arrow-from-left 1s;
            animation: arrow-from-left 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            z-index: 100;
        }
    }
}
</style>
