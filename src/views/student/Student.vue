<template>
  <div class="student">
    <div class="student_nav">
      <router-link :to="{ name: 'student-questions' }">Questions</router-link>
      <router-link :to="{ name: 'student-answer' }">Answers</router-link>
      <router-link :to="{ name: 'student-result' }">Result</router-link>
    </div>
    <div class="student_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.student {
  display: flex;
  flex-direction: column;
}

.student_nav {
  display: flex;
  width: 90%;
  background: #0575e6;
  padding: 15px;
  border-radius: 0 0 100px 0;
}

.student_nav a {
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 15px 35px;
  margin: 0;
}

.student_view {
  margin: 25px auto;
  height: 85vh;
  width: 97%;
  background: #eee;
  border-radius: 30px;
}
</style>