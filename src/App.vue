<template> 
  <div class="float-title1" :style="floattitle1Style" ref="floattitle1">
    <div class="icon-image"></div>
    
    <div v-for="item in menuItems" :key="item.text" :class="['t-front', { 'clicked': item.isClicked }]" @click="toggleState(item)">
      <RouterLink :to="item.to" tabindex="0" class="menu-link" :class="{ 'menu-link-clicked': item.isClicked }">
        {{ item.text }}</RouterLink>
      </div>
      
      <custom-input></custom-input>
      <icon-image></icon-image>
      <div class="icon-image">
        <img src="../../public/icon/5097961.png" alt="" style="max-width: 100%">
      </div>
    </div>
    <GlobalButton />
  <router-view></router-view>

</template>

<script>
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import {RouterLink, RouterView} from 'vue-router'
import CustomInput from './components/CustomInput.vue';
import Iconimage from './components/Iconimage.vue'
import GlobalButton from '@/components/icons/GlobalButton.vue';

export default {
 components:{
     RouterLink,
     RouterView,
     GlobalButton,
     'custom-input': CustomInput,
     'icon-image': Iconimage,
 },
 data() {
   return {
     
     menuItems: [
     { text: '首頁', to: '/front', isClicked: true, class:'not-clicked' },
     { text: '建立', to: '/build', isClicked: false, class:'not-clicked' },
     { text: '收藏', to: '/collect', isClicked: false, class:'not-clicked' },
     { text: '測試', to: '/test', isClicked: false, class:'not-clicked' },
     // 添加更多菜單項
   ],

   floattitle1Style: {
     position: 'static',
     top: '0'
   },
   initialTop: 0
   };
 },
 methods: {
   downloadImage(imageSrc, index) {
     // 在點擊下載鏈接時，瀏覽器會自動下載與鏈接中的圖片相對應的圖像
   },
   toggleState(item) {
     // 首先將所有項目的 isClicked 屬性設置為 false
     this.menuItems.forEach(item => {
     item.isClicked = false;
   });
     // 然後將被點擊的項目的 isClicked 屬性設置為 true
     item.isClicked = true;
   },

 handleScroll() {
   const scrollY = window.scrollY;
   if (scrollY > this.initialTop) {
     // 設置浮動列的樣式為固定位置
     this.floattitle1Style = {
       position: 'fixed',
       top: '0'
     };
   } else {
     // 恢復原始樣式
     this.floattitle1Style = {
       position: 'static',
       top: '25%'
     };
   }
 }
 },
 mounted() {
 this.$nextTick(() => {
   // 獲取 floatColumn 元素和初始位置
   this.floattitle1 = this.$refs.floattitle1;
   this.initialTop = this.floattitle1.getBoundingClientRect().top;
   
   // 添加滾動事件監聽器
   window.addEventListener('scroll', this.handleScroll);
 });
},
};

</script>

<style lang="scss" scoped>
.icon-image {
width: 35px; /* 設置圖像寬度 */
height: 35px; /* 設置圖像高度 */
/* color: white; */
border-radius: 50%; /* 使用50%的border-radius切成圓形 */
object-fit: cover; /* 保持圖像的縱橫比並填充整個容器 */
}
.RouterLink:focus+.t-front{
display: block;
}
.t-front{
width: 80px; /* 設置圖像寬度 */
height: 50px; /* 設置圖像高度 */
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;

}
:global(.menu-link) {
color: black; /* 設置初始鏈接文本顏色 */
text-decoration: none;
}

:global(.menu-link.menu-link-clicked) {
color: white; /* 設置點擊後的鏈接文本顏色 */
text-decoration: none;
}
.float-title1 a{
font-size: 13pt;
}
.clicked {
background-color: gray; /* 設置點擊後的背景顏色 */
color: white; /* 設置點擊後的文本顏色 */
&::before{
 color: black;
}
}

.float-title1{
/* position: fixed; */
 width: 100%;
 height: 100px;
 background-color: rgb(255, 255, 255);
 display: flex;
 justify-content: space-around;
 align-items: center;
 z-index: 2;
}

.search-t{
width: 35%;
height: 40%;
}
.search-i{
width: 100%;
height: 100%;
padding: 20px;
}
.search-bar {
background-color: #fff; /* 上方區域亮 */
padding: 20px;
text-align: center;
}

button {
background: red; /* 自定義關閉按鈕的樣式 */
color: white;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
}

</style>
