<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button type="button" @click="onClickCounter">+</button>
      {{ counterDouble }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    counterDouble() {
      return this.$store.getters["counter/double"];
    }
  },
  beforeMount() {
    // console.log(this.$store.state.counter.count);
  },
  methods: {
    onClickCounter(): void {
      this.$store.commit("counter/increment");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
