<template>
  <div class="content">
    {{ msg }}
    <input type="button" value="click me" @click="handleClick" />
    <input type="button" value="click me now" @click="handleClickNow" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this is app with vue",
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
    console.log(this.msg)
  },
  created() {
    console.log(this.msg)
    this.msg = "i will change"
  },
  mounted() {
    console.log("mounted")
  },
  methods: {
    handleClick: (e) => {
      console.log(this)
    },
    handleClickNow() {
      console.log(this)
    },
  },
}
</script>

<style lang="less">
.content {
  color: red;
}
</style>
