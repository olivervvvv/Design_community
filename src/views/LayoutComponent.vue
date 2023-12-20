<template>
    <div>
        <!-- <div class="float-title1" :style="floattitle1Style" ref="floattitle1">
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
        </div> -->
        <router-view></router-view>
    </div>
</template>


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
    }
    
    :global(.menu-link.menu-link-clicked) {
    color: white; /* 設置點擊後的鏈接文本顏色 */
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
    