<template>
  <div>
    <button :disabled="disabled" @click="click">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btn: {
      type: [String, Number],
      default() {
        return "clicked";
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    click() {
      return this.$emit("click");
    },
  },
};
</script>

<style>
button {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 30px;
  margin: 15px;
  outline: none;
  padding: 10px;
  background: #0575e6;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
}
</style>