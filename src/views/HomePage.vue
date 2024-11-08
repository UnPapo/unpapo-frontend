<template>
  <div>
    <ion-label>Bem vindo: {{ $user.name }}</ion-label>
    <br>
    <button @click="logout"> Logout</button>
  </div>
</template>

<script>
export default {

  methods: {
    logout() {
      this.$store.dispatch('logout');
      window.location.href = '/';
    }
  }
}
</script>

<style lang="scss" scoped>

</style>