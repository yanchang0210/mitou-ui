<template>
  <section class="vis-btn-group">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ButtonGroup'
}
</script>

<style lang="stylus" scoped>
  .vis-btn-group
    display inline-flex
</style>
