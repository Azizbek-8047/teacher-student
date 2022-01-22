<template>
  <div class="student-test student-wrapper">
    <h1>Multiple Test</h1>
    <div class="test-student-list row">
      <ul class="col-lg-2" v-for="el in list" :key="el.id">
        <h3>{{ el.id }}: {{ el.title }} ?</h3>
        <li>
          <span>A.</span> {{ el.optionA.title }} <input type="checkbox">
        </li>
        <li>
          <span>B.</span> {{ el.optionB.title }} <input type="checkbox">
        </li>
        <li>
          <span>C.</span> {{ el.optionC.title }} <input type="checkbox">
        </li>
        <li>
          <span>D.</span> {{ el.optionD.title }} <input type="checkbox">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.getters.getMultiple;
    },
  },
};
</script>

<style>

</style>