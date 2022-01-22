<template>
  <div class="question-test">
    <h4>Text Questions</h4>
    <div class="create_question">
      <textarea placeholder="Enter Your Question..." v-model="question.question" cols="30" rows="10"></textarea>
      <custom-button
        @click="addQuestion"
        :disabled="!this.question.question"
        :btn="'Enter Question'"
      />
    </div>
    <div class="textquestion-view">
      <ul>
        <li v-for="item in list" :key="item.id">
          <span class="num" >{{ item.id }} </span> <span> {{ item.question }} ? </span>
        </li>
      </ul>
      <div class="pagination-btn">
        <custom-button
          v-for="btn in pages"
          :key="btn"
          @click="paginate(btn)"
          :btn="btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomButton from "@/components/Custom-Button.vue";
export default {
  components: {
    "custom-button": CustomButton,
  },
  data() {
    return {
      question: {
        question: "",
        answer: "",
      },
      page: 1,
      limit: 5,
    };
  },
  methods: {
    addQuestion() {
      this.textQuestion.push({
        question: this.question.question,
        id:
          this.textQuestion.length > 0
            ? this.textQuestion[this.textQuestion.length - 1].id + 1
            : 1,
      }),
        (this.question.question = "");
    },
    paginate(arg) {
      this.page = arg;
    },
  },
  computed: {
    ...mapGetters(["getTextQuestion", "getTextQuestionCount"]),
    textQuestion() {
      return this.$store.state.text_question;
    },
    offset() {
      return (this.page - 1) * this.limit;
    },
    list() {
      return this.getTextQuestion.slice(this.offset, this.offset + this.limit);
    },
    pages() {
      return Math.ceil(this.getTextQuestionCount / this.limit);
    },
  },
};
</script>

<style>
.question-test h4 {
  border: none;
  text-align: center;
}

.create_question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.create_question textarea {
  border-radius: 30px;
  resize: none;
  padding: 15px;
  width: 50%;
  height: 200px;
  outline: none;
}

.textquestion-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textquestion-view ul {
  list-style: none;
  width: 90%;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 280px;
}

.textquestion-view ul li {
  padding: 10px;
  margin: 5px;
  border: 1px solid #0575e6;
  width: 1350.390px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.textquestion-view ul li span {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #1d1929;
  text-overflow: " [..]";
  white-space: nowrap;
}
.textquestion-view ul li .num {
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  margin: 0 8px 0 0 ;
}

.pagination-btn {
  display: flex;
  justify-content: center;
}

.pagination-btn button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 5px;
}
</style>