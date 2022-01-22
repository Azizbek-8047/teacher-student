import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/',
            component: () => import(
                "./App.vue"),
        },
        {
            path: '/student',
            name: 'student',
            component: () => import(
                "./views/student/Student.vue"),
                children: [
                    {
                        path: 'student-questions',
                        name: 'student-questions',
                        component: () => import ('./views/student/question/Question.vue'),
                        children: [
                            {
                                path: 'student-test',
                                name: 'student-test',
                                component: () => import('./views/student/question/Test')
                            },
                            {
                                path: 'student-multiple',
                                name: 'student-multiple',
                                component: () => import('./views/student/question/MultipleTest')
                            },
                            {
                                path: 'student-text-question',
                                name: 'student-text-question',
                                component: () => import('./views/student/question/TextQuestion')
                            },
                        ]
                    },
                    {
                        path: 'student-answer',
                        name: 'student-answer',
                        component: () => import ('./views/student/Answers.vue')
                    },
                    {
                        path: 'student-result',
                        name: 'student-result',
                        component: () => import ('./views/student/Result.vue')
                    },
                ]
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: () => import(
                "./views/teacher/Teacher.vue"),
            children: [
                {
                    path: 'qusetion',
                    name: 'qusetion',
                    component: () => import(
                        "./views/teacher/question/Question.vue"
                    ),
                    children: [
                        {
                            path: 'test',
                            name: 'test',
                            component: () => import("./views/teacher/question/Test.vue")
                        },
                        {
                            path: 'multiple-test',
                            name: 'multiple-test',
                            component: () => import("./views/teacher/question/MultipleTest")
                        },
                        {
                            path: 'text-question',
                            name: 'text-question',
                            component: () => import("./views/teacher/question/TextQuestion.vue")
                        },
                    ]
                },
                {
                    path: 'answers',
                    name: 'answers',
                    component: () => import(
                        "./views/teacher/Answers.vue"
                    )
                },
                {
                    path: 'result',
                    name: 'result',
                    component: () => import(
                        "./views/teacher/Result.vue"
                    )
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(
                "./views/LogIn.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.student) {
            next({
                name: 'login'
            })
        } else if (!store.teacher) {
            next({
                name: 'login'
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router