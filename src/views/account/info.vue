<template>
    <div>
        <div data-v-4cbad597="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的信息</span> <!----></div>
        <div class="secuity-right-home">
            <div data-v-10e3258d="" data-v-35019306=""><div data-v-10e3258d="" class="index-info" style=""><span data-v-10e3258d="" class="user-vip-icon user-vip-icon-vip"></span> <div data-v-10e3258d="" class="home-head"><img data-v-10e3258d="" src="https://i2.hdslb.com/bfs/face/d528237706ce53263cc82e61dc39bac9ee57297f.jpg"> <a data-v-10e3258d="" href="//space.bilibili.com/13124563/" target="_blank" class="gotoSpace">个人空间</a></div> <div data-v-10e3258d="" class="home-right"><div data-v-10e3258d="" class="home-top-msg"><span data-v-10e3258d="" class="home-top-msg-name home-top-msg-name-color">怪我咯in</span> <span data-v-10e3258d="" class="home-user-spec">年度大会员</span> <span data-v-10e3258d="" class="home-userstatus">正式会员</span> <span data-v-10e3258d="" class="home-icon"><img data-v-10e3258d="" src="https://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png"></span></div> <div data-v-1b0fd912="" data-v-10e3258d="" class="home-top-level"><span data-v-1b0fd912="" class="home-top-level-all"><div data-v-1b0fd912="" class="home-top-progress-wrap"><span data-v-1b0fd912="" class="home-top-level-head home-top-level-head-active">LV5</span> <span data-v-1b0fd912="" class="home-top-level-up">
                 进度条
                 <span data-v-1b0fd912="" class="home-top-level-upgo" style="width: 39.61%;"></span></span> <div data-v-1b0fd912="" class="home-top-level-mask-warp"><span data-v-1b0fd912="" class="home-level-mask-icon"></span> <span data-v-1b0fd912="" class="home-level-mask-top"></span> <p data-v-1b0fd912="">
                 作为
                <i data-v-1b0fd912="" class="home-level-tips">
                            LV5
                     <!----></i>，你可以：
                </p> <p data-v-1b0fd912="">1、购买邀请码（1个/月）</p><p data-v-1b0fd912="">2、发射个性弹幕（彩色、高级、顶部、底部）</p><p data-v-1b0fd912="">3、参与视频互动（评论、添加tag）</p><p data-v-1b0fd912="">4、投稿成为偶像</p> <a data-v-1b0fd912="" href="https://www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3?id=7251c4ab69d44a8ebbbd276dea46d790" target="_blank">会员等级相关说明</a></div></div> <span data-v-1b0fd912="" class="home-top-level-number"><i data-v-1b0fd912="" class="now-num">11409</i> <i data-v-1b0fd912="" class="num-icon">/</i> <i data-v-1b0fd912="" class="max-num">28800</i></span>  </span></div> <div data-v-10e3258d="" class="home-top-bp"><a data-v-10e3258d="" href="/account/coin" class="coin-link"></a> <span data-v-10e3258d="" class="curren-b-num">1110</span></div></div> <!----></div> <div data-v-10e3258d="" class="loading-icon-box" style="display: none;"><div data-v-10e3258d="" class="loading-icon"></div></div>
            </div>
        </div>
        <div class="user-setting-warp"><div><form class="el-form clearfix" mode="[object Object]"><div class="el-form-item user-nick-name"><label class="el-form-item__label">昵称:</label><div class="el-form-item__content"><div class="el-input"><!----><!----><el-input v-model="params.nickName" placeholder="你的昵称"></el-input><!----><!----></div> <span class="nick-name-not">注：修改一次昵称需要消耗6个硬币</span><!----></div></div> <div class="el-form-item user-nick-rel-name"><label class="el-form-item__label">用户名:</label><div class="el-form-item__content"><span class="userinfo-username">bili_1855789493</span><!----></div></div> <div class="el-form-item user-my-sign"><label class="el-form-item__label">我的签名:</label><div class="el-form-item__content"><div class="el-textarea"><el-input
  type="textarea"
  :rows="2"
  placeholder="设置您的签名- ( ゜- ゜)つロ"
  v-model="params.description">
</el-input></div><!----></div></div> <div class="el-form-item user-my-sex"><label class="el-form-item__label">性别:</label>
        <el-radio-group v-model="params.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
            <el-radio :label="2">保密</el-radio>
        </el-radio-group>
        </div> <div class="el-form-item user-my-date"><label class="el-form-item__label">出生日期:</label><el-date-picker
      v-model="params.birthday"
      type="date"
      placeholder="选择日期">
    </el-date-picker></div>
    <div class="el-form-item user-my-btn">
        <div class="el-form-item__content">
            <div class="padding-dom"></div>
            <div class="user-my-btn-warp">
                <el-button type="primary">主要按钮</el-button>
            </div>
        </div>
    </div>
    </form></div></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            params: {
                nickName: '',
                description: '',
                sex: 0,
                birthday: ''
            }
        }
    }
}
</script>

