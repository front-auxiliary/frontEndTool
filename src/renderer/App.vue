<template>
  <div id="app">
    <Hander>
      <router-view></router-view>
    </Hander>
    
  </div>
</template>

<script>
import Hander from 'ui/Hander'
  export default {
    name: 'my-project',
     components: { Hander },
  }
</script>

<style>
  /* CSS */
</style>
