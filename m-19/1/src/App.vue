<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <h2>{{ userName }}</h2>
    <h2>{{ computedUName }}</h2>
    <h2>{{ uName.value }}</h2>
    <h3>{{ age }}</h3>
    <!-- {{ setAge() }} -->
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="first Name" @input="setFirstName($event)">
      <input type="text" placeholder="last Name" @input="setLastName($event)">
      <br>
      <input type="text" placeholder="first Name" v-model="firstName">
      <br>
      <input type="text" placeholder="last Name" ref="lastNameInput">
      <button @click="setLastNameInput">set Name</button>
    </div>
  </section>
</template>

<script>
import {ref, reactive, isReactive, isRef, toRefs, computed, watch, provide} from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData: UserData,
  },
  setup(){
    const uName =  ref('Maximilian');
   const uAge = ref(31);

   const firstName = ref('');
   const lastName = ref('');
   const lastNameInput = ref(null);

   const user = reactive({
    name: 'Maximilian',
    age: 31,
   });


   provide('userAge', uAge);

   
   const computedUName = computed(function(){
    return firstName.value + " " + lastName.value;
   });

   watch([user, computedUName], function(newValues, oldValues){
      console.log('old age: ' + oldValues[0]);
      console.log('new age: ' + newValues[0]);
      console.log('old uname: ' + oldValues[1]);
      console.log('new uname: ' + newValues[1]);
   });

   function setNewAge(){
    user.age = 32;
    uName.value = "Get There!";
    uAge.value = 32;
   }

   function setLastNameInput(){
    lastName.value = lastNameInput.value.value;
   }

   function setFirstName(event){
      firstName.value = event.target.value;
   }
   function setLastName(event){
      lastName.value = event.target.value;
   }


   console.log(uAge, user);
   console.log(isRef(uAge));
   console.log(isReactive(user), user.age);

  //  setTimeout(() =>{
  //   user.name = 'Max';
  //   user.age = 'Age';
  //  }, 100);

   const userRefs = toRefs(user);


   return {
     user: user,
     uName: uName,
     userName: userRefs.name,
     computedUName: computedUName,
     age: userRefs.age,
     setAge: setNewAge,
     setFirstName: setFirstName,
     setLastName: setLastName,
     firstName: firstName,
     lastName: lastName,
     lastNameInput: lastNameInput,
     setLastNameInput: setLastNameInput,
   };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>