<template>
  <ion-page>
  <div
    class="container d-flex flex-column align-items-center justify-content-center text-center"
  >
    <div class="image-wrapper">
      <img class="img-fluid" src="/unpaposemfundo.png" />
    </div>

    <div class="btn-group d-flex flex-column gap-2 align-items-center">
      <ion-button shape="round" size="large" class="register" href="register">
        Cadastre-se
      </ion-button>

      <ion-button shape="round" class="login" href="login">
        Entrar
      </ion-button>
    </div>
  </div>
  </ion-page>
</template>

<style scoped>
ion-button.register {
  --color: white;
  --background: #be97c6;
}

ion-button.login {
  --color: #2e294e;
  --background: white;
}
</style>