<style lang="scss">
.user-my-btn .el-button--primary {
    width: 110px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #00a1d6!important;
}
.el-button--primary span {
    color: #FFF;
    border-color: #409EFF;
}
// .el-button--primary{
//     background: #00a1d6!important;
// }
.user-my-btn-warp {
    float: left;
    width: 789px;
    height: 36px;
    position: relative;
}
.user-setting-warp .padding-dom {
    width: 789px;
    height: 39px;
    border-bottom: 1px solid #e5e9ef;
    margin-bottom: 40px;
}
.el-radio-button__inner, .el-radio-group, .el-radio__input {
    line-height: 1;
    vertical-align: middle;
}
.el-radio-button, .el-radio-button__inner {
    position: relative;
    display: inline-block;
}
.el-radio-button__inner {
    white-space: nowrap;
    background: #fff;
    border: 1px solid #bfcbd9;
    border-left: 0;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 0;
}
.user-my-sex .el-radio-button__inner {
    margin-right: 20px;
    padding: 5px 8px;
    border: 1px solid #bfcbd9;
    border-radius: 5px!important;
    background: #f4f4f4;
    color: #717171;
}
.el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #bfcbd9;
    border-radius: 4px 0 0 4px;
    box-shadow: none!important;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    box-shadow: -1px 0 0 0 #20a0ff;
}
.user-setting-warp .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #22a1d6!important;
    border-color: #22a1d6!important;
}
.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
    left: -999px;
}
.el-radio-button, .el-radio-button__inner {
    position: relative;
    display: inline-block;
}
.el-radio-button__inner, .el-radio-group, .el-radio__input {
    line-height: 1;
    vertical-align: middle;
}
.el-radio-group {
    display: inline-block;
    font-size: 0;
}
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    width: 100%;
    color: #1f2d3d;
    background-color: #fff;
    background-image: none;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.user-my-sign .el-textarea, .user-my-sign .el-textarea .el-textarea__inner {
    float: left;
    width: 618px;
    height: 88px;
    resize: none;
}
.el-textarea {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
}
.user-my-sign .el-textarea, .user-my-sign .el-textarea .el-textarea__inner {
    float: left;
    width: 618px;
    height: 88px;
    resize: none;
}
.user-local, .user-my-aim, .user-my-btn, .user-my-date, .user-my-love, .user-my-sex, .user-my-sign, .user-nick-name, .user-nick-rel-name {
    float: left;
    width: 789px;
}
.userinfo-username {
    font-size: 14px;
    color: #898989;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
}
.el-form-item__label {
    width: 95px;
    text-align: right;
    margin-right: 20px;
    float: left;
    line-height: 30px;
    padding: 0;
}
.user-local, .user-my-aim, .user-my-btn, .user-my-date, .user-my-love, .user-my-sex, .user-my-sign, .user-nick-name, .user-nick-rel-name {
    float: left;
    width: 789px;
}
.el-breadcrumb:after, .el-breadcrumb:before, .el-button-group:after, .el-button-group:before, .el-form-item:after, .el-form-item:before, .el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}
.el-breadcrumb:after, .el-button-group:after, .el-form-item:after, .el-form-item__content:after {
    clear: both;
}
.nick-name-not {
    color: #aaa;
}
.el-input, .el-input__inner {
    width: 100%;
    display: inline-block;
}
.el-input__inner {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.user-nick-name .el-input, .user-nick-name .el-input__inner {
    float: left;
    width: 225px;
    height: 30px;
    margin-right: 40px;
}
.el-input, .el-input__inner {
    width: 100%;
    display: inline-block;
}
.el-input {
    position: relative;
    font-size: 14px;
}
.user-nick-name .el-input, .user-nick-name .el-input__inner {
    float: left;
    width: 225px;
    height: 30px;
    margin-right: 40px;
}
.el-breadcrumb:after, .el-breadcrumb:before, .el-button-group:after, .el-button-group:before, .el-form-item:after, .el-form-item:before, .el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}
.el-form-item__content {
    line-height: 36px;
    position: relative;
    font-size: 14px;
}
.el-form-item__content {
    line-height: 30px;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
}
.el-form-item__label {
    width: 95px;
    text-align: right;
    margin-right: 20px;
    float: left;
    line-height: 30px;
    padding: 0;
}
.el-breadcrumb:after, .el-breadcrumb:before, .el-button-group:after, .el-button-group:before, .el-form-item:after, .el-form-item:before, .el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}
.el-form-item {
    margin-bottom: 22px;
}
.user-local, .user-my-aim, .user-my-btn, .user-my-date, .user-my-love, .user-my-sex, .user-my-sign, .user-nick-name, .user-nick-rel-name {
    float: left;
    width: 789px;
}
.user-setting-warp {
    padding: 20px 20px 0;
    position: relative;
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
