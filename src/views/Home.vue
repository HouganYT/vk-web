<template lang='pug'>
.wrapper
  .main.px-4(class='w-full md:w-10/12 lg:w-8/12')
    .flex.flex-col.items-center
      language-picker

      .font-bold.text-xl.py-4 {{ $t('form.header') }}

      template(v-for='line in form')
        .flex.w-full.flex-wrap.justify-between
        
          template(v-for='part in line')
            .left(:class='isMobile ? "mobile" : ""' :style='`width: ${line.length == 1 ? 100 : 96 / line.length}%`')
              v-input(:sync.sync='part.value' :label='$t(`form.${part.key}`)' :required='part.required' :validate='part.validate' :area='part.area')
    
      button.send-button.bg-green-500.px-3.py-1.rounded-md.text-white.mt-4(@click='send()') {{ $t('form.send')}}
</template>

<script>
import LanguagePicker from './../components/LanguagePicker.vue';

const REGEX = {
  email: /^[a-z][a-z0-9-_]*@[a-z0-9-_]*\.[a-z0-9-_]{1,3}$/,
  other: /^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/
};

export default {
  name: 'Home',
  components: {
    LanguagePicker
  },
  computed: {
    isDisabled() {
      return !!this.form.flat(Infinity).find(v => (v.required && !v.value) || (v.validate && !v.validate.test(v.value)));
    }
  },
  methods: {
    send() {
      if (this.isDisabled) {
        notify(this.$t('send.form'), true);
        return;
      }

      this.test_prev = !this.test_prev; 

      if (!this.test_prev) {
        notify(this.$t('send.error'), true);
        return;
      }

      notify(this.$t('send.ok'));
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 900
    });
  },
  data() {
    return {
      test_prev: false,

      isMobile: window.innerWidth < 900,
      form: [
        [{
          key: 'first-name',
          value: '',
          required: true,
          validate: REGEX.other
        }, {
          key: 'last-name',
          value: '',
          required: true,
          validate: REGEX.other
        }],[{
          key: 'email',
          value: '',
          required: true,
          validate: REGEX.email
        }],[{
          key: 'company',
          value: '',
          required: false
        }],[{
          key: 'country',
          value: '',
          required: true,
          validate: REGEX.other
        }], [{
          key: 'message',
          value: '',
          required: true,
          validate: REGEX.other,
          area: true
        }]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .send-button {
    width: 150px;
  }
}

button {
  &.disabled {
    opacity: .3;
    pointer-events: none;
    cursor: not-allowed;
  }
}

.mobile {
  width: 100% !important;
}
</style>