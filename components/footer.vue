<template>
  <footer>
    <p class="statistics">
      <b>浏览量</b>
      <span>{{ statistics.pv_count }}</span>
      <b>访客数</b>
      <span>{{ statistics.visitor_count }}</span>
      <b>平均时长</b>
      <span>{{ statistics.avg_visit_time.substr(3) }}</span>
      <span class="hide-mobile">每半小时自动更新</span>
    </p>
    <p class="copyright">Copyright © 2018 - 前端大户 <span class="hide-mobile">Power by Nuxt </span> <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">鄂ICP备17003180号-1</a></p>
  </footer>
</template>

<script>
  import { baiduStatistics } from "../lib/api"

  export default {
    data() {
      return {
        statistics: {
          pv_count: 100,
          visitor_count: 100,
          ip_count: 100,
          avg_visit_time: '00.00.01',
        }
      }
    },
    async created(){
      let { obj } = await baiduStatistics();
      this.statistics = obj;
    }
  }
</script>

<style lang="scss">
  footer{
    height: 150px;
    line-height: 45px;
    text-align: center;
    padding: 30px 0;
    background: #000;
    .statistics {
      b {
        color: #999;
      }
      span {
        color: #666;
        padding: 0 15px 0 6px;
      }
    }
    .copyright {
      height: 45px;
      line-height: 45px;
      color: #fff;
      a {
        color: #666;
        text-decoration: none;
      }
    }
  }
</style>
