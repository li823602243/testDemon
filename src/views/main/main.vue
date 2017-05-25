<template>
  <div>
   <Swiper></Swiper>
  <div>
    <flexbox :gutter="0">
      <flexbox-item >
      <router-link to="/notice"><img src="../../assets/images/mainimg/notice.png"></router-link>
      </flexbox-item>
      <flexbox-item >
       <router-link to="/menology"><img src="../../assets/images/mainimg/menology.png"></router-link>
      </flexbox-item>
      <flexbox-item >
      <router-link to="/report"><img src="../../assets/images/mainimg/results_list.png"></router-link>
      </flexbox-item>
    </flexbox>
     <flexbox :gutter="0">
      <flexbox-item :span="1/3">
      <router-link to="/timeTable"><img src="../../assets/images/mainimg/course_table.png"></router-link>
      </flexbox-item>
      <flexbox-item :span="2/3">
      <router-link to="/foo"><img src="../../assets/images/mainimg/changeweather.png"></router-link>
      </flexbox-item>
     </flexbox> 
     <flexbox :gutter="0">
     <flexbox-item >
     <router-link to="/news"><img src="../../assets/images/mainimg/news.png"></router-link>
     </flexbox-item>
     <flexbox-item >
     <router-link to="/vacate"><img src="../../assets/images/mainimg/holiday.png"></router-link>
     </flexbox-item>
     <flexbox-item>
      <router-link to="/more"><img src="../../assets/images/mainimg/more.png"></router-link>
     </flexbox-item>
      </flexbox> 
    <!--  <flexbox/>
     <flexbo/x-item><img src="#"/>1</div></flexbox-item>
     <flexbox-item><img src="#"//>2</div></flexbox-item>
     <flexbox-item><img src="#"/>3</div></flexbox-item>
        </flexbox>
    <flexbox/>
     <flexbo/x-item><img src="#"/>1</div></flexbox-item>
     <flexbox-item><img src="#"//>2</div></flexbox-item>
     <flexbox-item><img src="#"/>3</div></flexbox-item>
        </flexbox> -->
  </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'
import Swiper from '../../components/Swiper'
export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "应用");
  },
 components: {
   Swiper,
    Flexbox,
    FlexboxItem,
    Divider
  }
}
</script>
<style type="text/css">
 img{
 	width: 100%;
 	height: 100%;
 }
 .vux-flexbox-item{
 	height: 123px;
 }
</style>