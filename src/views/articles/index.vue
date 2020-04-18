<template>
  <div>
    <banner-container />
    <nav-container />
    <div class="articles">
      <div v-for="item in items"
           :key="item.id">
        <articles-line :data="item"></articles-line>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.articles {
  padding: 56px 0;
}
</style>

<script>
import articlesLine from '@/components/common/ArticlesLine'
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
export default {
    data () {
        return {
            items: [
                {
                    id: '1',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/02/26/08163337e904da77c1712c8226618e77.png!article.cover',
                    title: '腾讯云IT风险管理通过国际核心标准考验 斩获多国最高安全资质',
                    createTime: '2020.02.12',
                    simpleDesc: '产业互联网发展步入全球化、系统化的时代，信息安全被赋予新的定义和范畴。'
                },
                {
                    id: '2',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/03/03/3d3e6a78c1ca5e54c1e3a284d48ad8e2.jpg!article.cover',
                    title: '助力疫情抗击，腾讯智慧医疗在行动',
                    createTime: '2020.02.11',
                    simpleDesc: '作为对抗疫情的主要手段，在医疗领域，腾讯智慧医疗，腾讯云，腾讯AI Lab等团队也采取了一系列应对措施，尽全力与社会共同抗击疫情。'
                },
                {
                    id: '3',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/02/12/ebf87fa5e771a48d0acd1e298243db88.png!article.cover',
                    title: '腾讯追加10亿，设立15亿元“战疫基金”',
                    createTime: '2020.02.07',
                    simpleDesc: '将分别投入在物资支援、技术支援、人员关怀、科研与医疗事业等领域。'
                },
                {
                    id: '4',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/02/14/677fdb85f40c534db1d0ffeb9c0a5fd2.png!article.cover',
                    title: '助力企业复工和师生远程教学，腾讯推出“云办公全家桶”',
                    createTime: '2020.02.07',
                    simpleDesc: '涵盖了企业微信、腾讯会议、QQ、腾讯文档、TAPD、乐享、CODING等多款在线办公协同产品。'
                },
                {
                    id: '5',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/02/07/5de2b957e1c2217398c1d464a146a97e.jpg!article.cover',
                    title: '腾讯设立2亿元资金池，发起“战疫开发者公益联盟”',
                    createTime: '2020.02.04',
                    simpleDesc: '为服务商和开发者提供资金和资源支持，帮助联盟成员为相关政府部门、医疗机构等快速开发疫情小程序。'
                },
                {
                    id: '6',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/01/26/189385492b9dd495846cf8816d42f495.jpg!article.cover',
                    title: '腾讯捐赠3亿人民币，开放产品及技术能力抗击肺炎疫情',
                    createTime: '2020.01.25',
                    simpleDesc: '面对汹涌的新型冠状病毒肺炎疫情，腾讯公司也希望能尽一份力量，从资金和产品技术方面提供更多协助，共同抗击疫情。'
                },
                {
                    id: '7',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/01/15/e7e52bd0bbc89da719147cc29da494e5.jpg!article.cover',
                    title: '乐高集团与腾讯续签战略合作 提供更多优质儿童数字玩乐体验',
                    createTime: '2020.01.15',
                    simpleDesc: '在为期两年的新合作中，双方将在视频、游戏、数字儿童安全等领域加深合作，同时探索在社交、知识产权以及企业社会责任等领域全新的合作可能。'
                },
                {
                    id: '8',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/01/19/731125ae5cbcaca868c9ef665658e3f7.jpg!article.cover',
                    title: '腾讯联合Science与清华大学举办青少年科学小会',
                    createTime: '2020.01.12',
                    simpleDesc: '第二份年度《青少年科学看点榜单》发布，揭晓了“天文学”是中国青少年最受关注的科学领域'
                },
                {
                    id: '9',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/01/09/6948111131e090941015951776adf346.jpg!article.cover',
                    title: '微信小程序迎来三周年，推出创新功能服务用户',
                    createTime: '2020.01.09',
                    simpleDesc: '2019年通过小程序产生的总交易金额达8,000亿人民币，3年间已形成一个庞大壮健的生态体系。'
                },
                {
                    id: '10',
                    image: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/01/06/63b0a5ec2147f2cad55af369d8ca1042.png!article.cover',
                    title: '2020年“科学探索奖”申报启动 首次开放港澳地区青年科学家申报',
                    createTime: '2020.01.02',
                    simpleDesc: '“科学探索奖”每年奖励50名优秀科研工作者，将连续5年为每位获奖者提供总计300万元人民币的资金资助。'
                }
            ]
        }
    },
    components: {
        articlesLine,
        bannerContainer,
        navContainer
    },
    methods: {
        init () {

        }
    },
    created () {
        this.init()
    }
}
</script>
