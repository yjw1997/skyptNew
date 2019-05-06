<template>
  <div>

    <MyNav></MyNav>
  </div>
</template>
<script>
import MyNav from '../Backstage/menu/myNav'

export default {
  'name': 'myMenu',
  'components': {
    MyNav
  },
  mounted () {
    console.log(this.$store.getters.isShow)
  }
}
</script>
<style>
</style>
