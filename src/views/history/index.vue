<template>
    <div>
        <banner-container />
        <div class="wp history-wrap">
            <div class="newlist_info"> <div class="b-head clearfix"> <div class="b-head-c"> <i class="b-icon b-icon-history"></i> <span class="b-head-t">播放历史</span> </div> <div class="history-btn"> <a href="#" class="btn">暂停记录历史</a>  <a href="#" class="btn cleanhsbtn">清空历史</a> </div> </div> </div>
            <div style="display: none;"> <div class="warn"> <p class="txt">历史功能暂停中，就算看不可描述的视频也不会被记录下来了</p> <a href="#" class="btn">继续记录历史</a> </div> </div>
            <div class="list-contain" style="position:relative">
                <div class="label-contain"> <div class="time-label todaylabel active" style="position: absolute; top: 18px;"> 今天 </div> <div class="time-label lastdaylabel active" style="position: absolute; top: 141px;"> 昨天 </div> <div class="time-label lastweeklabel" style="position: fixed; top: inherit; bottom: 70px;"> 近1周 </div> <div class="time-label lastmonthlabel" style="position: fixed; top: inherit; bottom: 20px;"> 1周前 </div> <div class="time-label lastthreemonthlabel" style="display: none;"> 1个月前 </div> </div>
                <ul class="history-list" id="history_list">
                    <li v-for="item in 20" :key="item" class="history-record"> <div class="l-info"> <div class="lastplay-time"> <i class="history-red-round"></i> <span class="lastplay-t">00:00</span> </div> </div> <div class="r-info clearfix"> <div class="cover-contain">  <p class="label" style="display: none;"></p> <a class="preview"> <div class="lazy-img"> <img alt="" src="//i2.hdslb.com/bfs/archive/ac0ae7a110022e66f4687533d47c3c9af3705e03.jpg@160w_100h.webp"> </div> </a> <div class="info"></div> <div class="progress-c"> <div class="progress" style="width: 151.193px;"></div> </div> </div>  <div class="r-txt"> <a class="title">全国首通！！！堡垒之夜宝库密码！！！尝试了1000次密码！</a>  <p class="subtitle">   <span></span>  </p> <div class="w-info"> <div class="time-wrap"> <i class="device-i pc"></i> <span class="pro-txt">看到&nbsp;&nbsp;01:43</span>      </div>  <span> <a> <div class="lazy-img userpic"> <img alt="" src="//i2.hdslb.com/bfs/face/f068b2356e52097b55fb080547692ac9ffba4a9a.jpg@20w_20h.webp"> </div> <span class="username">浩然皮的很</span> </a> <span class="name">网络游戏</span> </span> </div>   <i class="history-delete"></i> </div> </div> </li>
                </ul>
                <div class="nodata-contain" style="display: none;"> <img src="//s1.hdslb.com/bfs/static/history-record/./img/nodata.png" alt="" class="nodata"> <div class="txt"><p>好像最近没有看过视频呢</p></div> </div>
            </div>
            <div class="dlg-contain" style="display: none;"> <div class="hsmask"> </div> <div class="history-dlg"> <p class="dlg-txt">清空之后就什么都没有了哦~</p>  <div class="hsbtn clearfix"> <a href="#" class="sure">确定清空</a>  <a href="#" class="cancel">取消</a> </div> </div> </div>
            <div class="go-top-m" _v-06db338e="" style="display: none;"> <div class="go-top icon" title="返回顶部" _v-06db338e=""></div> </div>
        </div>
    </div>
</template>

