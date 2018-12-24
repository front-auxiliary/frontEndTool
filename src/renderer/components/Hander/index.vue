<template>
  <div class="hander">
    <Menu width="150px" class="bar"  active-name="0">
      <MenuGroup title="总览">
        <MenuItem to="/" name="/">
          <Icon type="md-document"/>使用学习
         
        </MenuItem>
        <MenuItem to="/init" name="/init">
        <Icon type="md-document"/>初始化环境
         
        </MenuItem>
         
      </MenuGroup>

      <MenuGroup title="工具">
        <MenuItem to="/hosts" name="/hosts">
          <Icon type="md-document"/>hosts
        </MenuItem>
        <MenuItem to="/nginx" name="/nginx">
          <Icon type="md-chatbubbles"/>nginx
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="其他">
        <MenuItem to="/init-project" name="/init-project">
          <Icon type="md-heart"/>项目创建
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-leaf"/>性能检测
        </MenuItem>
      </MenuGroup>
    </Menu>
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <!-- <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
  </RadioGroup>-->
</template>

<script>
export default {
  data() {
    return {
      theme3: "light"
    };
  }
};
</script>
<style lang="scss">
.hander {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px auto;
  .bar {
    height: 100%;
  }
}
</style>

