<script>
  import {RouterLink, RouterView} from 'vue-router'
  export default {
    components:{
        RouterLink,
    },
    data() {
      return {
        styleArr:[
          '/public/1.png','/public/2.png','/public/3.png','/public/4.png','/public/5.png','/public/6.png',
          '/public/12.png','/public/7.png','/public/8.png','/public/9.png','/public/10.png','/public/11.png',
          '/public/13.png','/public/1.png','/public/2.png','/public/3.png',
      ],
      };
    },
  }
  
  </script>
  
  <template>
    <div class="wf-content">
      <div class="wf-item" v-for="item in styleArr">
        <div class="item-container">
          <img :src="item" alt="">
          <input type="button" class="save-button" value="储存">
        </div>
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
.wf-content{
  column-count: 4;
  column-gap: 10px;
  width: 960px;
  margin: auto;
  margin-top: 10px;
}
.wf-item {
  display: inline-block; /* 让每个wf-item在同一行显示 */
  width: 100%; /* 设置wf-item的宽度为100%以充满列宽 */
}
.item-container {
  position: relative; /* 使用相对定位 */
  border-radius: 15px; /* 添加圆角边框 */
  overflow: hidden; /* 用于确保内容在圆角内部显示 */
}
.wf-item img{
  width: 100%;
  border-radius: 15px;
  height: auto; /* 根据宽度自动调整高度，以保持纵横比 */
  display: block;
}
.save-button{
  position: absolute; /* 使用绝对定位 */
  bottom: 10px; /* 距离底部10像素 */
  right: 10px; /* 距离右侧10像素 */
  background-color: rgba(184, 57, 57, 0.7); /* 背景颜色，半透明黑色 */
  color: white; /* 文字颜色 */
  border: none; /* 去掉按钮边框 */
  border-radius: 5px; /* 按钮的圆角边框 */
  padding: 5px 10px; /* 内边距 */
  cursor: pointer; /* 鼠标样式 */
  z-index: 1; /* 设置按钮的z-index以确保在图像上方 */
  opacity: 0; /* 初始时设置按钮透明度为0，按钮隐藏 */
  transition: opacity 0.3s; /* 添加渐变效果 */
}
.item-container:hover .save-button {
  opacity: 1; /* 当鼠标悬停在item-container上时，按钮显示 */
}
</style>
