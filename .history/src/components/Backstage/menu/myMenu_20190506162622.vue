<template>
  <div style="display :inline-block;float: left;min-height: 720px;border-right: 1px gray solid;">
    <Row>
      <Col>
      <Menu theme="light">
        <MenuItem name="1">
        <div class="iview-logo">
          <img src="http://www.skylineglobe.cn/images/cbjz.jpg"
               width="100px"
               height="100%"
               class="iview-nav-img">
          <div class="head-padding">时空云平台</div>
        </div>
        </MenuItem>
        <Submenu :name="item.id"
                 v-for="item in MenuData"
                 :key="item.id"
                 v-if="item.pid === 0">
          <template slot="title">
            <div @click="bus(item)"
                 style="display:inline-block">
              <Icon type="ios-paper" />
              {{item.title}}
            </div>
          </template>
          <MenuItem :name="submenu.id"
                    v-for="submenu in MenuData"
                    :key="submenu.id"
                    v-if="submenu.pid !== 0 && submenu.pid === item.id"
                    @click.native="bus(submenu)">{{submenu.title}}</MenuItem>
        </Submenu>
      </Menu>
      </Col>
    </Row>
  </div>
</template>
<script>
import MenuData from ''
import bus from '../assets/eventBus.js'
import axios from 'axios'
export default {
  name: 'myMenu',
  data () {
    return {
      MenuData: MenuData.list
    }
  },
  mounted () {
    // this.init()
  },
  methods: {
    bus (data) {
      if (data.url !== '') {
        bus.$emit('bus', data)
        this.$router.push({ path: data.url })
        console.log(data.url)
      }
    }
  }

}
</script>
<style lang="less" scoped>
#myMenu {
  width: 20%;
  .ib();
}

.iview-logo {
  width: 200px;
  height: 100%;
  font-size: 16px;
  display: inline-block;
}
.iview-nav-img {
  /* padding: 6% 0; */
  padding-right: 4%;
  float: left;
}
.head-padding {
  display: inline-block;
  padding: 10% 0;
  font-weight: 700;
  font-size: 20px;
}
</style>
