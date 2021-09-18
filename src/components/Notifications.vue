<template lang='pug'>
  .notification-panel.pt-5
    .notification-bar(style='width: 250px')
      template(v-for='value in notifications.filter(v => v.show == true)')
        .mb-2.px-3.py-2.text-white.rounded-md.shadow-md(:class='value.error ? "bg-red-500" : "bg-blue-500"') {{ value.text }}
</template>

<script>
export default {
  mounted() {
    window.notify = (text, error = false) => {
      const obj = {
        text,
        error,
        show: true
      };

      setTimeout(() => obj.show = false, 5000);

      this.notifications.push(obj);
    }
  },
  data() {
    return {
      notifications: []
    }
  }
}
</script>

<style>
  .notification-panel {
    position: absolute;

    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>