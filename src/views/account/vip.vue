<template>
    <div>
        <div data-v-4cbad597="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">大会员</span> <!----></div>
        <div id="reportVipName" class="big-name-warp report-scroll-module"><div class="big-head"><el-avatar :size="48" :src="userInfo.avatar"></el-avatar> </div> <div class="big-name-left"><div class="big-name-top"><span class="big-user-name big-user-pick-name">{{userInfo.nickName}}</span> <span v-if="userInfo.isVip" class="big-label">年度大会员</span></div> <div class="big-nane-bottom"><p v-if="!userInfo.isVip">普通用户</p><p v-if="userInfo.isVip">
        大会员有效期至2021-04-12
        <span class="big-name-record">
          自动续费管理 &gt;
          <div class="big-name-record-hover"><div class="big-name-record-hover-icon"></div> <p>当前是自动续费大会员</p> <p>下次扣费时间为2021-03-30</p></div></span></p></div><div class="big-member-btn" v-if="!userInfo.isVip" @click="dialogVisible = true"><i style="display: none;"></i>
      开通大会员
      <span class="voucher-tips-show" style="display: none;"></span></div><div class="big-member-btn" v-if="userInfo.isVip" @click="dialogVisible = true"><i style="display: none;"></i>
      续费大会员
      <span class="voucher-tips-show" style="display: none;"></span></div> <span class="big-gift-btn-home">赠送</span> <div id="bigMore" class="big-more-tool-btn"><i class="big-more-tool-item"></i> <i class="big-more-tool-item"></i> <i class="big-more-tool-item"></i> <div class="big-more-item-list" style="display: none;"><a target="_blank" href="//big.bilibili.com/pc/bigHistory" class="big-more-item-item"><span class="big-more-item-txt">查看开通记录</span></a> <a href="/account/big/voucher" class="big-more-item-item"><span class="big-more-item-txt">我的代金券</span></a> <a href="/account/big/myPackage" class="big-more-item-item"><span class="big-more-item-txt">卡券包</span></a></div></div></div> <!----> <div class="continuity-dialog-wrapper" style="display: none;"><div class="continuity-box"><div class="continuity-content"><div class="continuity-header">自动续费管理</div> <span class="continuity-close"></span> <div class="continuity-bottom"><ul data-v-d489e166="" class="tabs-wrapper"><li data-v-d489e166="" class="tab-normal-item active"><span data-v-d489e166="" class="tabs-normal-txt">大会员自动续期</span></li><li data-v-d489e166="" class="tab-normal-item tab-disable"><span data-v-d489e166="" class="tabs-normal-txt">电视大会员自动续期</span></li></ul> <div><div class="big-continuity-card-wrapper"><div class="big-continuity-card-item"><div class="big-continuity-card-name">连续包年首年</div> <div class="big-continuity-card-info"><div class="big-continuity-card-txt">预计扣费时间</div> <div class="big-continuity-card-txt">2021-03-30</div></div> <div class="big-continuity-card-info"><div class="big-continuity-card-txt">每次扣费金额</div> <div class="big-continuity-card-txt">148.00元</div></div> <div class="big-continuity-card-info"><div class="big-continuity-card-txt">扣费渠道</div> <div class="big-continuity-card-txt">苹果内购</div></div> <div class="big-continuity-card-txt">*扣费成功后大会员有效期增加366天*</div> <div class="big-continuity-card-btn-wrapper"><div class="big-continuity-card-btn">解约</div></div></div></div></div> <div style="display: none;"><div class="big-continuity-card-wrapper"></div></div></div></div></div></div> <div class="common-dialog-wrap" style="display: none;"><div class="common-dialog-box"><div class="common-dialog-content"><div class="dialog-close-icon"></div> <p class="common-title"></p> <p class="common-subtitle"></p> <div class="success-img"></div> <div class="close-btn btn-top">知道了</div></div></div></div> <!----> <div class="pay-dialog-wrapper" style="display: none;"><div class="pay-dialog-box"><div class="pay-dialog-content"><div class="pay-dialog-close-icon"></div> <p class="pay-dialog-title"></p>  <div class="pay-dialog-protocol" style="display: none;"><span class="pay-dialog-protocol-icon pay-dialog-protocol-icon-disable"></span> <span class="pay-dialog-protocol-txt">关注“哔哩哔哩大会员”官方账号</span></div> <div class="fail-img"></div> <div class="pay-bottom-btn"><span class="pay-left-btn pay-left-btn-alone">知道了</span> <!----></div></div></div></div></div>
      <el-dialog
        title="开通大会员"
        :visible.sync="dialogVisible"
        width="570px"
        :before-close="handleClose">
        <div class="bili-pay-box-wrapper pay-box-type-1 clearfixs">
            <div class="pay-for-money-item pay-for-money-item-active">
                <p class="pay-for-money-price">¥168/年<i class="pay-for-money-org-price" style="display: none;">¥68</i></p>
                <p class="pay-for-money-text">年度大会员</p>
            </div>
            <div class="pay-for-money-item">
                <p class="pay-for-money-price">¥68/季<i class="pay-for-money-org-price" style="display: none;">¥68</i></p>
                <p class="pay-for-money-text">季度大会员</p>
            </div>
            <div class="pay-for-money-item">
                <p class="pay-for-money-price">¥25/季<i class="pay-for-money-org-price" style="display: none;">¥68</i></p>
                <p class="pay-for-money-text">月度大会员</p>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
      <div id="reportVipPrivilege" class="big-privilege-warp report-scroll-module"><div id="reportVipPrivilegeMore" class="big-privilege-title report-wrap-module">
    大会员特权
    <!-- <a href="https://big.bilibili.com/pc/privilege" target="_blank" class="right-more-btn">
      更多
      <i class="m-arrow"></i></a> -->
      </div> <div id="clickPrivilegeReport" class="big-privilege-content report-wrap-module"><span target="_blank" class="big-privilege-item"><span class="privilege"><img src="../../assets/comic/suoluetu/cca929463895f8d2a5d65d41e0f69a608b711539.png"></span> <p class="privilege-text">免费看</p></span><span target="_blank" class="big-privilege-item"><span class="privilege"><img src="../../assets/comic/suoluetu/1870c718e3cd2a5625934d401838e67d738d4fcc.png"></span> <p class="privilege-text">超清看</p></span><span target="_blank" class="big-privilege-item"><span class="privilege"><img src="../../assets/comic/suoluetu/2dac1a2c649407dc8ce5f899f244d3aed557c458.png"></span> <p class="privilege-text">抢先看</p></span><span target="_blank" class="big-privilege-item"><span class="privilege"><img src="../../assets/comic/suoluetu/f50ed845a94ac63adaa28f47716965269f9a9bdc.png"></span> <p class="privilege-text">粉色昵称</p></span></div></div>
      <div id="reportVipAnime" class="big-watch-wrapper report-scroll-module" scrollshow="true"><div id="reportVipAnimeMore" class="big-watch-title report-wrap-module">
    番剧推荐
    <a href="/index" target="_blank" class="right-more-btn">
      更多
      <i class="m-arrow"></i>
    </a>
    </div>
    <div id="accountPgcAnime" class="member-list-flex-warp report-wrap-module">
        <a :href="'/anime?id=' + anime.id" target="_blank" class="member-list-item" v-for="anime in animes" :key="anime.id">
            <span class="member-list-img">
                <img width="142" height="190" :src="anime.image" lazy="loaded">
                <span class="member-list-video-num text-nowrap">{{anime.totalFollow}}人追番</span>
                <span class="member-list-exclusive-icon">独家</span>
            </span>
            <p class="member-list-item-text text-nowrap">{{anime.name}}</p>
            <p class="member-list-item-subtext text-nowrap">更新至第{{anime.updateSets}}话</p>
        </a>
    </div>
    </div>
    </div>
