<template>
  <div>
    <Form ref="formInline" :model="formInline">
      <FormItem label="名称">
        <Input type="text" v-model="formInline.name" placeholder="输入名称"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props:{

  },
  data() {
    return {
      formInline: {
        name: ""
      }
    };
  },
  methods: {
    handleSubmit(name) {
    
      if(!this.formInline.name){
        return ;
      }
      this.$emit('submit',this.formInline);
    }
  }
};
</script>