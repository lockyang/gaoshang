<template lang="pug">
  div Home
    div
      el-button(@click="$router.push('test')") to Test
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import * as Rx from 'rxjs'
// console.log(Rx)

@Component({

})
export default class Home extends Vue {
  list: string[] = []
  msg: string = 'hello world'

  mounted () {
    this.hello()
    this.bindEvent()
  }

  bindEvent () {
    let button = document.querySelector('#countBtn')
    if (button) {
      // this.$router.push('test')
      button.addEventListener('click', () => this.$router.push('test'))
    }
  }

  hello () {
    this.list.push('Hello world')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  color: #d;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
