<template lang='pug'>
  #app.h-full
    notifications
    router-view.h-full
</template>

<script>
import Notifications from './components/Notifications.vue';

export default {
  components: {
    Notifications
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  height: 100vh;
}
</style>
