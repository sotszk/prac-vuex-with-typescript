<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <BasicForm :form="form" />
    <div>
      <p>{{ fullName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import BasicForm from "./components/BasicForm.vue";

export interface Form {
  lastName: string | null;
  firstName: string | null;
}

interface Data {
  form: Form;
}

export default Vue.extend({
  name: "app",
  components: {
    HelloWorld,
    BasicForm
  },
  data(): Data {
    return {
      form: {
        lastName: "",
        firstName: ""
      }
    };
  },
  computed: {
    fullName(): string {
      return `${this.form.lastName} ${this.form.firstName}`;
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
