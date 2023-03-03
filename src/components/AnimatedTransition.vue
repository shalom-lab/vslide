<template>
  <transition :enter-active-class="enter ? 'animate__animated animate__' + enter : ''" :leave-active-class="leave ? 'animate__animated animate__animate__animated animate__' + leave : ''">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'eg-transition',
  props: {
    enter: { default: null },
    leave: { default: null }
  }
}
</script>