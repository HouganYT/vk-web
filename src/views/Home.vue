<template lang='pug'>
.wrapper
  .main
    .flex.flex-col.items-center
      select.mb-4
        option Русский
        option English

      .font-bold.text-xl Название формы

      .flex.w-full
        .left.pr-2(class='w-1/2')
          v-input(label='Ваше имя' placeholder='Владимир' required)
        
        .right.pl-2(class='w-1/2')
          v-input(label='Ваша фамилия' placeholder='Хуган' required)

      v-input(label='E-Mail' placeholder='john.doe@example.com' required)
      v-input(label='Компания' placeholder='OOO Россия' required)
      v-input(label='Город' placeholder='Москва' required)
      v-input(label='Ваше сообщение' placeholder='А что за сообщение? Я не понял, я голосовать сюда пришёл' required area)
      
      button.send-button.bg-green-500.px-3.py-1.rounded-md.text-white.mt-4 Отправить
</template>

<script>
export default {
  name: 'Home'
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