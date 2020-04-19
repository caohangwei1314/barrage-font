<template>
    <div class="clearfixs">
        <banner-container />
        <nav-container />
        <div class="wp">
            <div class="filter-body">
                <ul class="sort-banner clearfix">
                    <li class="sort-item on"><i class="up"></i><span>追番人数</span><i class="down active"></i></li>
                    <li class="sort-item"><i class="up"></i><span>更新时间</span><i class="down active"></i></li>
                    <li class="sort-item lock-desc"><i class="up"></i><span>最高评分</span><i class="down active"></i></li>
                    <li class="sort-item"><i class="up"></i><span>播放数量</span><i class="down active"></i></li><li class="sort-item"><i class="up"></i><span>开播时间</span><i class="down active"></i></li>
                </ul>
                <ul class="bangumi-list clearfix">
                    <li v-for="item in 20" :key="item" class="bangumi-item" style=""><a href="/anime" target="_blank" class="cover-wrapper"><div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/9d9cd5a6a48428fe2e4b6ed17025707696eab47b.png@320w_428h.webp" lazy="loaded"></div> <div class="shadow">786.9万追番</div> <span class="corner-tag badge_0">会员专享</span></a> <a href="//www.bilibili.com/bangumi/play/ss26801/" target="_blank" class="bangumi-title">鬼灭之刃</a> <p class="pub-info">全26话</p></li>
                </ul>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
export default {
    components: {
        bannerContainer,
        navContainer
    }
}
</script>

<style lang="scss">
.bangumi-item .cover-wrapper .corner-tag.badge_0 {
    background-color: #f25d8e;
}
.bangumi-item .cover-wrapper .corner-tag {
    position: absolute;
    width: 60px;
    height: 24px;
    line-height: 24px;
    border-radius: 0 0 0 4px;
    top: 0;
    right: 0;
    font-size: 12px;
    text-align: center;
    background-color: #ffa726;
    color: #fff;
}
.bangumi-item .cover-wrapper .shadow {
    position: absolute;
    padding: 28px 10px 0;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 50px;
    line-height: 1;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    background: -o-linear-gradient(bottom,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 100%);
    background: -webkit-gradient(linear,left bottom,left top,color-stop(0,rgba(0,0,0,.6)),to(rgba(0,0,0,0)));
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
    background: linear-gradient(0deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgb(0,255,255),ff,endColorstr=rgba(153,0,0,0),0,GradientType=0);
}
.common-lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.common-lazy-img {
    background: url(//s1.hdslb.com/bfs/static/bangumi-index/asserts/img_loading.png) 50% no-repeat;
    background-size: 50px;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.bangumi-item .pub-info {
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    color: #99a2aa;
    font-size: 12px;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.bangumi-item .bangumi-title {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    word-wrap: break-word;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #222;
    max-height: 44px;
    font-size: 14px;
    margin-top: 10px;
    line-height: 22px;
}
.bangumi-item .cover-wrapper {
    position: relative;
    display: block;
    width: 100%;
    height: 214px;
    border-radius: 4px;
    overflow: hidden;
}
.bangumi-item {
    width: 160px;
    height: 304px;
    margin-right: 20px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
}
.filter-body .bangumi-list {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.filter-body {
    width: 720px;
    position: relative;
    padding-top: 20px;
    width: 900px;
    float: left;
    .sort-banner {
        height: 44px;
        font-size: 14px;
        line-height: 1;
        position: relative;
        .sort-item {
            position: relative;
            width: 80px;
            margin-right: 20px;
            float: left;
            color: #222;
            cursor: pointer;
            i.active {
                border-color: #00a1d6 rgba(0,0,0,0);
            }
            i.active.down {
                border-bottom: none;
            }
            i.up {
                display: block;
                position: absolute;
                left: 60px;
                margin: 0 2px;
                width: 0;
                height: 0;
            }
        }
        .sort-item i.down, .sort-item i.up {
            display: block;
            position: absolute;
            left: 60px;
            margin: 0 2px;
            width: 0;
            height: 0;
        }
        .sort-item i.down {
            bottom: 0;
            border: 5px dashed rgba(0,0,0,0);
            border-top: 5px solid #ddd;
            border-bottom: none;
        }
        .sort-item.on {
            color: #00a1d6;
        }
        .sort-item.lock-desc i.up {
            display: none;
        }
        .sort-item i.up {
            display: block;
            position: absolute;
            left: 60px;
            margin: 0 2px;
            width: 0;
            height: 0;
        }
        .sort-item i.up {
            top: 0;
            border: 5px dashed rgba(0,0,0,0);
            border-top: none;
            border-bottom: 5px solid #ddd;
        }
    }
}
</style>
