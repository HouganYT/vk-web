<template lang='pug'>
.wrapper
  .main.px-4
    .flex.flex-col.items-center
      language-picker

      .font-bold.text-xl Название формы

      .flex.w-full.flex-wrap
        .left(class='w-full md:w-1/2 md:pr-2')
          v-input(label='Ваше имя' placeholder='Владимир' required)
        
        .right(class='w-full md:w-1/2 md:pl-2')
          v-input(label='Ваша фамилия' placeholder='Хуган' required)

      v-input(label='E-Mail' placeholder='john.doe@example.com' required)
      v-input(label='Компания' placeholder='OOO Россия' required)
      v-input(label='Город' placeholder='Москва' required)
      v-input(label='Ваше сообщение' placeholder='А что за сообщение? Я не понял, я голосовать сюда пришёл' required area)
      
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