<template>
  <div>
    <div class="host">
      <div class="host-bar">
        <Button @click="swidthNew">新建</Button>
        <div
          :class="{'every-host':true,'every-host-active':activePath == item.path}"
          v-for="(item,index) in hosts"
          :key="index"
          @click="everyHostClick(item)"
        >
          {{item.label}}
          <i-switch size="small" class="every-switch" @on-change="switchChange"/>
        </div>
      </div>
      <textarea
        class="host-text"
        v-model="defaultHost"
        @blur="textareaBlur"
        type="textarea"
        :rows="4"
        placeholder="Enter something..."
      />
    </div>

    <Modal
      width="200"
      v-model="openNew"
      footer-hide
      title="Common Modal dialog box title"
      @on-cancel="cancel"
    >
      <HostsNew @submit="newSubmit"/>
    </Modal>
  </div>
</template>
<script>
import HostsNew from "./new";
const fs = require("fs");
const path = require("path");

const template = path.resolve(__dirname + "data/host.data");
const dataDir = path.resolve(__dirname + "/data/");
const exec = require('child_process').exec
export default {
  components: {
    HostsNew
  },
  data() {
    return {
      defaultHost: "",
      openNew: false,
      hosts: [],

      activePath: "host.data"
    };
  },
  mounted() {
    let dataArr = fs.readdirSync(dataDir);
    let hosts = [].concat(this.hosts);
    dataArr.map((item, index) => {
      hosts.push({
        label: item.split(".data")[0],
        path: item
      });
    });

    this.hosts = [].concat(hosts);
    this.defaultHost = fs.readFileSync(
      path.resolve(__dirname + "/data/" + hosts[0].path),
      { encoding: "utf-8" }
    );
  },
  methods: {
    everyHostClick(item) {
      this.activePath = item.path;
      this.defaultHost = fs.readFileSync(
        path.resolve(__dirname + "/data/" + this.activePath),
        { encoding: "utf-8" }
      );
    },
    textareaBlur() {
      let dataPath = path.join(__dirname, "./data/" + this.activePath);
      fs.writeFileSync(dataPath, this.defaultHost, () => {
        console.log("文件生成成功");
      });
    },
    newSubmit(detail) {
      let arr = [].concat(this.hosts);
      arr.push({
        label: detail.name,
        path: detail.name + ".data"
      });
      let dataPath = path.join(__dirname, "./data/" + detail.name + ".data");
      fs.writeFileSync(dataPath, "#" + detail.name, () => {
        console.log("文件生成成功");
      });
      this.hosts = arr;
      this.swidthNew();
    },
    cancel() {
      this.swidthNew();
    },
    switchChange(event) {
      //  hosts
       console.log(event,"pppp")
       exec('rm -rf hosts', {cwd: '/private/etc'})
       exec('echo "'+this.defaultHost+'"> hosts', {cwd: '/private/etc'})
     
    },
    swidthNew() {
      this.openNew = !this.openNew;
    }
  }
};
</script>
<style lang="scss" >
.host {
  display: grid;
  grid-template-columns: 120px auto;
  .host-bar {
    background: #363d46;
    height: 100vh;
    padding-top: 10px;
    .every-switch {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
    .every-host {
      color: hsla(0, 0%, 100%, 0.7);
      padding: 10px;
      background: transparent;
      cursor: pointer;
      position: relative;
    }
    .every-host-active {
      color: #ffffff;

      padding: 10px;
      background: #000;
    }
  }
  .host-text {
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
    border: 0px;
  }
}
</style>
