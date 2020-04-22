<template>
    <div>
        <banner-container />
        <div class="wp">
            <div class="account-form">
                <div class="active">密码登陆</div>
                <div class="account-account">
                    <div><el-input v-model="login.account" placeholder="你的账号" @change="tipsLogin()" :class="{blur:control.account}"></el-input></div>
                </div>
                <div class="text clearfix"><p class="tips" v-if="control.account">请输入注册时用的邮箱或者手机号呀</p></div>
                <div class="account-password">
                    <div><el-input placeholder="密码" v-model="login.password" show-password @change="tipsPass()" :class="{blur:control.password}"></el-input></div>
                </div>
                <div class="text clearfix"><p class="tips" v-if="control.password" >喵，你没输入密码么？</p></div>
                <div class="account-btn">
                    <div class="login"><el-button type="primary" class=" btn" @click="userLogin()">登陆</el-button></div>
                    <div class="register"><el-button class=" btn">注册</el-button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bannerContainer from '@/components/common/BannerContainer'
import * as user from '@/api/user'
import { mapMutations } from 'vuex'
export default {
    data () {
        return {
            login: {
                account: '',
                password: ''
            },
            control: {
                account: false,
                password: false
            }
        }
    },
    components: {
        bannerContainer
    },
    methods: {
        ...mapMutations(['ALTER_USER_TOKEN']),
        tipsLogin () {
            if (this.login.account !== '') {
                this.control.account = false
            } else {
                this.control.account = true
            }
        },
        tipsPass () {
            if (this.login.password !== '') {
                this.control.password = false
            } else {
                this.control.password = true
            }
        },
        userLogin () {
            user.login(this.login).then(result => {
                if (result.code === 0) {
                    this.ALTER_USER_TOKEN(result.data)
                    this.$router.go(-1)
                }
            })
        }
    }
}
</script>

<style lang="scss">
.account-form{
    .btn{
        width: 184px;
    }
    .login{
        float: left;
    }
    .register{
        float: right;
    }
    .el-button--primary span {
        color: #FFF;
        border-color: #409EFF;
    }
    .blur{
        border: 1px solid #f66495;
    }
    width: 500px;
    margin: 0 auto;
    padding-top:50px;
    .text {
        margin: 6px 0;
        font-size: 12px;
        min-height: 20px;
        line-height: 20px;
        .tips {
            color: #f66495;
            float: left;
        }
    }
    .active{
        color: #02a7de;
        margin-bottom: 12px;
    }
}
</style>
