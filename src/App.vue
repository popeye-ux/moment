<template>
  <RouterView/>
</template>

<script>
export default {
  data () {
    return {}
  },
  watch: {
    $route (to) {
      const nowTitle = to.meta.title || ''
      document.title = `${nowTitle} MOMENT`
    }
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/all.scss';
</style>
