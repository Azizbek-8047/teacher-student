<template>
  <div class="question-test">
    <h4>Multiple Test</h4>
    <div class="questions_question">
      <div class="create">
        <custom-input v-model="form.title" :placeholder="'Question ?'" />
        <div class="option">
          <custom-input v-model="form.optionA.title" :placeholder="'A'" />
          <input v-model="form.optionA.option" type="checkbox" />
        </div>
        <div class="option">
          <custom-input v-model="form.optionB.title" :placeholder="'B'" />
          <input v-model="form.optionB.option" type="checkbox" />
        </div>
        <div class="option">
          <custom-input v-model="form.optionC.title" :placeholder="'C'" />
          <input v-model="form.optionC.option" type="checkbox" />
        </div>
        <div class="option">
          <custom-input v-model="form.optionD.title" :placeholder="'D'" />
          <input v-model="form.optionD.option" type="checkbox" />
        </div>
        <button
          :disabled="
            !this.form.title ||
            !this.form.optionA.title ||
            !this.form.optionB.title ||
            !this.form.optionC.title ||
            !this.form.optionD.title ||
            (!this.form.optionA.option &&
              !this.form.optionB.option &&
              !this.form.optionC.option &&
              !this.form.optionD.option)
          "
          @click="createTest"
        >
          Enter Test
        </button>
      </div>
      <div class="test-list">
        <ul class="col-lg-2" v-for="el in list" :key="el.id">
          <h3> {{el.id}}: {{ el.title }} ?</h3>
          <li>
            <span>A.</span> {{ el.optionA.title }}
            <span
              ><img
                v-if="el.optionA.option == true"
                src="@/assets/img/true.png"
                alt="True" />
              <img
                v-if="el.optionA.option == false"
                src="@/assets/img/false.png"
                alt="False"
            /></span>
          </li>
          <li>
            <span>B.</span> {{ el.optionB.title }}
            <span
              ><img
                v-if="el.optionB.option == true"
                src="@/assets/img/true.png"
                alt="True" />
              <img
                v-if="el.optionB.option == false"
                src="@/assets/img/false.png"
                alt="False"
            /></span>
          </li>
          <li>
            <span>C.</span> {{ el.optionC.title }}
            <span>
              <img
                v-if="el.optionC.option == true"
                src="@/assets/img/true.png"
                alt="True"
              />
              <img
                v-if="el.optionC.option == false"
                src="@/assets/img/false.png"
                alt="False"
              />
            </span>
          </li>
          <li>
            <span>D.</span> {{ el.optionD.title }}
            <span>
              <img
                v-if="el.optionD.option == true"
                src="@/assets/img/true.png"
                alt="True"
              />
              <img
                v-if="el.optionD.option == false"
                src="@/assets/img/false.png"
                alt="False"
              />
            </span>
          </li>
        </ul>
      </div>
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
import CustomInput from "@/components/Custom-Input.vue";
import CustomButton from "@/components/Custom-Button.vue";
export default {
  components: {
    "custom-input": CustomInput,
    "custom-button": CustomButton,
  },
  data() {
    return {
      form: {
        title: "",
        optionA: { title: "", option: "" },
        optionB: { title: "", option: "" },
        optionC: { title: "", option: "" },
        optionD: { title: "", option: "" },
      },
      page: 1,
      limit: 4,
    };
  },
  methods: {
    createTest() {
      this.$store.state.question_multiple.push({
        id:
          this.testMultiple.length > 0
            ? this.testMultiple[this.testMultiple.length - 1].id + 1
            : 1,
        title: this.form.title,
        optionA: {
          title: this.form.optionA.title,
          option: this.form.optionA.option,
        },
        optionB: {
          title: this.form.optionB.title,
          option: this.form.optionB.option,
        },
        optionC: {
          title: this.form.optionC.title,
          option: this.form.optionC.option,
        },
        optionD: {
          title: this.form.optionD.title,
          option: this.form.optionD.option,
        },
      }),
        (this.form.title = ""),
        (this.form.optionA = { title: "", option: false }),
        (this.form.optionB = { title: "", option: false }),
        (this.form.optionC = { title: "", option: false }),
        (this.form.optionD = { title: "", option: false });
    },
    paginate(arg) {
      this.page = arg;
    },
  },
  computed: {
    ...mapGetters(["getMultiple", "getMultipleCount"]),
    testMultiple() {
      return this.$store.state.question_multiple
    },
    offset() {
      return (this.page - 1) * this.limit;
    },
    list() {
      return this.getMultiple.slice(this.offset, this.offset + this.limit);
    },
    pages() {
      return Math.ceil(this.getMultipleCount / this.limit);
    },
  },
};
</script>

<style>
</style>