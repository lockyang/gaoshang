<template lang="pug">
  div {{test}}
    div
      el-button(@click="$router.back()") back
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Test extends Vue {
  test: string = 'test'
}
</script>
<style lang="scss" scoped>

</style>


