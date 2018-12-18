<template>

  <div id="wrapper">
    <!-- <Hander/> -->
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <Button @click="btnClick">gggg----</Button>

  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import Hander from './Hander'
  import { Button, Table } from 'iview';
 const exec = require('child_process').exec
  export default {
    name: 'landing-page',
    components: { SystemInformation,Button,Hander },
    methods: {
      btnClick (link) {
        console.log('------', this.$electron)
         exec('mkdir 11', {cwd: '/Users/mac/workspace/krItem'})
        // this.$electron.shell.showItemInFolder('/')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  



</style>
