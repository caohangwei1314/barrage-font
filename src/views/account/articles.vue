<template>
    <div>
        <div data-v-4cbad597="" data-v-4f6e8112="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的评论</span> <!----></div>
        <div style="padding:27px;">
            <el-button @click="editArticles()" class="fr" type="primary" icon="el-icon-edit" style="margin-bottom:10px">编写评论</el-button>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="updateTime"
                label="更新日期"
                width="160">
                </el-table-column>
                <el-table-column
                prop="title"
                label="标题"
                width="150">
                </el-table-column>
                <el-table-column
                :formatter="formatStatus"
                prop="status"
                label="状态"
                width="120">
                </el-table-column>
                <el-table-column
                prop="totalPageviews"
                label="阅读量"
                width="120">
                </el-table-column>
                <el-table-column
                prop="totalLiked"
                label="点赞量"
                width="300">
                </el-table-column>
                <el-table-column
                prop="totalCoin"
                label="投币量"
                width="120">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleUpdate(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleted(scope.row)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import * as articles from '@/api/articles'
export default {
    created () {
        this.init()
    },
    methods: {
        init () {
            articles.userArticles().then(result => {
                this.tableData = result.data
            })
        },
        handleClick (row) {
            this.$router.push({ path: '/articles/detail?id=' + row.id })
        },
        handleUpdate (row) {
            this.$router.push({ path: '/account/articles/edit?option=update&id=' + row.id })
        },
        editArticles () {
            this.$router.push({ path: '/account/articles/edit?option=create' })
        },
        deleted (row) {
            articles.deleted(row.id).then(result => {
                this.$router.go(0)
            })
        },
        formatStatus (row, column) {
            switch (row.status) {
            case 0:
                return '待审核'
            case 1:
                return '审核通过'
            case 2:
                return '审核失败'
            }
        }
    },

    data () {
        return {
            tableData: [{
                updateTime: '2020-04-26 12:55:01',
                title: '一部原作漫画和动画都十分优秀的作品',
                status: 1,
                totalPageviews: 10,
                totalLiked: 5,
                totalCoin: 1
            }, {
                updateTime: '2020-04-26 08:33:22',
                title: '单身狗的快乐源泉，这碗狗粮我先干了！',
                status: 1,
                totalPageviews: 0,
                totalLiked: 0,
                totalCoin: 0
            }, {
                updateTime: '2020-04-26 08:33:21',
                title: '谨写给所有的热心观众：为什么辉夜第二季会远超你的想象与期待 (随时更新）',
                status: 1,
                totalPageviews: 0,
                totalLiked: 0,
                totalCoin: 0
            }, {
                updateTime: '2020-04-20 22:46:14',
                title: '一部令人惋惜的作品，一部效果不太好的粉丝向作品，一块瑕疵巨大的玉（3.22已更新）',
                status: 1,
                totalPageviews: 0,
                totalLiked: 0,
                totalCoin: 0
            }]
        }
    }
}
</script>

<style lang="scss">
.el-button--primary{
    i{
        color:#fff !important;
    }
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
