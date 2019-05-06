<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/MySpace/MyTask">check</router-link>
  </div>
</template>

<script>
export default {
  name: 'BackstageIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
