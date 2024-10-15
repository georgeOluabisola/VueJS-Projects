export default {
    increment(state){
        state.counter++;
    },
    decrement(state){
        state.counter--;
    },
    increase(state, payload)
    {
        console.log(state);
        state.counter = state.counter + payload.value;
    }
}