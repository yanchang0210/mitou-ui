<template>
  <button :class="classes" @click="handleClick">
    <icon
      class="icon"
      :icon="icon"
      :color="iconColor"
      :size="iconSize"
      v-if="icon && !loading"></icon>
    <icon class="icon icon-loading" v-if="loading" icon="Loading"></icon>
    <div class="content" v-if="showSlot">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'large',
      validator (val) {
        return ['small', 'large', 'normal'].includes(val)
      }
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (val) {
        return ['left', 'right'].includes(val)
      }
    },
    iconColor: {
      type: String
    },
    iconSize: {
      type: [String, Number]
    }
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    classes () {
      return [
        'vis-btn',
        `vis-btn-${this.type}`,
        {
          'icon-right': this.iconPosition === 'right',
          'icon-loading': this.loading,
          'icon-long': this.long
        }
      ]
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined
  },
  methods: {
    handleClick (event) {
      if (this.loading) return
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
btn-color($color = #fff, $bg = #fff, $borderColor = #fff)
  color $color
  background-color $bg
  border-color $borderColor
btn-size($height, $padding)
  height $height
  padding $padding
.vis-btn
  display flex
  line-height 1
  cursor pointer
  white-space nowrap
  height var(--btn-height-l)
  padding var(--btn-padding-l)
  font-size var(--font-size-l)
  color var(--color-white)
  background-color var(--dark-primary)
  outline none
  border none
  border-radius var(--btn-border-radius)
  &.icon-loading
    cursor not-allowed
  &:hover
    background-color var(--btn-hover-bg)
  &.vis-btn-default
    color red
    // btn-color()
  .icon
    order 1
    margin 0 0.2em 0 0
  .content
    order 2
  .icon-loading
    animation spin 1s infinite linear
  &.icon-right
    .icon
      order 2
      margin 0 0 0 0.2em
    .content
      order 1
  &.icon-long
    width 100%
    display flex
    justify-content center
    align-items center
@keyframes spin {
  0% {
    transform rotate(0deg)
  }
  100% {
    transform rotate(360deg)
  }
}
</style>
