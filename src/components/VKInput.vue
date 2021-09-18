<template lang='pug'>
.vk-input.w-full.py-1
  .flex
    .text-sm {{ label }}
    .text-sm.pl-1.text-red-500(v-if='required') *  

  v-component.px-2.py-1.w-full(:placeholder='placeholder' :is='area ? "textarea" : "input"')
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    area: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
input, textarea {
  @apply rounded-md bg-gray-200 px-2
}
</style>