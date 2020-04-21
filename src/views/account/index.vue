<template>
    <div>
        <banner-container></banner-container>
        <div class="wp security_content">
            <div class="security-left">
                <span data-v-ee13a7d2="" class="security-title">个人中心</span>
                <ul data-v-ee13a7d2 class="security-ul">
                    <li data-v-ee13a7d2 class="security-list" @click="clickOn(0)" v-bind:class="{on:switchOn === 0}">
                        <i data-v-ee13a7d2="" class="security-icon icon-0"></i>
                        <span data-v-ee13a7d2="" class="security-nav-name">
                            首
                            <b style="width:28px; display:inline-block"></b>
                            页
                        </span>
                    </li>
                    <li data-v-ee13a7d2="" class="security-list" @click="clickOn(1)" v-bind:class="{on:switchOn === 1}">
                        <i data-v-ee13a7d2="" class="security-icon icon-1"></i>
                        <span data-v-ee13a7d2="" class="security-nav-name">
                            <span style="letter-spacing: 7px;">大会员</span>
                        </span>
                    </li>
                    <!-- <li @click="clickOn(2)" v-bind:class="{on:switchOn === 2}" data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-2"></i> <span data-v-ee13a7d2="" class="security-nav-name">会员积分</span></li> -->
                    <li @click="clickOn(2)" v-bind:class="{on:switchOn === 2}" data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-3"></i> <span data-v-ee13a7d2="" class="security-nav-name">我的信息</span></li>
                    <li @click="clickOn(3)" v-bind:class="{on:switchOn === 3}" data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-4"></i> <span data-v-ee13a7d2="" class="security-nav-name">我的头像</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-5"></i> <span data-v-ee13a7d2="" class="security-nav-name">我的勋章</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-6"></i> <span data-v-ee13a7d2="" class="security-nav-name">账号安全</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-7"></i> <span data-v-ee13a7d2="" class="security-nav-name">黑名单管理</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-8"></i> <span data-v-ee13a7d2="" class="security-nav-name">我的硬币</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-9"></i> <span data-v-ee13a7d2="" class="security-nav-name">我的记录</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-10"></i> <span data-v-ee13a7d2="" class="security-nav-name">实名认证</span></li>
                    <li data-v-ee13a7d2="" class="security-list"><i data-v-ee13a7d2="" class="security-icon icon-11"></i> <span data-v-ee13a7d2="" class="security-nav-name">邀请注册</span></li>
                </ul>
                <ul data-v-ee13a7d2="" id="securityOutLink" class="security-ul report-wrap-module"><li data-v-ee13a7d2="" class="security-list-jump"><a data-v-ee13a7d2="" href="//space.bilibili.com" target="_blank" class="security-list-link-jump">
                    个人空间
                    <i data-v-ee13a7d2="" class="security-list-jump-icon"></i></a></li><li data-v-ee13a7d2="" class="security-list-jump"><a data-v-ee13a7d2="" href="https://pay.bilibili.com/bb_balance.html" target="_blank" class="security-list-link-jump">
                    我的钱包
                    <i data-v-ee13a7d2="" class="security-list-jump-icon"></i></a></li><li data-v-ee13a7d2="" class="security-list-jump"><a data-v-ee13a7d2="" href="https://member.bilibili.com/v2#/home" target="_blank" class="security-list-link-jump">
                    创作中心
                    <i data-v-ee13a7d2="" class="security-list-jump-icon"></i></a></li><li data-v-ee13a7d2="" class="security-list-jump"><a data-v-ee13a7d2="" href="//link.bilibili.com/p/center/index" target="_blank" class="security-list-link-jump">
                    直播中心
                    <i data-v-ee13a7d2="" class="security-list-jump-icon"></i></a></li>
                </ul>
            </div>
            <div class="security-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.on .security-nav-name span {
    color: #fff !important;
}
.security_content {
    overflow: hidden;
    height: 100%;
    margin: 10px auto 100px;
    border: 1px solid #e1e2e5;
    box-shadow: 0 2px 4px rgba(0,0,0,.14);
    background: #fafafa;
    border-radius: 4px;
    .security-right {
        float: left;
        width: 829px;
        border-left: 1px solid #ddd;
        background: #fff;
        min-height: 890px!important;
        .secuity-right-home {
            padding: 50px 20px 0;
            width: 789px;
            .h-content-safe {
                width: 100%;
                overflow: hidden;
                .h-safe-list {
                    width: 360px;
                    float: left;
                    margin: 24px 22px 10px 0;
                    .h-safe-msg {
                        margin-left: 16px;
                        display: inline-block;
                        vertical-align: top;
                        .h-safe-a {
                            display: inline-block;
                            height: 24px;
                            line-height: 24px;
                            color: #00a1d6;
                            margin-left: 10px;
                        }
                        .h-safe-nobtn {
                            cursor: default;
                            background-color: #e5e9ef;
                            color: #abb4c1;
                            border-radius: 4px;
                            text-align: center;
                            display: inline-block;
                            width: 70px;
                            height: 24px;
                            line-height: 24px;
                        }
                        .h-safe-title {
                            font-size: 16px;
                            color: #222;
                            margin-bottom: 8px;
                        }
                        .h-safe-desc {
                            font-size: 12px;
                            color: #99a2aa;
                            margin-bottom: 8px;
                        }
                        .h-safe-btn {
                            cursor: pointer;
                            background-color: #22a1d6;
                            color: #fff;
                            border-radius: 4px;
                            text-align: center;
                            display: inline-block;
                            width: 70px;
                            height: 24px;
                            line-height: 24px;
                        }
                    }
                    .h-safe-icon {
                        width: 60px;
                        height: 60px;
                        border-radius: 60px;
                        background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                        display: inline-block;
                    }
                    .position-0-no {
                        background-position: -258px -2px;
                    }
                    .position-1 {
                        background-position: -386px -130px;
                    }
                    .position-2 {
                        background-position: -386px -258px;
                    }
                    .position-3-no {
                        background-position: -257px -386px;
                    }
                }
            }
            .home-safe {
                padding: 36px 0 34px;
                display: inline-block;
                position: relative;
                .go-secuirty {
                    position: absolute;
                    top: 38px;
                    width: 102px;
                    padding: 0 10px;
                    border-radius: 4px;
                    border: 1px solid #ced3db;
                    color: #6d757a;
                    right: 0;
                    height: 22px;
                    display: inline-block;
                    line-height: 20px;
                    font-size: 12px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    cursor: pointer;
                    .m-arrow {
                        top: 0;
                        vertical-align: middle;
                        background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                        background-position: -26px -726px;
                        width: 18px;
                        margin-left: 19px;
                        right: 0;
                        height: 22px;
                        display: inline-block;
                        position: absolute;
                    }
                }
                .h-reward-info {
                    font-size: 20px;
                    color: #222;
                    margin-right: 6px;
                    vertical-align: top;
                }
                .h-reward-icon {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                    background-position: -145px -146px;
                    margin-right: 6px;
                    margin-left: 10px;
                }
            }
            .home-daily-task-warp {
                padding: 36px 0;
                border-bottom: 1px solid #e5e9ef;
                position: relative;
                .home-dialiy-exp{
                    .home-dialy-exp-item {
                        display: inline-block;
                        width: 186px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        padding: 22px 0 0;
                        position: relative;
                        .re-exp-none {
                            font-size: 12px;
                            color: #99a2aa;
                            margin-top: 16px;
                            width: 100%;
                            text-align: center;
                        }
                        .h-line {
                            display: inline-block;
                            position: absolute;
                            top: 54px;
                            right: 0;
                            width: 1px;
                            height: 74px;
                            border-left: 1px solid #e5e9ef;
                        }
                        .re-exp-getexp {
                            width: 80px;
                            height: 20px;
                            border-radius: 4px;
                            background-color: #8a95a8;
                            color: #fff;
                            text-align: center;
                            line-height: 19px;
                            margin: 15px auto 0;
                        }
                        .re-exp-info {
                            font-size: 14px;
                            color: #222;
                            margin-top: 16px;
                            width: 100%;
                            text-align: center;
                        }
                        .home-dialy-exp-icon {
                            width: 72px;
                            height: 72px;
                            border-radius: 72px;
                            background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                            text-align: center;
                            line-height: 72px;
                            color: #fff;
                            margin: 0 auto;
                            .home-dialiy-exp-i-2 {
                                color: #fff;
                                font-size: 12px;
                            }
                            .home-dialiy-exp-i {
                                color: #fff;
                                font-size: 24px;
                                font-weight: 700;
                                font-style: normal;
                            }
                        }
                        .position-ok {
                            background-position: -252px -508px;
                        }
                        .position-rest {
                            background-position: -252px -636px;
                        }
                    }
                }
                .home-dialy-task-tips {
                    display: block;
                    font-size: 12px;
                    color: #99a2aa;
                    margin-right: 6px;
                    position: absolute;
                    top: 42px;
                    left: 140px;
                }
                .home-dialy-task-title {
                    font-size: 20px;
                    color: #222;
                    margin-right: 6px;
                    vertical-align: top;
                }
                .home-daily-task-icon {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                    background-position: -145px -18px;
                    margin-right: 6px;
                    margin-left: 10px;
                }
            }
            .index-info {
                border-bottom: 1px solid #e5e9ef;
                padding-bottom: 40px;
                position: relative;
                .home-right {
                    display: inline-block;
                    margin-left: 16px;
                    width: 684px;
                    .home-top-bp {
                        margin-top: 15px;
                        .coin-link {
                            display: inline-block;
                            width: 20px;
                            margin-right: 8px;
                            height: 20px;
                            background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                            background-position: -150px -470px;
                        }
                        .curren-b-num {
                            margin-right: 12px;
                            display: inline-block;
                            line-height: 20px;
                            font-size: 14px;
                            color: #222;
                            cursor: default;
                            vertical-align: top;
                            height: 20px;
                        }
                        .curren-b {
                            display: inline-block;
                            width: 20px;
                            margin-right: 8px;
                            height: 20px;
                            background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                            background-position: -150px -534px;
                        }
                    }
                    .home-top-level {
                        position: relative;
                        .home-top-level-all {
                            display: inline-block;
                            width: 684px;
                            margin-top: 10px;
                            .home-to-space {
                                right: 0;
                                padding-right: 10px;
                                position: absolute;
                                top: 8px;
                                width: 70px;
                                height: 22px;
                                display: inline-block;
                                border-radius: 4px;
                                border: 1px solid #ced3db;
                                color: #6d757a;
                                text-align: center;
                                cursor: pointer;
                                line-height: 24px;
                                font-size: 12px;
                                .m-arrow {
                                    position: absolute;
                                    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
                                    width: 18px;
                                    height: 22px;
                                    top: 2px;
                                    right: 0;
                                }
                            }
                            .home-to-update {
                                position: absolute;
                                top: 8px;
                                width: 70px;
                                height: 22px;
                                display: inline-block;
                                border-radius: 4px;
                                border: 1px solid #ced3db;
                                color: #6d757a;
                                text-align: center;
                                cursor: pointer;
                                line-height: 24px;
                                right: 90px;
                                line-height: 20px;
                                font-size: 12px;
                            }
                            .home-top-level-number {
                                height: 24px;
                                color: #99a2aa;
                                margin-left: 8px;
                                font-size: 12px;
                                line-height: 24px;
                                cursor: default;
                                i {
                                    font-style: normal;
                                }
                                .now-num {
                                    color: #222;
                                }
                                .num-icon {
                                    margin: 0 2px;
                                }
                            }
                            .home-top-progress-wrap {
                                display: inline-block;
                                position: relative;
                                .home-top-level-mask-warp {
                                    position: absolute;
                                    width: 260px;
                                    -webkit-box-sizing: border-box;
                                    box-sizing: border-box;
                                    padding: 20px;
                                    top: 33px;
                                    left: -15px;
                                    z-index: 999;
                                    background-color: #fff;
                                    border: 1px solid #e5e9ef;
                                    border-radius: 4px;
                                    font-size: 12px;
                                    color: #6d757a;
                                    line-height: 24px;
                                    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.14);
                                    box-shadow: 0 2px 4px rgba(0,0,0,.14);
                                    display: none;
                                    a {
                                        font-size: 12px;
                                        color: #00a1d6;
                                        float: right;
                                    }
                                    .home-level-tips {
                                        font-size: 18px;
                                        color: #222;
                                    }
                                    .home-level-mask-top {
                                        display: inline-block;
                                        width: 326px;
                                        height: 10px;
                                        position: absolute;
                                        top: -10px;
                                        left: 15px;
                                        background: transparent;
                                    }
                                    .home-level-mask-icon {
                                        position: absolute;
                                        width: 20px;
                                        height: 20px;
                                        top: -19px;
                                        left: 24px;
                                        background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -23px -850px no-repeat;
                                        z-index: 10;
                                    }
                                }
                                .home-top-level-up {
                                    width: 280px;
                                    height: 24px;
                                    line-height: 24px;
                                    background-color: #e5e9ef;
                                    margin-left: -15px;
                                    border-top-right-radius: 4px;
                                    border-bottom-right-radius: 4px;
                                    display: inline-block;
                                    position: relative;
                                    text-indent: -9999px;
                                    text-align: center;
                                    .home-top-level-upgo {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        background-color: #ff905a;
                                        width: 0;
                                        height: 24px;
                                        -webkit-transition: all .3s ease-in-out;
                                        transition: all .3s ease-in-out;
                                        -webkit-transition-delay: .3s;
                                        transition-delay: .3s;
                                        border-radius: 0 4px 4px 0;
                                    }
                                }
                                .home-top-level-head {
                                    width: 48px;
                                    height: 24px;
                                    font-weight: 700;
                                    color: #fff;
                                    padding-left: 10px;
                                    font-size: 12px;
                                    line-height: 24px;
                                    cursor: default;
                                    display: inline-block;
                                    background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
                                }
                                .home-top-level-head-active {
                                    background-position: -264px -852px;
                                }
                            }
                        }
                    }
                    .home-icon {
                        position: relative;
                        display: inline-block;
                        top: -5px;
                        vertical-align: top;
                        cursor: pointer;
                        img {
                            height: 36px;
                        }
                    }
                    .home-userstatus {
                        border: 1px solid #99a2aa;
                        margin: 0 8px;
                        color: #99a2aa;
                        border-radius: 4px;
                        font-size: 12px;
                        cursor: default;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        padding: 2px 4px;
                    }
                    .home-user-spec {
                        border: 1px solid #fb7299;
                        background-color: #fb7299;
                        color: #fff;
                        border-radius: 4px;
                        font-size: 12px;
                        display: inline-block;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        padding: 2px 4px;
                        cursor: pointer;
                    }
                    .home-top-msg-name-color {
                        color: #fb7299;
                    }
                }
                .home-head {
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    cursor: pointer;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                    .gotoSpace {
                        position: absolute;
                        text-align: center;
                        width: 64px;
                        height: 64px;
                        top: 0;
                        left: 0;
                        background-color: rgba(0,0,0,.66);
                        font-size: 12px;
                        color: #fff;
                        border-radius: 64px;
                        line-height: 64px;
                        cursor: pointer;
                        display: none;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .user-vip-icon-vip {
                    background-position: -150px -982px;
                }
            }
        }
    }
    .security-left {
        float: left;
        width: 150px;
        height: 100%;
        overflow: hidden;
        .security-ul {
            border-bottom: 1px solid #e1e2e5;
            .security-list-jump {
                width: 150px;
                height: 43px;
                border-bottom: 1px solid #e1e2e5;
                position: relative;
                .security-list-link-jump {
                    display: block;
                    height: 100%;
                    color: #222;
                    font-size: 16px;
                    text-align: center;
                    line-height: 43px;
                }
            }
        }
        .security-title {
            display: block;
            width: 150px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #99a2aa;
            cursor: default;
            border-bottom: 1px solid #e1e2e5;
        }
        .security-nav-name {
            margin-left: 12px;
            font-size: 14px;
            color: #222;
        }
        .security-icon{
            vertical-align: middle;
            display: inline-block;
            width: 18px;
            height: 36px;
            margin-left: 32px;
            background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png);
        }
        .icon-0 {
                background-position: -23px -15px!important;
        }
        .icon-1  {
            background-position: -23px -975px;
        }
        .icon-2 {
            background-position: -23px -1231px;
        }
        .icon-3 {
            background-position: -23px -80px;
        }
        .icon-4 {
            background-position: -23px -144px;
        }
        .icon-5 {
            background-position: -23px -207px;
        }
        .icon-6 {
            background-position: -23px -272px;
        }
        .icon-7 {
            background-position: -727px -237px;
        }
        .icon-8 {
            background-position: -23px -335px;
        }
        .icon-9 {
            background-position: -23px -398px;
        }
        .icon-10 {
            background-position: -23px -463px;
        }
        .icon-11 {
            background-position: -23px -592px;
        }
        .security-list {
            width: 150px;
            height: 48px;
            line-height: 48px;
        }
        .on {
            background-color: #00a1d7!important;
            .security-nav-name {
                color: #fff;
            }
        }
        .security-ul {
            border-bottom: 1px solid #e1e2e5;
        }
    }
}
</style>

<script>
import BannerContainer from '@/components/common/BannerContainer'
import { mapState, mapMutations } from 'vuex'
export default {
    data () {
        return {
        }
    },
    components: {
        BannerContainer
    },
    computed: {
        ...mapState(['switchOn'])
    },
    methods: {
        ...mapMutations(['ALTER_DEFAULT_SWITCH_ON']),
        clickOn (index) {
            this.ALTER_DEFAULT_SWITCH_ON(index)
            console.log(this.switchOn)
            switch (index) {
            case 0:
                this.$router.push({ path: '/account/home' })
                break
            case 1:
                this.$router.push({ path: '/account/vip' })
                break
            case 2:
                this.$router.push({ path: '/account/info' })
                break
            case 3:
                this.$router.push({ path: '/account/avatar' })
                break
            default:
                break
            }
        }
    },
    created () {
        console.log(this.$store.state.switchOn)
    }
}
</script>