</template>

<script>
import * as user from '@/api/user'
import * as anime from '@/api/anime'
export default {
    data () {
        return {
            userInfo: {},
            animes: [],
            dialogVisible: false
        }
    },
    methods: {
        init () {
            user.detail().then(result => {
                this.userInfo = result.data
                this.userInfo.avatar = this.GLOBAL.oss + this.userInfo.avatar
            })
            anime.page(1, 4, 'update_time', 'desc').then(result => {
                this.animes = result.data.records
                for (let i = 0; i < this.animes.length; i++) {
                    this.animes[i].image = this.GLOBAL.oss + this.animes[i].image
                }
            })
        }
    },
    created () {
        this.init()
    }
}
</script>

<style lang="scss">
.pay-for-money-item {
    width:160px;
    float:left;
    margin:0 auto;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ccd0d7;
    padding: 1px;
    border-radius: 4px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 66px;
    margin-right: 10px;
    cursor: pointer;
}
.pay-box-type-1 {
    width: 570px;
}
.bili-pay-box-default {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 480px;
    padding: 0 30px;
    margin-bottom: 12px;
    -webkit-transition: height 0.3 ease-in-out;
    transition: height 0.3 ease-in-out;
    overflow: hidden;
}
.pay-for-money-bottom-text {
    margin-top: 8px;
    font-family: MicrosoftYaHei;
    font-size: 11px;
    color: #ccd0d7;
}
.pay-for-money-remark {
    margin-top: 8px;
    font-size: 12px;
    color: #99a2aa;
}
.pay-for-money-text {
    font-size: 12px;
    color: #99a2aa;
    text-align: center;
}
.pay-for-money-org-price {
    font-size: 12px;
    color: #99a2aa;
    text-decoration: line-through;
    vertical-align: middle;
}
.pay-for-money-price {
    margin-top: 10px;
    font-size: 16px;
    color: #222222;
    text-align: center;
}
.pay-for-money-item-active .pay-for-money-price {
    color: #00a1d6;
}
.pay-for-money-dis {
    position: absolute;
    top: -12px;
    right: -2px;
    background: #f25d8e;
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 100px;
    padding: 1px 4px;
    z-index: 100;
}
.pay-for-money-item-active {
    padding: 0px;
    border: 2px solid #00a1d6;
}
.pay-for-money-list {
    width: 520px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.bili-pay-txt-default {
    padding: 14px 0 20px 0;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #212121;
}
.bili-pay-txt-default {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bili-pay-tabs-item-span {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #99a2aa;
    padding-bottom: 8px;
    border-bottom: 2px solid #ffffff;
}
.bili-pay-tabs-item-span-active {
    color: #00a1d6;
    border-color: #00a1d6;
}
.bili-pay-tabs-item {
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 10px;
}
.bili-pay-tabs-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.bili-pay-box-default {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 480px;
    padding: 0 30px;
    margin-bottom: 12px;
    -webkit-transition: height 0.3 ease-in-out;
    transition: height 0.3 ease-in-out;
    overflow: hidden;
}
.bili-pay-msg-icon {
    display: block;
    width: 17px;
    height: 17px;
    position: absolute;
    top: 10px;
    left: 14.5px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA/1JREFUWAntWE1oE0EUnjdbSusvVDQb0bamrYJFPFT8QUFRPOhF8KCexNKDB+tf0kARUakHFZNK/QGLIBWqgoLgD4iCWhXRgx4UBRVtUkFIUtoi9m+T7Ixv1NUQZ9fdbaqXDYSZfe973/vydt7MbgjxPl4FvAp4FfAq4FXAQQXAAdY2lHMOqWhlkBNoJJxkgEKLLxTrtE1gASy44NSZ2klseKiTE74hNy+QogVq+OPrXJubOXUTZBaTPDE3wEYGn+WLFXgO+nqzOCf2IidgK2wiGljDdO0KLoEyGQ4rUyKzG7aByJwKjbD9hMItNRi/btjzx4IIThyv3EW43opilfwEdq4Tx+fNGeVaF2LLgfGlOI6PYH6ltjj5aegsNlk9inX1SZ6srmJp7QHhfDY2FAOiHLUicl3h1JlKNdkzdA3X6zKrBFa+VGtVta5lHiBmlhDLKTSooe6LVjGumq63NbCIjfDnYxLbFqhhLNtliAVK6/2heIeVWOH7a4XFNlWqa6UG0XBGX5fVWTteWzaRgZeNorIsne3CVTQTgOgAdJvdfdpUMDbSFkzWgttU9SCeALLEbm2M6WFDLKFkqy8Yu2SXSyo4GanYyDi//J3EZTNZCaAUOpnOA7iFnbbawmQcUsGMkH0ycKFsM4Kxx8i11g2fvOk4LHBD9i9ipBXGg7R4PJMnopWbCSPncJeZLMsjGpET2u5viu3I95sIzocV+pqvwNaQihWZOJ6YQLh0yfwfwWxqMyhfngKDKfJSAGMKvyvzyQUD6Td7iJGROLWp4VdDGGN7K8vllzYdEHiUCyr0nPNDtDdSVSdGp9zSAFCKQ4RAr1Myu/hUtONIlmefJyId98VJajdO4KSCfXvfd0+E4vkEoAUAbmLX3hNfxA84ITfDYlN9/uHjK/WRwdtORDs6cvvbAuVaRr+I63uFmRgzOwU46GuKtxj+RLTiFGekUVyjiCdKWcm66Q3vvhp+s1FaYTNw2e7uT2r54lXoPyweB81wduxqqGcn3r02gcUtbrner93pO1ltsmv8ZnQkWITBpqu6P9xzQFFgNS6Tn7f2N6GTmdoU34OiT4gY8aiaSWfv9rcHplpxOBZskE0Pxh9OKCldiAlvGDY3I4oOYlxExOKbyxLtKztvxeNasCCd0vi2DxPi6zzdiQ2qWSWy8uEdC+MT3DGBwRNufCqcK8Afjp3GplqCot/m2p3MfaF4s6IU1fjKJ1n+HTCmCucKwjeGl+rkaXW4ROS3FEgyFy+bzwh+/ACb3qRlPsNWMMGCELa/GMYl0oB/TW3B0/KLkQR/RIrS0jGt9V9cxqTQY++peTP19Gg9Ci9ilFzw743HC53D4/Mq4FXAq8CfFfgGNkFHxRkcCmAAAAAASUVORK5CYII=) no-repeat;
    background-size: 100% 100%;
}
.text-nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.bili-pay-message-wrapper {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 14.5px 0 40px;
    height: 40px;
    background: #fff1cf;
    border-bottom: 1px solid #fddfa3;
    border-top: 1px solid #fddfa3;
    font-size: 14px;
    color: #e78b1f;
    line-height: 38px;
    cursor: pointer;
}
.hide {
    display: none;
}
.member-list-item-subtext {
    text-align: left;
    margin-top: 8px;
    font-size: 12px;
    color: #99a2aa;
    line-height: 12px;
}
.text-nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.member-list-item-text {
    font-size: 14px;
    color: #222;
    line-height: 16px;
    text-align: left;
}
.member-list-exclusive-icon, .member-list-video-num {
    display: block;
    font-size: 12px;
    color: #fff;
    position: absolute;
}
.member-list-exclusive-icon {
    background: #fb7299;
    border-radius: 2px;
    text-align: center;
    padding: 1px 4px;
    top: 4px;
    right: 4px;
}
.text-nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.member-list-video-num {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.4)));
    background-image: linear-gradient(-180deg,transparent,rgba(0,0,0,.4));
    border-radius: 0 0 4px 4px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    left: 0;
    padding: 0 9px;
    bottom: 0;
}
.member-list-exclusive-icon, .member-list-video-num {
    display: block;
    font-size: 12px;
    color: #fff;
    position: absolute;
}
.member-list-img {
    display: inline-block;
    position: relative;
    width: 142px;
    height: 190px;
    background: #e5e9ef;
    margin-bottom: 10px;
    border-radius: 4px;
    overflow: hidden;
}
.member-list-item {
    display: inline-block;
    width: 142px;
    margin-right: 20px;
}
.member-list-flex-warp {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.m-arrow {
    position: absolute;
    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
    width: 18px;
    height: 22px;
    top: 1px;
    right: 0;
}
.right-more-btn {
    display: inline-block;
    position: absolute;
    top: 3px;
    right: 0;
    height: 22px;
    width: 40px;
    padding-right: 10px;
    border: 1px solid #ced3db;
    text-align: center;
    border-radius: 4px;
    line-height: 23px;
    color: #6d757a;
    cursor: pointer;
    font-size: 12px;
}
.big-watch-title {
    position: relative;
    font-size: 20px;
    color: #222;
    vertical-align: top;
    margin-bottom: 18px;
}
.big-watch-wrapper {
    position: relative;
    margin: 0 20px;
    padding: 20px 0;
    border-bottom: 1px solid #e5e9ef;
}
.privilege-text {
    text-align: center;
    font-size: 14px;
    color: #222;
    line-height: 14px;
}
.privilege img {
    width: 100%;
    height: 100%;
}
.privilege {
    display: inline-block;
    margin-left: 4.5px;
    width: 76px;
    height: 76px;
    position: relative;
}
.big-privilege-item {
    display: inline-block;
    width: 85px;
}
.big-privilege-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.m-arrow {
    position: absolute;
    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
    width: 18px;
    height: 22px;
    top: 1px;
    right: 0;
}
.right-more-btn {
    display: inline-block;
    position: absolute;
    top: 3px;
    right: 0;
    height: 22px;
    width: 40px;
    padding-right: 10px;
    border: 1px solid #ced3db;
    text-align: center;
    border-radius: 4px;
    line-height: 23px;
    color: #6d757a;
    cursor: pointer;
    font-size: 12px;
}
.big-privilege-title {
    position: relative;
    font-size: 20px;
    color: #222;
    vertical-align: top;
    margin-bottom: 18px;
}
.big-privilege-warp {
    position: relative;
    margin: 0 20px;
    padding: 20px 0;
    border-bottom: 1px solid #e5e9ef;
}
.big-gift-btn-home {
    display: block;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    color: #6d757a;
    cursor: pointer;
    line-height: 14px;
    padding: 8px 28px;
    position: absolute;
    top: 8px;
    right: 40px;
}
.voucher-tips-show {
    position: absolute;
    top: -20px;
    left: -130px;
    display: block;
    width: 120px;
    height: 56px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
}
.big-member-btn i {
    background: #f25d8e;
    border-radius: 2px;
    font-size: 12px;
    color: #fff;
    line-height: 12px;
    padding: 4px 6px;
    border-radius: 10px;
    position: absolute;
    right: -4px;
    top: -10px;
}
.big-member-btn {
    position: relative;
    background: #00a1d6;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    line-height: 14px;
    padding: 9px 8px;
    position: absolute;
    top: 8px;
    right: 136px;
}
.big-name-record-hover p {
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #6d757a;
    line-height: 20px;
}
.big-name-record-hover-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -19px;
    left: 24px;
    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -23px -850px no-repeat;
    z-index: 10;
}
.big-name-record-hover {
    display: none;
    position: absolute;
    top: 25px;
    left: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 186px;
    height: 64px;
    padding: 12px;
    border: 1px solid #e5e9ef;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.14);
    box-shadow: 0 2px 4px rgba(0,0,0,.14);
    background: #fff;
    border-radius: 4px;
    z-index: 100;
}
.big-name-record {
    color: #6d757a;
    margin-left: 12px;
    position: relative;
}
.big-nane-bottom p {
    font-size: 12px;
    color: #99a2aa;
    line-height: 12px;
}
.big-name-top, .big-nane-bottom {
    width: 420px;
    margin-top: 5px;
}
.big-nane-bottom {
    margin-top: 10px;
}
.big-label {
    background: #f25d8e;
    border-radius: 2px;
    font-size: 12px;
    color: #fff;
    line-height: 12px;
    padding: 0 4px;
    border-radius: 4px;
    margin-left: 8px;
}
.big-user-name {
    font-size: 16px;
    color: #222;
    line-height: 16px;
    vertical-align: text-bottom;
    font-weight: 700;
}
.big-user-pick-name {
    color: #fb7299;
}
.big-name-top, .big-nane-bottom {
    width: 420px;
    margin-top: 5px;
}
.big-name-left {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 722px;
    margin-left: 12px;
}
.big-head img {
    width: 100%;
    height: 100%;
}
.big-head {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}
.big-name-warp {
    margin: 0 20px;
    padding: 30px 0 20px;
    border-bottom: 1px solid #e5e9ef;
}
.security-right-title-text {
    float: left;
    margin: 15px 0 0 5px;
    color: #00a1d6;
    font-size: 14px;
    cursor: default;
}
.security-right-title-icon {
    float: left;
    width: 4px;
    height: 16px;
    margin-top: 18px;
    background-color: #00a1d6;
    border-radius: 4px;
}
.security-right-title {
    height: 50px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
}
</style>
