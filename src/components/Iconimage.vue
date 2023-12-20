
<template>
    <div class="icon-image ">
        <div>
          <img :src="imageSource" @click="toggleMessage" alt="" style="max-width: 100%">
          <div v-if="show" class="message-box" :style="messageboxStyle" ref="messagebox">
            <div v-for="(message, index) in messagebar" :key="index" class="message">
              <h3>{{ message.title }}</h3>
              <p>{{ message.textbar }}</p>
            </div>
            <button class="close-button" @click="toggleMessage">關閉</button>
          </div>
        </div>
      </div>
</template>

<script>
    export default{
        data(){
            return{
                imageSource: "../../public/icon/3582206.png",
                show: false,
                messagebar: [
                { title: "1", textbar: "loem dwdwd uwuw" },
                { title: "2", textbar: "2loem dwdloem dwd" },
                { title: "3", textbar: "2loem dwd kodwodkoo dkowwd" },
          // 可以添加更多的消息對象
                ],
                messageboxStyle:{
                    position: 'fixed',
                    top: '31%',
                    right:'2%',
                    width:'250px'
                },
                initialTop:2,
            }
        },
        methods: {
            toggleMessage() {
            this.show = !this.show; // 切換 show 變量的值
            },
            handleScroll() {
            const scrollY = window.scrollY;
            if (scrollY > this.initialTop) {
            // 設置浮動列的樣式為固定位置
            this.messageboxStyle = {
                position: 'fixed',
                top: '16.5%',
                width: '300px',
                height:'70%',
                right: '0'
                };
            } 
            else {
            // 恢復原始樣式
            this.messageboxStyle = {
            position: 'fixed',
            width: '300px',
            height:'70%',
            top: '31%',
            right: '0'
            
                };
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
      this.$nextTick(() => {
      // 獲取 floatColumn 元素和初始位置
      this.messagebox = this.$refs.messagebox;
      
    if (this.messagebox) {
      this.initialTop = this.messagebox.getBoundingClientRect().top;
    }

    // 添加滾動事件監聽器
    window.addEventListener('scroll', this.handleScroll);
    });
  },
}
</script>

<style lang="scss" scoped>
.message-box {
  position: fixed;
  width: 400px;
  top: 31%;
  height: 70%;
  right: 10px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  z-index: 2;
}
.close-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.message {
  display: flex;
  align-items: center;
}

.message h3 {
  margin-right: 10px;
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