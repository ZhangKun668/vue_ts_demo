<template>
  <div id="app">
    <router-transition>
      <router-view />
    </router-transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import routerTransition from "@/components/routerTransition/index";

@Component({
  name: "App",
  components: {
    routerTransition,
  }
})
export default class App extends Vue {

}
</script>