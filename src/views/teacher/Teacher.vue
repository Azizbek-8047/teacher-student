<template>
  <div class="teacher">
    <div class="teacher_nav">
      <router-link :to="{ name: 'qusetion' }">Questions</router-link>
      <router-link :to="{ name: 'answers' }">Answers</router-link>
      <router-link :to="{ name: 'result' }">Result</router-link>
    </div>
    <div class="teacher_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.teacher {
  display: flex;
}

.teacher_nav {
  display: flex;
  flex-direction: column;
  width: 202px;
  height: 100vh;
  background: #0575e6;
  padding: 50px;
}

.teacher_nav a {
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #ffffff;
  padding: 15px;
  margin: 0;
}

.teacher_view {
  margin: 15px 100px 15px 15px;
  background: #eee;
  width: 100%;
  border-radius: 30px;
}
</style>