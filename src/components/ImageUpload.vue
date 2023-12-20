<template>
    <div class="imgcentent">
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="scaled-image" />
    </div>
    <input type="file" @change="handleFileUpload" accept="image/*" class="fileinput" />
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: null
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageUrl = reader.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
.imgcentent{
    /* position: absolute; */
    flex-direction: column;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 250px;
    height: 190px;
    background-color: azure;
}
  .scaled-image {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .fileinput{
    position: relative;
    top: 5px;
    left: 45px;
    height: 50px;
  } 
  </style>
  