const app = Vue.createApp({
    data: function()
    {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected: function(box)
        {
            if(box == "A")
            {
                this.boxASelected = !this.boxASelected;
            }
            else if(box == "B")
            {
                this.boxBSelected =  !this.boxBSelected;
            }
            else if(box == "C")
            {
                this.boxCSelected =  !this.boxCSelected;
            }
        }
    },
    computed: {
        boxAClasses: function()
        {
            return {active: this.boxASelected}
        },
    }
});
app.mount('#styling');