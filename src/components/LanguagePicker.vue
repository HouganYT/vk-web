<template lang='pug'>
.language-picker
  template(v-if='isMobile')
    template(v-for='(value, key) in languages')
      button.text-sm.px-2.py-1.mx-2.rounded-md(v-if='value.length > 2' @click='chooseLanguage(key)' :class='$root.$i18n.locale == key ? "bg-green-500 text-white" : ""') {{ value }}
  template(v-else)
    select.bg-gray-200.px-2.py-1.rounded-md(@change='(e) => chooseLanguage(e.target.value)')
      template(v-for='(value, key) in languages')
        option(v-if='value.length > 2') {{ value }}
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

      languages: {
        'en': 'English',
        'ru': 'Русский',
        'ar': 'عرب',

        'Русский': 'ru',
        'English': 'en',
        'عرب': 'ar'
      }
    }
  },
  methods: {
    chooseLanguage(language) {
      if (this.languages[language].length == 2) {
        language = this.languages[language];
      }

      this.$root.$i18n.locale = language;

      if (language === 'ar') {
        document.querySelector('body').setAttribute('dir', 'rtl');
      } else {
        document.querySelector('body').removeAttribute('dir');
      }
    }
  }
}
</script>

<style>
  select {
    width: 120px;
  }
</style>