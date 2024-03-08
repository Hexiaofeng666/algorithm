<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <table>
      <tr>
        <td v-for="item in arr" :key="item">{{ item }}</td>
      </tr>
    </table>
    <button @click="handleChange">delete</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      arr: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    handleChange() {
      // Vue2 不能检测以下数组变动的情况：
      // 直接通过索引设置元素的值，例如 vm.items[index] = newValue
      // 修改数组的长度，例如 vm.items.length = newLength
      // this.arr[2] += 100
      // this.$forceUpdate()
      this.$set(this.arr, 2, this.arr[2] + 100)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
