<template>
  <div id="nav">
    <Menu mode="horizontal"
          theme="primary"
          active-name="1">
      <MenuItem name="1">
      <Icon type="ios-people" />
      <h3 style="display:inline-block">后台管理系统</h3>
      </MenuItem>
      <MenuItem name="2">
      <Input placeholder="Enter something..."
             style="width: 300px" />
      <Button>搜索</Button>
      </MenuItem>
      <Submenu name="3"
               style="float:right">
        <template slot="title">
          <img src="//t.cn/RCzsdCq"
               class="head-img">
          我
        </template>
        <MenuItem name="3-1">个人信息</MenuItem>
        <MenuItem name="3-2">修改密码</MenuItem>
      </Submenu>
      <MenuItem name="4"
                style="float:right">
      消息提示
      <Icon type="ios-mail-outline" />
      </MenuItem>
    </Menu>
    <br>

  </div>
</template>
<script>
export default {
  name: 'myNav',
  mounted () {
    this.$store.commit('show')
    console.log(this.$store.getters)
  }
}
</script>
<style scoped>
#nav {
  display: inline-block;
  width: 80%;
  height: 65px;
}
.head-img {
  width: 30px;
  height: 30px;
  margin: 15px;
  margin-right: 10px;
  border-radius: 50%;
  float: left;
}
</style>
