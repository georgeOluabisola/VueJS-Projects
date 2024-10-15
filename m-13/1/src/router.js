import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';

import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     redirect: '/teams'
        // },
        {
            path: '/teams',
            name: 'teams',
            meta: {needsAuth: true},
            components: {default: TeamsList, footer: TeamsFooter},
            // alias: '/',
            children:[
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter: (to, from, next) => {
                console.log(to, from);
                next();
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    // linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition)
        {
            return savedPosition;
        }

        return {left:0, top:0};
    }
});

router.beforeEach(function(to, from, next){
    console.log(to, from, "global");

    if(to.meta.needsAuth)
    {
        console.log("Needs Auth!");
        next();
    }

    // if(to.name === 'team-members')
    // {
    //     next();
    // }
    // else{
    //     next({
    //         name: 'team-members',
    //         params: {teamId: 't2'}
    //     });
    // }

    next();
});

export default router;