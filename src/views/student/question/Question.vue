<template>
  <div>
    <div class="student_question-nav">
      <router-link :to="{ name: 'student-test' }">Test</router-link>
      <router-link :to="{ name: 'student-multiple' }">Multiple Test</router-link>
      <router-link :to="{ name: 'student-text-question' }">Text Questions</router-link>
    </div>
    <div class="student_question-_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.student_question-nav {
  display: flex;
  justify-content: space-around;
  margin: 15px;
}

.student_question-nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  color: #fff;
  padding: 15px;
  border-radius: 30px;
  background: #0575e6;
  width: calc(100% / 3);
  margin: 15px;
  display: flex;
  justify-content: center;
}
</style>