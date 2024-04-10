<template>
  <div class="page">
    <input ref="iref" type="text" v-if="visible">
    <p>{{ title }}</p>
    <button @click="updateTitle">Click</button>
  </div>
</template>

<script>
import { nextTick } from 'vue'
export default {
  data() {
      return {
        visible: false,
        title: 'This is a title.',
      }
  },
  methods: {
    updateTitle() {
      // this.title = 'change the title.';
      nextTick(() => {
        console.log(this.$refs.iref);
      });
      this.visible = true;
      nextTick(() => {
        console.log(this.$refs.iref);
      });
    }
  }
}
</script>
