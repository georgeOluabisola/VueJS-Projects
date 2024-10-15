const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: '',
      lastName: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput: function() {
      this.name = '';
    },
    outputFullname: function() {
      if(this.name === '')
      {
        return "";
      }
      return this.name + ' ' + 'bizo';
    },
  },
  computed: {
    fullName: function() {
      if(this.name === '' || this.lastNAme === "")
        {
          return "";
        }
        return this.name + ' ' + this.lastName;
    },

  },
  watch: {
    // name: function(newValue, oldValue)
    // {
    //   if(newValue == '')
    //   {
    //     this.fullName = "";
    //   }
    //   else{
    //     this.fullName = newValue + ' ' + "bizo";
    //   }
    // },

    counter: function(newValue)
    {
      if(newValue > 50)
      {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
