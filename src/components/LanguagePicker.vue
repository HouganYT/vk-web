<template lang='pug'>
.language-picker.mb-5
  template(v-if='isMobile')
    template(v-for='value in languages')
      button.text-sm.px-2.py-1.mx-2.rounded-md(@click='choosed = value' :class='choosed == value ? "bg-green-500 text-white" : ""') {{ value }}
  template(v-else)
    select.mb-4.bg-gray-200.px-2.py-1.rounded-md
      template(v-for='value in languages')
        option {{ value }}
</template>

<script>
export default {
  mounted(){
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 900
    });
  },
  data() {
    return {
      isMobile: window.innerWidth < 900,

      choosed: 'Русский',
      languages: [
        'Русский',
        'English'
      ]
    }
  }
}
</script>

<style>
  select {
    width: 120px;
  }
</style>