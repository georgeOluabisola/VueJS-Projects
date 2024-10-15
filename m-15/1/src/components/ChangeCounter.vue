<template>
    <button @click="inc">
        Increment
    </button>

    <button @click="increase({value: 10})">
        Increase
    </button>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        methods: {
            // addOne(){
            //     this.$store.dispatch('increment');
            // }
            // ...mapActions(['increment', 'increase'])

            ...mapActions('numbers', {
                inc: 'increment',
                increase: 'increase'
            })
        }
    }
</script>