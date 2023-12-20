<!-- collect.vue -->
<template>   
    <div class="wf-content">
      <div class="wf-item" v-for="(item, index) in styleArr" :key="index">
        <div class="item-container">
          <img :src="item" alt="">
          <a :href="item" :download="'image_' + index + '.png'" class="download-link" @click="downloadImage(item, index)">下載</a>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import {RouterLink, RouterView} from 'vue-router'
  export default {
    components:{
        RouterLink,
        RouterView,
    },
    data() {
      return {
        styleArr: [
          '/public/1.png', '/public/2.png', '/public/3.png', '/public/4.png',
          '/public/5.png', '/public/6.png', '/public/12.png', '/public/7.png',
          '/public/8.png', '/public/9.png', '/public/10.png', '/public/11.png',
          '/public/13.png',
        ],
      };
    },
    methods: {
      downloadImage(imageSrc, index) {
        // 在點擊下載鏈接時，瀏覽器會自動下載與鏈接中的圖片相對應的圖像
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
    /* 响应式设计根据屏幕宽度变化 */
    .wf-content {
      column-count: 4;
      column-gap: 10px;
      width: 80%;
      margin: auto;
      margin-top: 10px;
      z-index: 0;
      flex: 1;
    }
    
    .wf-item {
      display: inline-block;
      width: 100%;
  }
  
  .item-container {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .wf-item img {
    width: 100%;
    border-radius: 15px;
    height: auto;
    display: block;
    transition: filter 0.3s, opacity 0.3s; /* 添加過渡效果以平滑改變濾鏡和不透明度 */
  }
  
  .download-link {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .item-container:hover .download-link {
    opacity: 1;
  }
  .item-container:hover img {
    opacity: 0.3; /* 鼠標懸停時改變不透明度 */
  }
  @media screen and (max-width: 600px) {
    .wf-content {
      column-count: 1;
      width: 80%;
    }
  }
  
  @media screen and (min-width: 601px) and (max-width: 900px) {
    .wf-content {
      column-count: 2;
      width: 80%;
    }
  }
  </style>
  