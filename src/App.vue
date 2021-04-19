<template>
  <div id="app">
      <div class="average">
        <Todo :avg="countAvg"/>
        평균: {{ countAvg }}
      </div>
      <div>
        <input @change="inputNum" :value="num" type="text">
        <div>
          <button @click="submit" class="btn">추가하기</button>
          <button @click="clear">클리어</button>
        </div>
      </div>
  </div>
</template>

<script>
import useCount from "@/components/useCount";
import Todo from "@/components/Todo";

export default {
  name: 'App',
  components: {
    Todo
  },
  setup() {
    
    return { ...useCount() }
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
