<template>
    <div>
        <div class="clearfix">
            <div id="app" class="media-detail-wrp">
                <div class="media-info-wrp">
                    <div class="bangumi-info-bg-wrp">
                        <div class="bangumi-info-blurbg-wrapper"></div> <!---->
                    </div>
                    <div class="media-info-content">
                        <div class="media-info-inner clearfix">
                            <div class="media-preview">
                                <div class="common-lazy-img">
                                    <img :alt="data.name" :src="'https://barrage-web.oss-cn-hangzhou.aliyuncs.com/' + data.image" lazy="loaded">
                                </div>
                             </div>
                             <div class="media-info-r">
                                 <div class="media-info-title">
                                     <span class="media-info-title-t">{{data.name}}</span>
                                     <span class="media-tags" style="opacity: 1;">
                                         <span class="media-tag">小说改</span>
                                         <span class="media-tag">校园</span>
                                    </span>
                                </div>
                                <div class="media-info-datas">
                                    <div class="media-info-count">
                                        <span class="media-info-count-item media-info-count-item-play">
                                            <span class="media-info-label">总播放</span>
                                            <em>{{data.totalPlay}}</em>
                                        </span>
                                        <span class="media-info-count-item media-info-count-item-fans">
                                            <span class="media-info-label">追番人数</span>
                                            <em>{{data.totalFollow}}</em>
                                        </span>
                                        <span class="media-info-count-item media-info-count-item-review">
                                            <span class="media-info-label">弹幕总数</span>
                                            <em>{{data.totalDanmaku}}</em>
                                        </span>
                                    </div>
                                    <div class="media-info-score-wrp">
                                        <div class="media-info-score">
                                            <div class="media-info-score-content">{{data.score}}</div>
                                            <div class="media-info-star-wrapper">
                                                <span class="review-stars">
                                                    <i class="icon-star icon-star-light">
                                                        <i></i>
                                                    </i>
                                                    <i class="icon-star icon-star-light">
                                                        <i></i>
                                                    </i>
                                                    <i class="icon-star icon-star-light">
                                                        <i></i>
                                                    </i>
                                                    <i class="icon-star icon-star-light">
                                                        <i></i>
                                                    </i>
                                                    <i class="icon-star icon-star-half">
                                                        <i></i>
                                                    </i>
                                                </span>
                                                <div class="media-info-review-times">{{data.totalEvaluate}}人评</div>
                                                <div class="to-review-btn">
                                                    <i class="icon-edit"></i>
                                                        我要点评
                                                </div>
                                            </div>
                                        </div> <!---->
                                    </div>
                                </div>
                                <div class="media-info-time">
                                    <span>{{data.upperSelfTime}}开播</span>
                                    <span v-if="data.isOver">已完结, 全{{data.count}}话</span>
                                    <span v-if="!data.isOver">连载中, 每周{{data.videoUpdateTime}}更新</span>
                                </div>
                                <div class="media-info-intro">
                                    <span class="media-info-intro-text">
                                        {{data.description}}
                                    </span> <!----> <!---->
                                </div>
                                <div class="media-info-btns">
                                    <div class="btn-pay-wrapper is-vip"><!---->
                                        <a href="javascript:;" class="pay-btn ">大会员专享观看特权哦~</a>
                                        <div class="pic-wrapper"></div>
                                    </div>
                                    <div class="bangumi-btn">
                                        <div class="btn-follow followed">
                                            <i></i>已追番
                                        </div>
                                        <div class="bangumi-options clearfix">
                                            <ul class="opt-list">
                                                <li class="">标记为 想看</li>
                                                <li class="">标记为 在看</li>
                                                <li class="disabled">标记为 已看</li>
                                                <li>取消追番</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="share-module">
                                        <ul class="share-list clearfix" data-module="share_module_0">
                                            <li share-type="weibo" class="share-btn btn-weibo"></li>
                                            <li share-type="qqzone" class="share-btn btn-qqzone"></li>
                                            <li share-type="qq" class="share-btn btn-qq"></li>
                                            <li share-type="baidu" class="share-btn btn-baidu"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="media-tab-wrp">
                    <div class="media-tab-nav">
                        <ul class="clearfix">
                            <li class="on">作品详情</li>
                        </ul>
                    </div>
                    <div class="media-tab-content">
                        <div class="media-tab-detail-wrp clearfix">
                            <div class="media-tab-detail-l-wrp">
                                <div class="media-tab-detail-l">
                                    <div class="media-tab-module-wrp season-module">
                                        <div class="media-tab-module-content"><!---->
                                            <div><!---->
                                                <div class="sl-ep-nav">
                                                    <div class="slider-wrapper">
                                                        <div class="slider-content">
                                                            <ul class="sl-ep-nav-list">
                                                                <li class="sl-ep-nav-item">第1话-第6话</li>
                                                                <li class="sl-ep-nav-item on">第7话-第12话</li>
                                                            </ul>
                                                        </div>
                                                        <div class="slider-contro clearfix">
                                                            <div class="contro-item" style="display: none;">
                                                        </div>
                                                        <span class="slider-prev disabled" style="display: none;"></span>
                                                        <i class="slider-prev-mask" style="display: none;"></i>
                                                        <span class="slider-next disabled" style="display: none;"></span>
                                                        <i class="slider-next-mask" style="display: none;"></i>
                                                    </div>
                                                </div>
                                                <ul class="mode-select clearfix">
                                                    <li title="详细模式" class="detail-mode selected"></li>
                                                    <li title="精简模式" class="simple-mode"></li>
                                                </ul>
                                            </div>
                                            <div class="sl-ep-list">
                                                <ul>
                                                    <li title="第7话：宁可有聪明的敌人也不要有无知的朋友。" class="misl-ep-item">
                                                        <div class="misl-ep-img">
                                                            <div class="common-lazy-img">
                                                                <img alt="7" src="//i1.hdslb.com/bfs/archive/0b8f6190fa51f4f4933a3d8e314b230e3d23d0ec.jpg@192w_120h.webp" lazy="loaded">
                                                            </div>
                                                        </div>
                                                        <div class="misl-ep-text">
                                                            <div class="misl-ep-index">第7话</div>
                                                            <div class="misl-ep-title">宁可有聪明的敌人也不要有无知的朋友。</div>
                                                        </div>
                                                        <span class="mark-icon badge-pink">会员</span>
                                                    </li>
                                                    <li title="第8话：进入此门者当舍弃一切希望。" class="misl-ep-item"><div class="misl-ep-img"><div class="common-lazy-img"><img alt="8" src="//i0.hdslb.com/bfs/archive/a597de9c92b214d961c8fc3fe997eabce5fd1cf8.jpg@192w_120h.webp" lazy="loaded"></div></div> <div class="misl-ep-text"><div class="misl-ep-index">第8话</div> <div class="misl-ep-title">进入此门者当舍弃一切希望。</div></div> <span class="mark-icon badge-pink">会员</span></li><li title="第9话：人注定要受自由之苦。" class="misl-ep-item"><div class="misl-ep-img"><div class="common-lazy-img"><img alt="9" src="//i0.hdslb.com/bfs/archive/f9c56ac57dc17086fcfa804bfe30defe6f541256.jpg@192w_120h.webp" lazy="loaded"></div></div> <div class="misl-ep-text"><div class="misl-ep-index">第9话</div> <div class="misl-ep-title">人注定要受自由之苦。</div></div> <span class="mark-icon badge-pink">会员</span></li><li title="第10话：说到最危险的背叛者 就是所有人自身所隐藏起来的另一面。" class="misl-ep-item"><div class="misl-ep-img"><div class="common-lazy-img"><img alt="10" src="//i0.hdslb.com/bfs/archive/a701d764751e4d3702892ba3d03283e6b429a6e2.jpg@192w_120h.webp" lazy="loaded"></div></div> <div class="misl-ep-text"><div class="misl-ep-index">第10话</div> <div class="misl-ep-title">说到最危险的背叛者 就是所有人自身所隐藏起来的另一面。</div></div> <span class="mark-icon badge-pink">会员</span></li><li title="第11话：然而，人们泛称为命运的事情却通常都是自己做出来的蠢事。" class="misl-ep-item"><div class="misl-ep-img"><div class="common-lazy-img"><img alt="11" src="//i0.hdslb.com/bfs/archive/e858fd8c1033481bbf31e540d4e8e222286cbecb.jpg@192w_120h.webp" lazy="loaded"></div></div> <div class="misl-ep-text"><div class="misl-ep-index">第11话</div> <div class="misl-ep-title">然而，人们泛称为命运的事情却通常都是自己做出来的蠢事。</div></div> <span class="mark-icon badge-pink">会员</span></li><li title="第12话：天才和疯子相互为邻。" class="misl-ep-item lastplay"><div class="misl-ep-img"><div class="common-lazy-img"><img alt="12" src="//i1.hdslb.com/bfs/archive/058c336eda9d5f5d20ae4cc1567b01d0898b3b4d.jpg@192w_120h.webp" lazy="loaded"></div></div> <div class="misl-ep-text"><div class="misl-ep-index">第12话</div> <div class="misl-ep-title">天才和疯子相互为邻。</div></div> <span class="mark-icon badge-pink">会员</span></li> <!----><!----><!----><!----><!----><!----></ul></div> <!----></div></div></div>   <div class="bangumi-media"><div class="bangumi-media-header"><h4>点评</h4> <div class="rate-wrapper clearfix"><div class="btn-go-write"><i class="icon-write"><b class="path1"></b><b class="path2"></b><b class="path3"></b></i>去写点评</div> <!----></div> <div class="btn-more-review">查看全部点评</div></div> <div class="bangumi-media-body clearfix"><!----> <ul class="bangumi-review-list clearfix"><li class="bangumi-review-item"><div class="item-header"><a href="//space.bilibili.com/8386200" target="_blank" class="author-name">-白衣金带-</a> <!----> <ul class="item-star-wrapper clearfix"><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li></ul> <!----></div> <a href="//www.bilibili.com/read/cv2207651" target="_blank"><div class="long-title">不要再问女主角是谁这么明显的问题了</div> <p class="review-content long smaller">女主角定义：作品中饰演主角的女性，在各项活动中起主要作用的女性。其出场率通常贯穿全部剧情，或在剧情发展中起重要推动作用，对作品剧情起推动作用或作品中出场最多的女性。小说目前一共出了12卷（含4.5卷和7.5卷），主要人物总台词量(字）如下：绫小路清隆 118048堀北铃音 72243栉田桔梗 27193龙园翔 27122一之濑帆波 26764**********轻井泽惠 21159须藤健 17025池宽治 16052幸村辉彦 15458坂柳有栖 13489山内春树 10374南云雅 10335伊</p></a></li><li class="bangumi-review-item"><div class="item-header"><a href="//space.bilibili.com/201521430" target="_blank" class="author-name is-vip">宝安区浩哥</a> <!----> <ul class="item-star-wrapper clearfix"><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li></ul> <!----></div> <a href="//www.bilibili.com/read/cv1595532" target="_blank"><div class="long-title">如果没看过原著，这部番很好。</div> <p class="review-content long smaller">我在看完番后，这部番让我想找原著看一看。我从台湾角川买了现在已经出版了的部分，同时也在网上白嫖了日版的7.5-9卷。我谈谈对这部番的感受。（看书后感觉原著和这部番差别很大）下面涉及吐槽和剧透：番剧做到了小说的第三卷，但不过其实小说第四卷以后才真正有意思起来。番剧里对部分小说情节进行了魔改。且有一个非常重要的情节是学校社团和学生会招人那一段是个伏笔，装摄像头那一段也有许多因为缺乏必要的细节导致让人摸不着头脑的地方。原作中是轻井泽惠去找女更衣室的SD卡，在番剧中被替换成了堀北。而且番剧没有过多的对人</p></a></li><li class="bangumi-review-item"><div class="item-header"><a href="//space.bilibili.com/97195808" target="_blank" class="author-name is-vip">Assassin血塗蝶</a> <!----> <ul class="item-star-wrapper clearfix"><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star icon-star-light"><!----></li><li class="icon-star"><!----></li><li class="icon-star"><!----></li></ul> <!----></div> <a href="//www.bilibili.com/read/cv4725870" target="_blank"><div class="long-title">不要再问女主角是谁这么愚蠢的问题了</div> <p class="review-content long smaller">目前，官方，作者在访谈里说了，目前实教没有明确的女主，所以任何造谣说女主是XXXX 之类的，可以停停了，作者比你们懂https://tieba.baidu.com/p/6467649127?pid=129648734399&amp;cid=0&amp;red_tag=1189665314#129648734399作者没说清楚就是为了让你们不要再争了，安心看书就可以了，不好吗，有很多人总想争女主。就为了找那点可怜的存在感，他们认为自己喜欢的角色是女主之类的头衔可以让他们感到很爽，然而根本没用，只是可怜的自我安慰罢</p></a></li></ul></div></div><div class="media-tab-module-wrp"><div class="media-tab-module-title">更多推荐</div> <div class="media-tab-module-more">
        更多
        </div> <div class="media-tab-module-content"><div class="mtlr-list-wrp"><div class="block-slide-wrp"><div class="slider-wrapper"><div class="slider-content"><ul class="block-slide-img-list clearfix" style="transform: translateX(0px);"><li class="slide-item-wrp"><div class="slide-item-img"><a href="//www.bilibili.com/bangumi/play/ss25510" target="_blank"><!----> <div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/4d9f43eb3dba572797f8915f8f28efce9e58d756.jpg@320w_428h.webp" lazy="loaded"></div></a></div> <div class="slide-item-info"><a href="//www.bilibili.com/bangumi/play/ss25510" target="_blank"><div class="slide-item-title">刀剑神域 Alicization</div></a></div></li><li class="slide-item-wrp"><div class="slide-item-img"><a href="//www.bilibili.com/bangumi/play/ss24625" target="_blank"><!----> <div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/0f11dfac18d744518669b2d211263f03d41d619c.png@320w_428h.webp" lazy="loaded"></div></a></div> <div class="slide-item-info"><a href="//www.bilibili.com/bangumi/play/ss24625" target="_blank"><div class="slide-item-title">Angels of Death</div></a></div></li><li class="slide-item-wrp"><div class="slide-item-img"><a href="//www.bilibili.com/bangumi/play/ss184" target="_blank"><!----> <div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/f7175cd20de509e2bfd43255c28cf4e24841480d.jpg@320w_428h.webp" lazy="loaded"></div></a></div> <div class="slide-item-info"><a href="//www.bilibili.com/bangumi/play/ss184" target="_blank"><div class="slide-item-title">NO GAME NO LIFE 游戏人生</div></a></div></li><li class="slide-item-wrp"><div class="slide-item-img"><a href="//www.bilibili.com/bangumi/play/ss25733" target="_blank"><!----> <div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/1cc333ff578e5ea9fded7e454953a4e2291440c2.png@320w_428h.webp" lazy="loaded"></div></a></div> <div class="slide-item-info"><a href="//www.bilibili.com/bangumi/play/ss25733" target="_blank"><div class="slide-item-title">青春猪头少年不会梦到兔女郎学姐</div></a></div></li><li class="slide-item-wrp"><div class="slide-item-img"><a href="//www.bilibili.com/bangumi/play/ss4452" target="_blank"><!----> <div class="common-lazy-img"><img alt="" src="//i0.hdslb.com/bfs/bangumi/fcdb9db0cc3f5c0c3aaa4ca1a9ddea6c121db471.jpg@320w_428h.webp" lazy="loaded"></div></a></div> <div class="slide-item-info"><a href="//www.bilibili.com/bangumi/play/ss4452" target="_blank"><div class="slide-item-title">刀剑神域</div></a></div></li></ul></div> <div class="slider-contro clearfix"><div class="contro-item" style="display: none; left: 0px;"></div> <span class="slider-prev disabled" style="display: none;"></span> <i class="slider-prev-mask" style="display: none;"></i> <span class="slider-next" style="display: none;"></span> <i class="slider-next-mask" style="display: none;"></i></div></div></div></div></div></div></div></div> <div class="media-tab-detail-r"><div class="media-info-card"><div class="mic-title">角色声优</div> <div><div class="mic-evaluate" style="height: 164px;"><span class="" style="opacity: 0;"></span> <span class="static" v-html="data.roleSound"></span></div> <div class="mic-expand">展开更多</div></div></div><div class="media-info-card"><div class="mic-title">STAFF</div> <div><div class="mic-evaluate" style="height: auto;"><span class="hide" style="opacity: 0;" ></span> <span class="" v-html="data.staff"></span></div> <!----></div></div> </div></div></div></div> <div class="short-review-masker" style="display:none;"><div class="short-review-content"><div class="dialog-close"></div> <div class="review-header-wrap"><div class="review-edit-header"><a href="//www.bilibili.com/bangumi/media/md6339/" target="_blank" class="media-img"><img src="//i0.hdslb.com/bfs/bangumi/a79e331b7443ed5df5a2acd345dc41d598d46ff9.jpg@100w_133h.jpg" alt=""></a> <div class="media-info"><h4>欢迎来到实力至上主义的教室</h4> <p class="rate-tip">请发表你对这部作品的评分</p> <div class="rate-wrap"><ul class="rate-star clearfix"><li><i class="icon-star"></i></li><li><i class="icon-star"></i></li><li><i class="icon-star"></i></li><li><i class="icon-star"></i></li><li><i class="icon-star"></i></li></ul> <!----></div></div></div></div> <div class="review-body-wrap"><textarea name="short-review" placeholder=""></textarea> <span class="tip" style="color:#99a2aa;">0/100</span> <button class="mr-btn">发表短评</button></div> <div class="mr-long-review">想写长评，点这里 &gt;</div></div></div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----></div>
        </div>
    </div>
</template>

<script>
import * as anime from '@/api/anime'
export default {
    data () {
        return {
            data: {

            }
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            anime.detail(this.$router.currentRoute.query.id).then(result => {
                this.data = result.data
            })
        }
    }
}
</script>

<style lang="scss">
.bangumi-info-blurbg-wrapper .bangumi-info-blurbg {
    position: absolute;
    background-size: cover;
    background-position: 50%;
    width: 110%;
    min-width: 1120px;
    height: 496px;
    top: 50%;
    left: 50%;
    margin: -260px -55%;
    z-index: 10;
    background-repeat: no-repeat;
    -webkit-filter: blur(40px);
    -moz-filter: blur(40px);
    -ms-filter: blur(40px);
    filter: blur(40px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10,MakeShadow=false);
}
.mic-wrapper.media-info-card .mic-content:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
}
.mic-wrapper.media-info-card .mic-content .mic-info .ellipsis {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mic-wrapper.media-info-card .mic-content .mic-info .ellipsis {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mic-wrapper.media-info-card .mic-content .mic-info .mic-info-author {
    margin-bottom: 8px;
    width: 100%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.mic-wrapper.media-info-card .mic-content .mic-info .ellipsis {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mic-wrapper.media-info-card .mic-content .mic-info .mic-info-title {
    line-height: 20px;
    color: #222;
    font-size: 16px;
    margin-bottom: 12px;
}
.mic-wrapper.media-info-card .mic-content .mic-info {
    float: left;
    height: 140px;
    font-size: 14px;
    color: #6c7579;
    max-width: calc(100% - 135px);
}
.common-lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.common-lazy-img {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/img_loading.png) 50% no-repeat;
    background-size: 50px;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.mic-wrapper.media-info-card .mic-content .mic-pic a {
    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: 4px;
    overflow: hidden;
}
.mic-wrapper.media-info-card .mic-content .mic-pic label {
    position: absolute;
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px);
    font-size: 12px;
    padding: 0 4px;
    color: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ff8eff;
}
.mic-wrapper.media-info-card .mic-content .mic-pic {
    position: relative;
    float: left;
    width: 120px;
    height: 160px;
    margin-right: 15px;
}
.mic-wrapper.media-info-card .mic-content {
    height: 160px;
}
.media-info-card .mic-title {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
    font-weight: 700;
}
.mic-wrapper.media-info-card .mic-title {
    margin-bottom: 20px;
}
.media-info-card {
    position: relative;
    font-size: 12px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    width: 350px;
    min-height: 274px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
}
.mic-wrapper.media-info-card {
    min-height: 280px;
}
.media-info-card+.media-info-card {
    margin-top: 10px;
}
.mic-wrapper.media-info-card.min-mic-wrapper {
    min-height: 240px;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-evaluate span {
    top: 0;
    left: 0;
    font-size: 14px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    max-height: 1000px;
}
.media-info-card .mic-evaluate span.hide {
    display: none;
}
.media-info-card .mic-evaluate {
    color: #222;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-title {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
    font-weight: 700;
}
.media-info-card {
    position: relative;
    font-size: 12px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    width: 350px;
    min-height: 274px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
}
.media-info-card+.media-info-card {
    margin-top: 10px;
}
.media-info-card .mic-expand {
    position: absolute;
    font-size: 12px;
    width: 48px;
    text-align: center;
    height: 16px;
    line-height: 16px;
    color: #99a2aa;
    cursor: pointer;
    bottom: 20px;
    left: 50%;
    margin-left: -24px;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-evaluate span {
    top: 0;
    left: 0;
    font-size: 14px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    max-height: 1000px;
}
.media-info-card .mic-evaluate span.static {
    position: absolute;
    max-height: 174px;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-evaluate span {
    top: 0;
    left: 0;
    font-size: 14px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    max-height: 1000px;
}
.media-info-card .mic-evaluate {
    color: #222;
}
.media-info-card .mic-evaluate, .media-info-card .mic-evaluate span {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    -o-transition: .3s all linear;
    transition: all .3s linear;
}
.media-info-card .mic-title {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
    font-weight: 700;
}
.media-info-card {
    position: relative;
    font-size: 12px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    width: 350px;
    min-height: 274px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
}
.media-tab-detail-wrp .media-tab-detail-r {
    margin-left: 750px;
}
.clearfix:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
}
.media-tab-nav ul li {
    cursor: pointer;
    float: left;
    padding: 0 6px;
    line-height: 58px;
    color: #222;
    -webkit-transition: all .1s linear;
    -o-transition: .1s all linear;
    transition: all .1s linear;
    border-bottom: 3px solid rgba(0,0,0,0);
    max-height: -1px;
}
.media-tab-nav ul li.on, .media-tab-nav ul li:hover {
    color: #00a1d6;
    border-bottom-color: #00a1d6;
}
.media-tab-nav ul {
    width: 1280px;
    margin: 0 auto;
    position: relative;
}
.media-tab-detail-wrp, .media-tab-nav ul {
    width: 1100px;
}
.slide-item-wrp .slide-item-info .slide-item-title {
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    height: 16px;
    color: #222;
    padding-top: 8px;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
}
.common-lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.slide-item-wrp .slide-item-img img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.common-lazy-img {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/img_loading.png) 50% no-repeat;
    background-size: 50px;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.slide-item-wrp .slide-item-img {
    position: relative;
    width: 100%;
    height: 214px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}
.slide-item-wrp {
    width: 160px;
    float: left;
    margin: 0 20px 20px 0;
    border-radius: 4px;
}
.slider-wrapper .slider-content li {
    margin-bottom: 0!important;
}
.block-slide-wrp .block-slide-img-list {
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    -o-transition: transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
}
.slider-wrapper .slider-content {
    overflow: hidden;
}
.slider-wrapper {
    position: relative;
    width: 100%;
}
.block-slide-wrp .slider-wrapper {
    position: relative;
}
.media-tab-detail-wrp .media-tab-detail-l .media-tab-module-wrp .media-tab-module-more, .media-tab-detail-wrp .media-tab-detail .media-tab-module-wrp .media-tab-module-more {
    float: right;
    line-height: 22px;
    border: 1px solid #b7c0cc;
    border-radius: 4px;
    height: 22px;
    padding: 0 10px;
    font-size: 12px;
    color: #6e7579;
    cursor: pointer;
    margin: 0 0 0 10px;
}
.media-tab-detail-wrp .media-tab-detail-l .media-tab-module-wrp .media-tab-module-title, .media-tab-detail-wrp .media-tab-detail .media-tab-module-wrp .media-tab-module-title {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    color: #222;
    height: 24px;
    line-height: 24px;
}
.media-tab-detail-wrp .media-tab-detail-l .media-tab-module-wrp, .media-tab-detail-wrp .media-tab-detail .media-tab-module-wrp {
    vertical-align: top;
    border-top: 1px solid #e5e9ef;
    padding-top: 20px;
    margin-top: 20px;
}
.bangumi-review-item:last-child {
    margin-right: 0;
}
.bangumi-review-item .review-content {
    font-size: 12px;
    color: #222;
    line-height: 20px;
    -webkit-line-clamp: 5;
    max-height: 100px;
}
.bangumi-review-item .review-content.long {
    color: #6d757a;
    max-height: 60px;
    -webkit-line-clamp: 3;
}
.bangumi-review-item .review-content.long.smaller {
    max-height: 40px;
    -webkit-line-clamp: 2;
}
.bangumi-review-item .item-header .item-star-wrapper {
    position: relative;
    display: block;
    height: 14px;
    padding-top: 2px;
    float: left;
    margin-left: 8px;
}
.bangumi-review-item .item-header .author-name, .bangumi-review-item .item-header .media-name {
    display: block;
    float: left;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #6d757a;
    max-width: 130px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bangumi-review-item .item-header .author-name {
    max-width: 100px;
}
.bangumi-review-item .item-header .author-name.is-vip, .bangumi-review-item .item-header .media-name.is-vip {
    color: #fb7299!important;
}
.bangumi-review-item .item-header {
    position: relative;
    height: 16px;
    margin-bottom: 12px;
}
.bangumi-review-item {
    float: left;
    width: 288px;
    height: 162px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: #f4f5f7;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
.bangumi-review-item {
    width: 228px;
    margin-right: 8px;
}
.bangumi-review-item .review-content {
    font-size: 12px;
    color: #222;
    line-height: 20px;
    -webkit-line-clamp: 5;
    max-height: 100px;
}
.bangumi-review-item .review-content.long {
    color: #6d757a;
    max-height: 60px;
    -webkit-line-clamp: 3;
}
.bangumi-review-item .review-content.long.smaller {
    max-height: 40px;
    -webkit-line-clamp: 2;
}
.bangumi-review-item .long-title, .bangumi-review-item .review-content {
    word-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.icon-star-light:before {
    content: "\E906";
    color: #ffa726;
}
.bangumi-review-item .item-header .item-star-wrapper li {
    position: relative;
    margin-right: 4px;
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    font-size: 12px;
}
.bangumi-review-item .item-header .item-star-wrapper {
    position: relative;
    display: block;
    height: 14px;
    padding-top: 2px;
    float: left;
    margin-left: 8px;
}
.bangumi-review-item .item-header .author-name, .bangumi-review-item .item-header .media-name {
    display: block;
    float: left;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #6d757a;
    max-width: 130px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bangumi-review-item .item-header .author-name {
    max-width: 100px;
}
.bangumi-review-item .item-header {
    position: relative;
    height: 16px;
    margin-bottom: 12px;
}
.bangumi-review-item {
    float: left;
    width: 288px;
    height: 162px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: #f4f5f7;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
.bangumi-review-item {
    width: 228px;
    margin-right: 8px;
}
.bangumi-media .bangumi-media-body .bangumi-review-list {
    display: block;
    float: left;
    margin-top: 20px;
}
.bangumi-media .bangumi-media-body {
    width: 100%;
    overflow: hidden;
}
.bangumi-media .bangumi-media-header .btn-more-review {
    float: right;
    line-height: 22px;
    border: 1px solid #b7c0cc;
    border-radius: 4px;
    height: 22px;
    padding: 0 10px;
    font-size: 12px;
    color: #6e7579;
    cursor: pointer;
}
.icon-write .path3:before {
    content: "\E902";
    margin-left: -1em;
    color: #2cbce7;
}
.icon-write .path2:before {
    content: "\E901";
    margin-left: -1em;
    color: #f79f4f;
}
.icon-write .path1:before {
    content: "\E900";
    color: #ffd778;
}
[class*=" icon-"], [class*=" icon-"] *, [class^=icon-], [class^=icon-] * {
    font-family: icomoon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.bangumi-media .bangumi-media-header .rate-wrapper .btn-go-write i {
    display: inline-block;
    font-size: 22px;
    vertical-align: top;
    margin-right: 8px;
}
.bangumi-media .bangumi-media-header .rate-wrapper .btn-go-write {
    display: block;
    margin-top: 6px;
    float: left;
    height: 24px;
    font-size: 14px;
    color: #222;
    line-height: 24px;
    cursor: pointer;
}
.bangumi-media .bangumi-media-header .rate-wrapper {
    float: left;
    margin-left: 20px;
    margin-top: -5px;
}
.bangumi-media .bangumi-media-header h4 {
    float: left;
    line-height: 24px;
    height: 24px;
    font-size: 18px;
    color: #222;
    font-weight: 700;
}
.bangumi-media .bangumi-media-header {
    width: 100%;
    height: 25px;
}
.bangumi-media {
    width: 100%;
    padding-top: 20px;
    margin: 20px auto 0;
    border-top: 1px solid #e5e9ef;
}
.media-sponsor-wrapper .sponsor-rank-item.normal .sp-right .sp-msg {
    max-height: 38px;
    width: auto;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.sponsor-rank-item.normal .sp-right {
    position: relative;
    margin-left: 56px;
}
.sponsor-rank-item.normal .sp-left img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
}
.sponsor-rank-item.normal .sp-left .sp-rank {
    position: absolute;
    min-width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #99a2aa;
    top: 0;
    left: 26px;
}
.sponsor-rank-item.normal .sp-left .face-wrap {
    position: relative;
    padding: 8px 0 2px 1px;
    background: url(//static.hdslb.com/images/base/icons.png) -1228px -1157px no-repeat;
}
.sponsor-rank-item.normal .sp-left {
    width: 57px;
    float: left;
}
.sponsor-rank-list li {
    -webkit-transition: all .36s;
    -o-transition: all .36s;
    transition: all .36s;
}
.sponsor-rank-item.normal {
    float: left;
    width: 170px;
    height: 80px;
    margin-right: 73px;
}
.media-sponsor-wrapper .sponsor-rank-item.normal {
    width: 160px;
    margin-right: 13px;
    height: 60px;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-right .sp-msg div {
    max-height: 40px;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.sponsor-rank-item.special .sp-right .sp-msg>span, .sponsor-rank-item.special .sp-right .sp-msg>span:before {
    position: absolute;
    border-color: #e5e9ef #e5e9ef rgba(0,0,0,0) rgba(0,0,0,0);
    border-style: solid;
    border-width: 5px;
    top: -1px;
    left: -10px;
}
.sponsor-rank-item.special .sp-right .sp-msg>span:before {
    content: "";
    border-color: #fff #fff rgba(0,0,0,0) rgba(0,0,0,0);
    top: -4px;
    left: -2px;
}
.sponsor-rank-item.special .sp-right .sp-msg>span, .sponsor-rank-item.special .sp-right .sp-msg>span:before {
    position: absolute;
    border-color: #e5e9ef #e5e9ef rgba(0,0,0,0) rgba(0,0,0,0);
    border-style: solid;
    border-width: 5px;
    top: -1px;
    left: -10px;
}
.sponsor-rank-item.special .sp-right .sp-msg {
    word-break: break-all;
    position: absolute;
    width: 145px;
    max-height: 70px;
    padding: 1px 5px;
    border: 1px solid #e5e9ef;
    border-radius: 0 4px 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #99a2aa;
    line-height: 20px;
    top: 36px;
    left: 5px;
    -webkit-transition: all .36s;
    -o-transition: all .36s;
    transition: all .36s;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-right .sp-msg {
    width: 110px!important;
    max-height: 42px;
}
.sponsor-rank-item.special .sp-right .sp-user .vip-rank {
    position: absolute;
    top: 9px;
    right: 0;
    width: 20px;
    height: 16px;
}
.sponsor-rank-item.special .sp-right .sp-user .vip-rank.rank-1 {
    background: url(//static.hdslb.com/images/base/icons.png) -726px -1493px;
}
.sponsor-rank-item.special .sp-right .sp-user .sp-name {
    display: inline-block;
    padding-top: 10px;
    font-size: 14px;
    height: 16px;
    line-height: 16px;
    color: #222;
    font-weight: 700;
    max-width: 124px;
    padding-right: 28px;
    position: relative;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.sponsor-rank-item.special .sp-right .sp-user.vip .sp-name {
    color: #fb7299;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-right .sp-user .sp-name {
    max-width: 100px;
    padding-right: 23px;
}
.sponsor-rank-item.special .sp-right {
    position: relative;
    margin-left: 60px;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-right {
    margin-left: 55px;
}
.sponsor-rank-item.special .sp-left img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding: 0;
    border: 1px solid #e5e9ef;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-left img {
    width: 42px;
    height: 42px;
}
.sponsor-rank-item.special .sp-left {
    width: 50px;
    float: left;
}
.media-sponsor-wrapper .sponsor-rank-item.special .sp-left {
    width: 44px;
}
.sponsor-rank-list li {
    -webkit-transition: all .36s;
    -o-transition: all .36s;
    transition: all .36s;
}
.media-sponsor-wrapper .sponsor-rank-item.special {
    width: 170px;
    height: 108px;
    margin-right: 20px;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 .sponsor-rank-body .sponsor-rank-list {
    height: auto;
}
.sponsor-rank-list {
    height: 180px;
    overflow: hidden;
    margin-top: 20px;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 .sponsor-rank-body {
    height: 188px;
}
.sponsor-rank-v1 .sponsor-rank-body {
    width: 100%;
    overflow: hidden;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 .sponsor-rank-header .show-sponsor-rank {
    color: #6e7579;
    border: 1px solid #b7c0cc;
    position: absolute;
    right: 0;
    margin-right: 0;
}
.sponsor-rank-v1 .sponsor-rank-header .show-sponsor-rank {
    display: block;
    float: right;
    padding: 0 15px;
    margin-right: 1px;
    border: 1px solid #ccd0d7;
    height: 22px;
    line-height: 22px;
    color: #222;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 .sponsor-rank-header h3 {
    line-height: 24px;
    height: 24px;
    font-size: 18px;
    color: #222;
    font-weight: 700;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 .sponsor-rank-header {
    height: 25px;
}
.media-sponsor-wrapper .sponsor-left-area .sponsor-rank-v1 {
    width: auto;
}
.media-sponsor-wrapper .sponsor-left-area {
    float: left;
    width: 560px;
}
.media-sponsor-wrapper {
    position: relative;
    padding-top: 20px;
    margin: 20px 0 0;
    border-top: 1px solid #e5e9ef;
}
.misl-ep-item .mark-icon.badge-pink {
    background-color: #fb7299;
}
.misl-ep-item .mark-icon {
    position: absolute;
    top: -6px;
    right: -2px;
    padding: 0 4px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    background-color: #999;
}
.misl-ep-item .misl-ep-text .misl-ep-title {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    margin-top: 1px;
    color: #6d757a;
    max-height: 32px;
    word-break: break-word;
    word-wrap: break-word;
}
.misl-ep-item .misl-ep-text .misl-ep-index, .misl-ep-item .misl-ep-text .misl-ep-title {
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.misl-ep-item .misl-ep-text .misl-ep-index {
    padding-top: 5px;
    color: #2d2d2d;
    height: 16px;
    white-space: nowrap;
}
.misl-ep-item .misl-ep-text {
    margin-left: 106px;
    padding-right: 9px;
}
.common-lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.common-lazy-img {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/img_loading.png) 50% no-repeat;
    background-size: 50px;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.misl-ep-item .misl-ep-img {
    position: relative;
    float: left;
    width: 96px;
    height: 60px;
    margin: -1px;
    border-radius: 4px 0 0 4px;
    overflow: hidden;
}
.misl-ep-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 0 20px 20px 0;
    width: 205px;
    height: 60px;
    cursor: pointer;
    background-color: #f4f5f7;
    border: 1px solid #f4f5f7;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-list ul {
    padding-top: 10px;
    margin: 20px -20px 0 0;
    height: auto;
    overflow: hidden;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-list {
    clear: both;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .slider-contro span.slider-next {
    background-position: -466px -1367px;
    margin-right: 0;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .slider-contro span.disabled {
    background-color: #dcdcdc;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .slider-contro span.slider-prev {
    background-position: -467px -1431px;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .slider-contro span {
    display: inline-block;
    vertical-align: top;
    width: 26px;
    height: 18px;
    border-radius: 2px;
    margin-right: 4px;
    background-repeat: no-repeat;
    background-color: #ccd0d7;
    background-image: url(//s1.hdslb.com/bfs/static/review/media/asserts/icons.png);
    cursor: pointer;
    -webkit-transition: all .2s linear;
    -o-transition: .2s all linear;
    transition: all .2s linear;
}
.slider-wrapper .slider-contro .contro-item {
    position: absolute;
    top: 0;
    min-width: 5px;
    width: 90px;
    height: .10666667rem;
    border-radius: .064rem;
    background-color: rgba(0,0,0,.2);
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .slider-contro {
    position: absolute;
    right: -66px;
    top: 3px;
    height: 18px;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .sl-ep-nav-list .sl-ep-nav-item.on:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translateX(-3px);
    -ms-transform: translateX(-3px);
    transform: translateX(-3px);
    border-bottom: 3px solid #00a1d6;
    border-top: 0;
    border-left: 3px solid rgba(0,0,0,0);
    border-right: 3px solid rgba(0,0,0,0);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .sl-ep-nav-list .sl-ep-nav-item.on {
    color: #00a1d6;
    border-bottom-color: #00a1d6;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .sl-ep-nav-list .sl-ep-nav-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 2px 30px 0 0;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid rgba(0,0,0,0);
    font-size: 12px;
    cursor: pointer;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav .sl-ep-nav-list {
    height: 25px;
    white-space: nowrap;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    -o-transition: transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
}
.slider-wrapper .slider-content {
    overflow: hidden;
}
.slider-wrapper {
    position: relative;
    width: 100%;
}
.media-tab-module-wrp .media-tab-module-content .sl-ep-nav {
    position: relative;
    padding-right: 129px;
    height: 25px;
}
.media-tab-detail-wrp .media-tab-detail-l>div:first-child, .media-tab-detail-wrp .media-tab-detail>div:first-child {
    margin-top: 0;
    border-top: none;
    padding-top: 0;
}
.media-tab-detail-wrp .media-tab-detail-l .media-tab-module-wrp, .media-tab-detail-wrp .media-tab-detail .media-tab-module-wrp {
    vertical-align: top;
    border-top: 1px solid #e5e9ef;
    padding-top: 20px;
    margin-top: 20px;
}
.media-tab-detail-wrp .media-tab-detail, .media-tab-detail-wrp .media-tab-detail-l {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
}
.media-tab-detail-wrp .media-tab-detail-l-wrp {
    float: left;
    width: 920px;
}
.media-tab-detail-wrp .media-tab-detail-l-wrp {
    width: 740px;
}
.media-tab-detail-wrp, .media-tab-nav ul {
    width: 1100px;
}
.media-tab-detail-wrp {
    width: 1280px;
    margin: 0 auto;
    position: relative;
    top: 0;
}
.media-tab-content {
    min-height: 210px;
}
.media-tab-nav ul li.on, .media-tab-nav ul li:hover {
    color: #00a1d6;
    border-bottom-color: #00a1d6;
}
.media-tab-nav ul li {
    cursor: pointer;
    float: left;
    padding: 0 6px;
    line-height: 58px;
    color: #222;
    -webkit-transition: all .1s linear;
    -o-transition: .1s all linear;
    transition: all .1s linear;
    border-bottom: 3px solid rgba(0,0,0,0);
    max-height: -1px;
}
.media-tab-detail-wrp, .media-tab-nav ul {
    width: 1100px;
}
.media-tab-nav {
    position: relative;
    height: 60px;
    background-color: #fff;
    margin-bottom: 11px;
}
.media-tab-wrp {
    position: relative;
    background-color: #f4f5f7;
    padding-bottom: 20px;
    z-index: 10;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list li {
    width: auto;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #212121;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list li.disabled {
    color: #e7e7e7;
    background-color: rgba(0,0,0,0);
    cursor: not-allowed;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list li {
    width: auto;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #212121;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list li {
    width: auto;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #212121;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list li {
    width: auto;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #212121;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options .opt-list {
    position: absolute;
    right: 0;
    bottom: 0;
    list-style: none;
    padding: 6px 0;
    background-color: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.2);
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .bangumi-options {
    position: absolute;
    right: 0;
    width: 116px;
    bottom: -160px;
    font-size: 14px;
    height: 160px;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .btn-follow.followed i {
    vertical-align: -6px;
    background-image: url(//s1.hdslb.com/bfs/static/review/media/asserts/icons.png);
    background-position: -660px -1938px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .btn-follow i {
    display: inline-block;
    vertical-align: -5px;
    width: 24px;
    height: 24px;
    margin-right: 7px;
    background-repeat: no-repeat;
    background-image: url(//s1.hdslb.com/bfs/static/review/media/asserts/heart-bangumi.svg);
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .btn-follow {
    width: 128px;
    height: 48px;
    line-height: 48px;
    background-color: #f36392;
    border-radius: 8px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn .btn-follow.followed {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    background-color: hsla(0,0%,100%,.12);
    border: 4px solid hsla(0,0%,100%,.5);
    text-shadow: 0 0 4px rgba(0,0,0,.6);
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns .bangumi-btn {
    position: relative;
    float: left;
    margin-right: 20px;
}
.btn-pay-wrapper .pic-wrapper {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/vipbtn-icon.png) no-repeat;
    display: block;
    position: absolute;
    width: 68px;
    height: 62px;
    top: -14px;
    left: 0;
    cursor: pointer;
}
.btn-pay-wrapper a.pay-btn {
    display: inline-block;
    vertical-align: top;
    min-width: 120px;
    height: 48px;
    line-height: 48px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    padding: 0 20px 0 22px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    background-color: #ffb500;
    color: #fff;
    text-indent: 55px;
}
.btn-pay-wrapper.is-vip a {
    height: 48px;
    line-height: 46px;
    background-color: hsla(0,0%,100%,.12);
    color: #fff;
    cursor: default;
}
.btn-pay-wrapper {
    position: relative;
    float: left;
    margin-right: 20px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-btns {
    float: left;
    margin-top: 32px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-intro {
    margin-top: 11px;
    font-size: 12px;
    color: #fff;
    line-height: 20px;
    min-height: 87px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-state span+span, .media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-time span+span {
    margin-left: 20px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-time {
    margin-top: 28px;
}
[class*=" icon-"], [class*=" icon-"] *, [class^=icon-], [class^=icon-] * {
    font-family: icomoon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.to-review-btn {
    display: none;
    color: #f4f4f4;
    text-align: left;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
}
.media-info-score .media-info-star-wrapper .media-info-review-times {
    color: #f4f4f4;
    font-size: 12px;
    line-height: 1;
    text-align: left;
}
.review-stars>i+i {
    margin-left: 4px;
}
[class*=" icon-"], [class*=" icon-"] *, [class^=icon-], [class^=icon-] * {
    font-family: icomoon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.review-stars>i {
    display: inline-block;
    font-size: 12px;
    line-height: 21px;
}
.media-info-score .media-info-star-wrapper .review-stars {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: auto;
}
.media-info-score .media-info-score-content, .media-info-score .media-info-star-wrapper {
    display: inline-block;
    vertical-align: top;
    height: 36px;
}
.media-info-score .media-info-score-content {
    margin: 0 7px 0 0;
    text-align: right;
    color: #ffa726;
    font-size: 36px;
    line-height: 36px;
}
.media-info-score .media-info-score-content, .media-info-score .media-info-star-wrapper {
    display: inline-block;
    vertical-align: top;
    height: 36px;
}
.media-info-score {
    white-space: nowrap;
}
.media-info-score-wrp {
    float: right;
    padding-top: 26px;
}
.media-info-count .media-info-count-item.media-info-count-item-review {
    border-right-color: rgba(0,0,0,0);
    width: 76px;
}
.media-info-count .media-info-count-item {
    display: inline-block;
    width: 96px;
    border-right: 1px solid #fff;
    text-indent: 14px;
    height: 34px;
}
.media-info-count .media-info-count-item em {
    padding-top: 6px;
    line-height: 17px;
    font-style: normal;
    font-weight: 700;
}
.media-info-count .media-info-count-item * {
    color: #fff;
    display: block;
}
.media-info-count .media-info-count-item span {
    line-height: 12px;
}
.media-info-count .media-info-count-item.media-info-count-item-play {
    width: 76px;
    text-indent: 0;
}
.media-info-count {
    font-size: 12px;
    color: #222;
    padding-top: 30px;
    line-height: 1;
    float: left;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-datas {
    height: 60px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title .media-tag {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 20px;
    padding: 0 4px;
    line-height: 20px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title .media-tag:last-child {
    margin-right: 0;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title .media-tag {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 20px;
    padding: 0 4px;
    line-height: 20px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title .media-tags {
    opacity: 0;
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title .media-info-title-t {
    display: inline-block;
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r .media-info-title {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.media-info-wrp .media-info-content .media-info-inner .media-info-r {
    margin-left: 250px;
    margin-right: 58px;
}
.media-info-wrp .media-info-content .media-info-inner .media-preview .tag-exclusive {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/icons.png) -1062px -1506px no-repeat;
    width: 85px;
    height: 65px;
    position: absolute;
    top: -35px;
    left: 7px;
}
.media-info-wrp .media-info-content .media-info-inner .media-preview img {
    width: 225px;
    height: 300px;
    display: block;
    border-radius: 4px;
}
.common-lazy-img {
    background: url(//s1.hdslb.com/bfs/static/review/media/asserts/img_loading.png) 50% no-repeat;
    background-size: 50px;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.media-info-wrp .media-info-content .media-info-inner .media-preview {
    float: left;
    width: 233px;
    height: 308px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 4px solid #fff;
    border-radius: 8px;
}
.media-info-wrp .media-info-content .media-info-inner {
    padding: 44px 0 38px;
}
.media-info-wrp .media-info-content {
    position: relative;
    width: 1280px;
    margin: 0 auto;
    z-index: 101;
}
.media-info-wrp .media-info-content {
    width: 1100px;
}
.bangumi-info-blurbg-wrapper .bangumi-info-blurbg {
    position: absolute;
    background-size: cover;
    background-position: 50%;
    width: 110%;
    min-width: 1120px;
    height: 496px;
    top: 50%;
    left: 50%;
    margin: -260px -55%;
    z-index: 10;
    background-repeat: no-repeat;
    -webkit-filter: blur(40px);
    -moz-filter: blur(40px);
    -ms-filter: blur(40px);
    filter: blur(40px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10,MakeShadow=false);
}
element.style {
    background-image: url(//i0.hdslb.com/bfs/bangumi/a79e331….jpg@260w_350h.webp);
}
// .bangumi-info-blurbg-wrapper:before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0,0,0,.3);
//     filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr=rgba(72,0,0,0),0,endColorstr=rgba(72,0,0,0),0);
//     position: absolute;
//     top: 50px;
//     left: 0;
// }
.bangumi-info-blurbg-wrapper {
    height: 558px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.media-info-wrp {
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
