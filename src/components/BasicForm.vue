<template>
  <form>
    <fieldset>
      <legend>{{ formTitle }}</legend>
      <div>
        <label>lastName:</label>
        <input type="text" v-model="form.lastName" />
      </div>

      <div>
        <label>firstName:</label>
        <input type="text" v-model="form.firstName" />
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    form: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped></style>
