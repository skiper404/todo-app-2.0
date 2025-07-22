<template>
  <transition
    enter-active-class="transition-all duration-300"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <slot></slot>
  </transition>
</template>
