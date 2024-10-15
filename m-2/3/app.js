const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods:{
    add: function()
    {
      this.counter += 1;
    },
    reduce: function()
    {
      this.counter -= 1;
    },
    setName: function(event, lastName)
    {
      this.name = event.target.value + " " + lastName
    },
    submitForm: function(event)
    {
      event.preventDefault();
      alert("Please enter");
    },
    confirmInput: function(event)
    {
      this.confirmedName = this.name;
    }

  }
});

app.mount('#events');
