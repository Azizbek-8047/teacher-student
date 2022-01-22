<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="title"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  model: {
    event: "input",
    prop: "value",
  },
  props: {
    placeholder: {
      type: String,
      default() {
        return "Name";
      },
    },
    value: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
  },
  data() {
    return {
      title: "",
    };
  },
  watch: {
    value(newVAl) {
      this.title = newVAl;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
input {
  border: 1px solid #aaa;
  box-sizing: border-box;
  border-radius: 30px;
  margin: 15px;
  outline: none;
  padding: 10px;
  color: #000000;
}

input::placeholder {
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #aaa;
}
</style>