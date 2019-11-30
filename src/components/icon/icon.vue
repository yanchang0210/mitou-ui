<template>
  <svg
    v-if="icon"
    @click="handleClick"
    :class="classes"
    :style="styles">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'VisIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: '1em'
    }
  },
  computed: {
    styles () {
      return {
        fill: this.color,
        width: this.size,
        height: this.size
      }
    },
    classes () {
      return [
        'vis-icon'
      ]
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vis-icon
    display inline-flex
    align-items center
    justify-content center
</style>
