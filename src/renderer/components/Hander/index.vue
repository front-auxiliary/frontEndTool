<template>
  <div class="hander">
    <Menu 
     
      class="bar" 
      :theme="theme3" 
      active-name="1"
    >
      <MenuGroup title="总览">
        <MenuItem to="/" name="0">
          <Icon type="md-document"/>
          使用学习
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="工具">
        <MenuItem to="/hosts" name="1">
          <Icon type="md-document"/>
          hosts
        </MenuItem>
        <MenuItem  to="/nginx" name="2">
          <Icon type="md-chatbubbles"/>
          nginx
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="其他">
        <MenuItem to="/init-project" name="3">
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
  grid-template-columns: 500px auto;
  .bar {
    height: 100%;
  }
}
</style>

