<template lang='pug'>
.wrapper
  .main.px-4
    .flex.flex-col.items-center
      language-picker

      .font-bold.text-xl Название формы

      .flex.w-full.flex-wrap
        .left(class='w-full md:w-1/2 md:pr-2')
          v-input(label='Ваше имя' placeholder='Владимир' required :validate='/^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/')
        
        .right(class='w-full md:w-1/2 md:pl-2')
          v-input(label='Ваша фамилия' placeholder='Хуган' required :validate='/^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/')

      v-input(label='E-Mail' placeholder='john.doe@example.com' required :validate='/^[a-z][a-z0-9-_]*@[a-z0-9-_]*.[a-z0-9-_]{1,3}$/')
      v-input(label='Компания' placeholder='OOO Россия' required :validate='/^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/')
      v-input(label='Город' placeholder='Москва' required :validate='/^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/')
      v-input(label='Ваше сообщение' placeholder='А что за сообщение? Я не понял, я голосовать сюда пришёл' required area :validate='/^ООО|(?!.*(.)\\1{2})[a-zA-Z а-яА-Я]{5,29}$/')
      
      button.send-button.bg-green-500.px-3.py-1.rounded-md.text-white.mt-4 Отправить
</template>

<script>
import LanguagePicker from './../components/LanguagePicker.vue';

export default {
  name: 'Home',
  components: {
    LanguagePicker
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    width: 500px;
  }

  .send-button {
    width: 150px;
  }
}
</style>