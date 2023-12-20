import { defineStore } from "pinia";

export default defineStore("counter",{
    state:()=>({
        location:1
    }),
    getters:{
        locationInfo(state){
            return`現在位置${state.location}`
        }
    },
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(bum){
            this.location = num;
        }
    }

})

// useCounterStore.js

// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return { count: 0 }
//   },
//   // could also be defined as
//   // state: () => ({ count: 0 })
//   getters: {
//     double: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })