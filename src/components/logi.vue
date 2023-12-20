
<template>
  
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <RouterLink :to="'/'" class="text-base font-semibold leading-6 text-gray-900"><span aria-hidden="true">&larr;</span>home</RouterLink>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-16 w-auto" src="../../public/snowman-1.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" v-model="userEmail" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" v-model="userPassword" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <button type="button" @click="CheckEmail" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <RouterLink :to="'sign'" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</RouterLink>
          <!-- <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a> -->
        </p>
      </div>
    </div>
  </template>
  
<script>
    import { RouterLink, RouterView } from 'vue-router';

    import { ref } from 'vue';

    export default {
      components: {},
      data() {
        return {
          // userEmail: '',
          // password: '',
          emailError: false,
          checkPassword: ''
        };
      },
      methods: {
  // 從 localStorage 獲取帳號和密碼
  CheckEmail() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    
    // 檢查是否存在
    if (email==this.userEmail && password==this.userPassword) {
      // 做一些處理，例如登錄

      // 如果登錄成功，導航到指定頁面
      this.$router.push({ name: 'front' }); // 使用路由名稱或路徑
    } else {
      // 沒有存儲的帳號和密碼，需要用戶進行註冊或登錄
      alert('用戶名或密碼錯誤');
      return "用戶名或密碼錯誤";
    }
  },

}

}

</script>

<style lang="scss" scoped>

</style>