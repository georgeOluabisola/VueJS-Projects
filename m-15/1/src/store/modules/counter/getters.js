export default 
{
    testAuth(state, getters, rootState, rootGetters){
        console.log(state, getters, rootState, rootGetters);
        return rootState.isLoggedIn;
    },
    finalCounter(state, getters){
        console.log(getters);
        return  state.counter * 3;
    },
    normalizedCounter(state, getters)
    {
        console.log(state);
        const finalCounter = getters.finalCounter;

        if(finalCounter < 0)
        {
            return 0;
        }

        if(finalCounter > 100)
        {
            return 100;
        }

        return finalCounter;
    },
}