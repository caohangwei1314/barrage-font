<template>
    <div>
        <div data-v-4cbad597="" data-v-4f6e8112="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">交易明细</span> <!----></div>
        <div class="coin-record">
            <div class="coin-title">硬币记录<i class="coin-title-info">您最近一周的变化情况</i></div>
            <div class="table-wrapper">
                <table class="table-normal">
                    <thead>
                        <tr>
                            <td class="table_1"><div>时间</div></td>
                            <td class="table_2"><div>变化</div></td>
                            <td class="table_3"><div>类型</div></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td><div>{{item.createTime}}</div></td>
                            <td><div>{{item.amount}}</div></td>
                            <td><div>{{item.transactionType === 0 ? '充值记录' : '打赏投币'}}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

i {
    font-style: normal;
}
.coin-record .coin-title-info {
    color: #aaa;
    font-weight: 400;
    margin-left: 15px;
}
.coin-record .coin-title {
    color: #222;
    font-weight: 700;
    margin-bottom: 20px;
}
.coin-record .table-normal tbody tr td {
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-left: 1px solid #ddd;
}
.coin-record .table-normal tbody tr td:first-child {
    border-left: none;
}
.coin-record .table-normal tbody tr {
    border-top: 1px solid #ddd;
}
.coin-record .table-normal tbody tr:nth-child(odd) {
    background: #fff;
}
.coin-record .table-normal tbody tr:first-child {
    border: none;
}
.coin-record .table-wrapper {
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-top: 10px;
    margin-bottom: 20px;
    overflow: hidden;
}
.coin-record{
    padding: 24px 20px;
    width: 789px;
}
.coin-record .table_1 {
    width: 36%;
}
.coin-record .table_2 {
    width: 21%;
}
.coin-record .table_3 {
    width: 43%;
}
.coin-record .table-normal thead tr td {
    text-align: center;
    background: #f5f5f5;
    height: 42px;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-weight: 700;
}
.coin-record .table-normal thead tr td:first-child {
    border-left: none;
}
.coin-record .table-normal {
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    table-layout: fixed;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
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
            items: {
            }
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            user.userTransaction().then(result => {
                this.items = result.data
            })
        }
    }
}
</script>
