import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/main/main'
import mine from '../views/mine/mine'
import telphone from '../views/telphone/telphone'
import messages from '../views/messages/messages'
import notice from '../views/notice/notice'
import menology from '../views/menology/menology'
import report from '../views/report/report'
import timeTable from '../views/timeTable/timeTable'
import news from '../views/news/news'
import vacate from '../views/vacate/vacate'
import more from '../views/more/more'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/telphone',
      name: 'telphone',
      component: telphone
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/menology',
      name: 'menology',
      component: menology
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/timeTable',
      name: 'timeTable',
      component: timeTable
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/vacate',
      name: 'vacate',
      component: vacate
    },
    {
      path: '/more',
      name: 'more',
      component: more
    }


  ]
})
