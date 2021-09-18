<template lang='pug'>
.vk-input.w-full.py-1
  .flex
    .text-sm {{ label }}
    .text-sm.pl-1.text-red-500(v-if='required') *  

  v-component.px-2.py-1.w-full(@input='(e) => value = e.target.value' :placeholder='placeholder' :class='isErrored ? "errored" : ""' :is='area ? "textarea" : "input"')
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
    validate: {
      type: RegExp
    },
    area: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isErrored() {
      if (!this.validate) {
        return false;
      }

      if (this.value.length == 0) {
        return false;
      }

      return !this.validate.test(this.value);
    }
  },
  methods: {
    test(a) {
      console.log(a)
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang='scss' scoped>
input, textarea {
  @apply rounded-md bg-gray-200 px-2;

  &.errored {
    @apply bg-red-200;
  }
}
</style>