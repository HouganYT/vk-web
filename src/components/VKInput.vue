<template lang='pug'>
.vk-input.w-full.py-1
  .flex.flex-wrap.w-full.items-center
    .left.flex.pr-2(:class='isMobile ? "w-full" : "justify-end"' style='width: 100px;')
      .text-sm {{ label }}
      .text-sm.pl-1.text-red-500(v-if='required') *  

    .left.flex(:class='isMobile ? "w-full" : "auto"' style='')
      v-component.px-2.py-1.w-full(@input='updateVars' :placeholder='placeholder' :class='isErrored ? "errored" : ""' :is='area ? "textarea" : "input"')
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
    sync: {
      type: String
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
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 900
    });
  },
  methods: {
    updateVars(e) {
      this.value = e.target.value;

      this.$emit('update:sync', this.value);
    }
  },
  data() {
    return {
      value: '',

      isMobile: window.innerWidth < 900
    }
  }
}
</script>

<style lang='scss' scoped>
input, textarea {
  transition: all .2s;
  @apply rounded-md bg-gray-200 px-2;

  &:focus {
    background: rgba(229, 231, 235, 1) !important;
  }

  &.errored {
    @apply bg-red-200;
  }
}

.auto {
  width: calc(100% - 100px);
}
</style>