<template>
    <div>
        <div data-v-4cbad597="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的信息</span> <!----></div>
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
