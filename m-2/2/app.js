const app = Vue.createApp({
    data:  function(){
        return {
            courseGoalA: '<h2></h2>Finish the course and learn Vue!</h2>',
            courseGoalB: 'Finish the course and learn Angaular!',
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal: function(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5)
            {
                return this.courseGoalA ;
            }
            else{
                return this.courseGoalB;
            }
        },
    }
}); 
app.mount('#user-goal');