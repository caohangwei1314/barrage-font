<template>
    <div>
        <div data-v-4cbad597="" data-v-4f6e8112="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的硬币</span> <!----></div>
        <div class="coin">
            <p data-v-192370cc="" class="coin-rest-p">硬币余额:<i data-v-192370cc="" class="coin-num">{{params.balance}}</i></p>
        </div>
        <div class="recharge">
            <div class="recharge-title">
                <p data-v-56ef7126="" class="num-tip">硬币充值</p>
            </div>
            <div class="amount">
                <div class="amount-item">
                    <el-radio v-model="balance" label="6" border>6元</el-radio>
                    <el-radio v-model="balance" label="18" border> 18元</el-radio>
                    <el-radio v-model="balance" label="30" border> 30元</el-radio>
                    <el-radio v-model="balance" label="68" border> 68元</el-radio>
                </div>
                <div class="amount-item">
                    <el-radio v-model="balance" label="128" border>128元</el-radio>
                    <el-radio v-model="balance" label="198" border>198元</el-radio>
                    <el-radio v-model="balance" label="328" border>328元</el-radio>
                    <el-radio v-model="balance" label="648" border>648元</el-radio>
                </div>
                <div class="amount-item">注：1元等于1硬币</div>
                <div class="amount-item">
                    <el-button type="primary" @click="recharge()">充值</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.recharge{
    .recharge-title{
        margin-left: 27px;
    }
    .amount{
        padding:25px;
        .amount-item{
            margin-bottom: 27px;
        }
    }
}
.coin{
    padding:27px
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
.coin-num {
    font-size: 18px;
    font-weight: 700;
    margin-left: 20px;
    color: #00a1d7;
    font-family: MicrosoftYaHei;
}
.coin-rest-p {
    color: #222;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
}
</style>
<script>
import * as user from '@/api/user'
export default {
    data () {
        return {
            params: {
            },
            balance: 0
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            user.detail().then(result => {
                this.params = result.data
                this.params.avatar = this.GLOBAL.oss + this.params.avatar
            })
        },
        recharge () {
            if (this.balance <= 0) {
                this.$message({
                    type: 'error',
                    message: '请选择金额!'
                })
            } else {
                const data = {
                    balance: this.balance
                }
                user.updateBalance(data).then(result => {
                    if (result.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '充值成功!'
                        })
                        setTimeout(() => {
                            this.$router.go(0)
                        }, 1000)
                    } else {
                        this.$message({
                            type: 'error',
                            message: '充值失败!'
                        })
                    }
                })
            }
        }
    }
}
</script>
