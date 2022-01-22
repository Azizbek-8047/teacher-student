import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active_user: {},
        user_list: [{
            login: 'student',
            password: 'student',
            type: 'student'
        },
        {
            login: 'student-2',
            password: 'student-2',
            type: 'student-2'
        },
        {
            login: 'teacher',
            password: 'teacher',
            type: 'teacher'
        },
        ],
        question_test: [
            {
                id: 1,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
            {
                id: 2,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
            {
                id: 3,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
            {
                id: 4,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
            {
                id: 5,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
            {
                id: 6,
                title: "xdasxax",
                optionA: { title: "ocdhsoiuchsic", option: false },
                optionB: { title: "ocdhsoiuchsic", option: true },
                optionC: { title: "ocdhsoiuchsic", option: false },
                optionD: { title: "ocdhsoiuchsic", option: false },
            },
        ],
        question_multiple: [{
            id: 1,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: false },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: false },
            optionD: { title: "ocdhsoiuchsic", option: true },
        },
        {
            id: 2,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: false },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: true },
            optionD: { title: "ocdhsoiuchsic", option: false },
        },
        {
            id: 3,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: true },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: false },
            optionD: { title: "ocdhsoiuchsic", option: false },
        },
        {
            id: 4,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: false },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: false },
            optionD: { title: "ocdhsoiuchsic", option: true },
        },
        {
            id: 5,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: false },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: true },
            optionD: { title: "ocdhsoiuchsic", option: false },
        },
        {
            id: 6,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: true },
            optionB: { title: "ocdhsoiuchsic", option: false },
            optionC: { title: "ocdhsoiuchsic", option: false },
            optionD: { title: "ocdhsoiuchsic", option: true },
        },
        {
            id: 7,
            title: "xdasxax",
            optionA: { title: "ocdhsoiuchsic", option: true },
            optionB: { title: "ocdhsoiuchsic", option: true },
            optionC: { title: "ocdhsoiuchsic", option: true },
            optionD: { title: "ocdhsoiuchsic", option: false },
        }
        ],
        text_question: []
    },
    getters: {
        getActive(state) {
            return state.active_user
        },
        getTest(state) {
            return state.question_test
        },
        getTestCount(state) {
            return state.question_test.length
        },
        getMultiple(state) {
            return state.question_multiple
        },
        getMultipleCount(state) {
            return state.question_multiple.length
        },
        getTextQuestion(state) {
            return state.text_question
        },
        getTextQuestionCount(state) {
            return state.text_question.length
        }
    },
    mutations: {
        setActiveUser(state, payload) {
            state.active_user = payload
        }
    },
    actions: {
        checkUser({ commit, state }, { login, password }) {
            let activeUser = state.user_list.find(el => el.login == login && el.password == password) || {}
            commit('setActiveUser', activeUser)
            return activeUser.type
        }
    }
})

export default store