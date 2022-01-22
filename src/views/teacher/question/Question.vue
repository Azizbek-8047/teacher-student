<template>
  <div class="question teacher_pages">
    <h1>Questions</h1>
    <div class="question_nav">
      <router-link :to="{ name: 'test' }">Test</router-link>
      <router-link :to="{ name: 'multiple-test' }">Multiple Test</router-link>
      <router-link :to="{ name: 'text-question' }">Questions</router-link>
    </div>
    <div class="question_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.question_nav {
  display: flex;
  justify-content: space-around;
}

.question_nav a {
  text-decoration: none;
  color: #000;
  padding: 15px;
  background: #0575e6;
  border-radius: 15px;
  color: #fff;
  width: calc(100% / 4);
  display: flex;
  justify-content: center;
  font-size: 22px;
  line-height: 27px;
}

.question_view {
  background: #fff;
  margin: 25px;
  border-radius: 30px;
  height: 690px;
}
</style>