<style lang="scss">
.history-list .r-info .device-i.pc {
    background-position: -1367px -406px !important;
}
.history-list .r-info .w-info .device-i {
    width: 20px;
    height: 20px;
    float: left;
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) no-repeat;
}
.history-wrap .history-btn .btn {
    border: 1px solid;
    display: inline-block;
    text-align: center;
    padding: 5px 8px;
    border-radius: 5px;
    margin-right: 20px;
}
.history-wrap .history-btn .cleanhsbtn {
    margin-right: 0;
}
.history-wrap {
    min-height: 460px;
    padding: 30px 0 0;
    margin: 0 auto;
    font-size: 12px;
}
.history-wrap, .history-wrap .b-head {
    position: relative;
}
.history-wrap a.btn {
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.history-wrap .history-btn .cleanhsbtn {
    margin-right: 0;
}
.history-wrap a.btn {
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.history-wrap .history-btn {
    float: right;
    width: 188px;
}
.history-wrap .b-head .b-head-t {
    vertical-align: middle;
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    color: #222;
}
.history-wrap .b-icon-history {
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -83px -850px no-repeat;
    width: 28px;
    height: 28px;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
}
.history-wrap .b-head-c {
    float: left;
}
.icon {
    display: inline-block;
    background-image: url(//static.hdslb.com/images/base/icons.png);
}
.go-top-m .go-top {
    cursor: pointer;
    width: 46px;
    height: 48px;
    background-color: #f6f9fa;
    background-position: -648px -72px;
    background-repeat: no-repeat;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
}
.go-top-m {
    bottom: 50px;
    width: 48px;
    position: fixed;
    left: 50%;
    margin-left: 590px;
    transition: top .3s;
}
.go-top-m {
    margin-left: 500px;
}
.history-dlg a {
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.history-dlg .hsbtn .cancel {
    border: 1px solid #ccd0d7;
    color: #6d757a;
    width: 98px;
    height: 30px;
}
.history-dlg .hsbtn a {
    width: 100px;
    height: 32px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    float: left;
}
.history-dlg .hsbtn .sure {
    background-color: #00a1d6;
    color: #fff;
    margin-right: 20px;
}
.history-wrap .clearfix {
    overflow: hidden;
}
.history-dlg .hsbtn {
    width: 220px;
    margin: 0 auto;
}
.history-wrap p {
    margin: 0;
    padding: 0;
}
.history-dlg .dlg-txt {
    font-size: 14px;
    color: #222;
    text-align: center;
    margin: 60px auto 52px;
}
.history-dlg {
    width: 310px;
    height: 190px;
    border-radius: 4px;
    border: 1px solid #e5e9ef;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -95px;
    margin-left: -155px;
    z-index: 10001;
    background-color: #fff;
}
.hsmask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: .5;
    z-index: 10000;
}
.history-wrap p {
    margin: 0;
    padding: 0;
}
.history-wrap .nodata-contain .txt {
    line-height: 30px;
    font-size: 16px;
    color: #99a2aa;
    margin-top: -20px;
    margin-bottom: 40px;
    text-align: center;
}
.history-wrap .nodata-contain .nodata {
    width: 256px;
    height: 256px;
}
.history-wrap .nodata-contain {
    width: 256px;
    margin: 0 auto;
    min-height: 300px;
}
.history-list .r-info .history-delete {
    width: 12px;
    height: 16px;
    vertical-align: top;
    margin-top: 7px;
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -342px -1047px no-repeat;
    color: #99a2aa;
    position: absolute;
    padding-left: 16px;
    right: -9px;
    top: 44px;
    cursor: pointer;
}
.history-list .r-info .w-info .name {
    color: #99a2aa;
    font-size: 12px;
    float: left;
    margin-left: 10px;
}
.history-list .r-info .w-info .username {
    float: left;
    color: #6d757a;
    padding-right: 10px;
    border-right: 1px solid #e5e9ef;
    height: 12px;
    margin-top: 5px;
    line-height: 11px;
    font-size: 12px;
    cursor: pointer;
}
.lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.history-list .r-info .w-info .userpic.lazy-img img {
    border-radius: 100%;
}
.history-list .r-info .w-info .userpic {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    float: left;
    margin-right: 10px;
    background-size: 100% 100%;
    cursor: pointer;
}
.history-list .r-info .w-info {
    font-family: microsoft yahei,simhei;
    float: left;
    line-height: 20px;
}
.history-list .r-info .w-info .pro-txt {
    color: #99a2aa;
    font-size: 12px;
    float: left;
    margin-left: 10px;
}
.history-list .r-info .w-info .time-wrap {
    float: left;
    width: 300px;
}
.history-list .r-info .w-info {
    font-family: microsoft yahei,simhei;
    float: left;
    line-height: 20px;
}
.history-list .r-info .subtitle {
    font-size: 12px;
    color: #6d757a;
    margin-bottom: 18px;
    height: 16px;
    padding-left: 3px;
}
.history-wrap p {
    margin: 0;
    padding: 0;
}
.history-list .r-info .subtitle {
    font-size: 12px;
    color: #6d757a;
    margin-bottom: 18px;
    height: 16px;
    padding-left: 3px;
}
.history-list .r-info .title {
    cursor: pointer;
    padding-top: 5.5px;
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    color: #222;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.history-wrap .history-list .r-info .title {
    width: 400px;
}
.history-list .r-info .r-txt {
    height: 100px;
    border-bottom: 1px solid #e5e9ef;
    float: left;
}
.history-wrap .history-list .r-info .r-txt {
    width: 585px;
}
// .history-list .cover-contain .progress {
//     width: 80px;
//     height: 6px;
//     background-color: #ff74a5;
//     border-bottom-right-radius: 3px;
//     border-top-right-radius: 3px;
//     border-bottom-left-radius: 4px;
// }
// .history-list .cover-contain .progress-c {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 160px;
//     height: 6px;
//     border-bottom-right-radius: 5px;
//     border-bottom-left-radius: 5px;
//     background-color: #000;
// }
.history-list .cover-contain .info {
    position: absolute;
    left: 0;
    bottom: 0;
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/video-mask.png);
    width: 160px;
    height: 39px;
    cursor: pointer;
}
.lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.history-list .r-info .preview img {
    margin: 0 auto;
    display: block;
    height: 100px;
    max-width: 160px;
}
.lazy-img {
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/img_loading.png) 50% no-repeat;
    width: 100%;
    height: 100%;
    display: inline-block;
}
.history-list .r-info .preview {
    cursor: pointer;
    overflow: hidden;
    display: block;
    text-align: center;
    float: left;
    width: 160px;
    height: 100px;
    position: relative;
    border-radius: 5px;
}
.history-wrap p {
    margin: 0;
    padding: 0;
}
.history-list .cover-contain .label {
    position: absolute;
    right: 8px;
    top: 5.5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    border-radius: 4px;
    background-color: #ff74a5;
    width: 38px;
    height: 20px;
    line-height: 19.5px;
    z-index: 4;
    cursor: pointer;
}
.history-list .cover-contain {
    float: left;
    position: relative;
    margin: 0 30px 0 0;
}
.history-wrap .clearfix {
    overflow: hidden;
}
.history-list .r-info {
    border: 1px solid transparent;
    margin-left: 197px;
    background: #fff;
    padding: 10px 0;
    margin-right: 5px;
    position: relative;
}
.history-list .l-info .lastplay-time .lastplay-t {
    color: #99a2aa;
    position: absolute;
    top: 43px;
    left: 87px;
    width: 80px;
    font-size: 14px;
}
.history-list .l-info .lastplay-time .history-red-round {
    position: absolute;
    right: -5px;
    top: 48px;
    border: 5px dashed #e5e9ef;
    border-right-width: 0;
    border-left-style: solid;
    border-top-color: transparent;
    border-bottom-color: transparent;
}
.history-list .l-info .lastplay-time {
    overflow: visible;
    height: 120px;
    font-size: 14px;
}
.history-list .l-info {
    width: 66px;
    position: absolute;
    top: 10px;
    left: 0;
    border-right: 1px solid #e5e9ef;
    overflow: visible;
    height: 143px;
}
.history-list, .history-list .history-record {
    display: block;
    position: relative;
}
.history-list {
    padding: 8px 0 10px;
    margin-top: 17px;
}
.history-list, .history-list .history-record {
    display: block;
    position: relative;
}
.history-wrap a.btn {
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.history-wrap .warn .btn {
    font-size: 14px;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    background-color: #00a1d6;
    text-align: center;
    padding: 6.5px 11px;
}
.history-wrap p {
    margin: 0;
    padding: 0;
}
.history-wrap .warn .txt {
    color: #222;
    font-size: 16px;
    margin-bottom: 20px;
}
.history-wrap .warn {
    width: 600px;
    margin: 70px auto 54px;
    text-align: center;
}
.history-wrap .history-btn .cleanhsbtn {
    margin-right: 0;
}
.history-wrap a.btn {
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.history-wrap .history-btn {
    float: right;
    width: 188px;
}
.history-wrap .b-head .b-head-t {
    vertical-align: middle;
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    color: #222;
}
.history-wrap .b-icon-history {
    background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -83px -850px no-repeat;
    width: 28px;
    height: 28px;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
}
.history-wrap .b-head-c {
    float: left;
}
.history-wrap, .history-wrap .b-head {
    position: relative;
}
.history-wrap .clearfix {
    overflow: hidden;
}
</style>

<script>
import bannerContainer from '@/components/common/BannerContainer'
export default {
    components: {
        bannerContainer
    }
}
</script>
