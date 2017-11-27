<template lang="pug">
  div(id="app")
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})

export default class App extends Vue {
  isCollapse: boolean = false
}
</script>
<style lang="scss" scoped>

</style>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
