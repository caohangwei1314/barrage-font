<template>
    <div>
        <div data-v-4cbad597="" data-v-4f6e8112="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的视频</span> <!----></div>
        <div>

        </div>
        <div style="padding:27px;">
            <el-button @click="goVideoEdit()" type="primary fr" style="margin-bottom:10px"><i class="el-icon-upload el-icon--right"></i>上传视频</el-button>
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
                label="视频标题"
                width="150">
                </el-table-column>
                <el-table-column
                :formatter="formatStatus"
                prop="status"
                label="状态"
                width="120">
                </el-table-column>
                <el-table-column
                prop="totalPlay"
                label="播放量"
                width="120">
                </el-table-column>
                <el-table-column
                prop="totalDanmaku"
                label="弹幕量"
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
                    <el-button @click="goVideUpdate(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleted(scope.row)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import * as contribution from '@/api/contribution'
export default {
    created () {
        this.init()
    },
    methods: {
        init () {
            contribution.userList().then(result => {
                this.tableData = result.data
            })
        },
        handleClick (row) {
            this.$router.push({ path: '/contribution/detail?id=' + row.id + '&video=' + row.videoUrl })
        },
        goVideoEdit () {
            this.$router.push({ path: '/account/video/edit?option=create' })
        },
        goVideUpdate (row) {
            this.$router.push({ path: '/account/video/edit?id=' + row.id + '&option=update' })
        },
        deleted (row) {
            contribution.deleted(row.id).then(result => {
                this.$router.push({ path: '/account/video' })
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
                title: '尝试制作一个超大的虾片',
                status: 2,
                totalPlay: 10,
                totalDanmaku: 5,
                totalCoin: 1
            }, {
                updateTime: '2020-04-26 08:33:22',
                title: '史上最强杀手(第三集)',
                status: 0,
                totalPlay: 0,
                totalDanmaku: 0,
                totalCoin: 0
            }, {
                updateTime: '2020-04-26 08:33:21',
                title: '史上最强杀手(第二集)',
                status: 1,
                totalPlay: 0,
                totalDanmaku: 0,
                totalCoin: 0
            }, {
                updateTime: '2020-04-20 22:46:14',
                title: '史上最强杀手(第一集)',
                status: 1,
                totalPlay: 0,
                totalDanmaku: 0,
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
