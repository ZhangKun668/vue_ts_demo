<template>
  <div class="login page">I`m login page</div>
</template>

<style lang="scss" src="./assets/style.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "LoginPage",
  props: {},
  components: {},
})
export default class Login extends Vue {
  data = "";

  created () {
    
  }
};
</script>

<style>
</style>
