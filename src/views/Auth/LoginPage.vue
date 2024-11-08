<template>
  <ion-page>
    <ion-button href="/" class="custom p-2" size="small"> Voltar</ion-button>
    <div class="container d-flex flex-column align-items-center justify-content-center text-center">
      <div class="image-wrapper">
        <img class="img-fluid" src="/unpaposemfundo.png" />
      </div>

      <div class="form-group w-75">
        <div class="d-flex flex-column">
          <ion-label class="text-start">Digite seu e-mail</ion-label>
          <ion-input v-model="form.email" shape="round" class="custom" aria-label="example@gmail.com"
            placeholder="example@gmail.com"></ion-input>
        </div>

        <div class="d-flex flex-column mt-3">
          <ion-label class="text-start">Digite sua senha</ion-label>
          <ion-input v-model="form.password" shape="round" class="custom" aria-label="Senha"
            placeholder="Senha"></ion-input>
        </div>

        <div class="mt-3 text-end">
          <span @click="showModal = true" class="text-white" style="font-size: 10px;">Esqueci a senha</span>
        </div>

        <ion-button @click="handleLogin" shape="round" class="custom mt-4"> Login</ion-button>
      </div>

      <ion-modal :is-open="showModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="showModal = false">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
            reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
            Eaque,
            dicta.
          </p>
        </ion-content>
      </ion-modal>

      <ion-alert
    :is-open="showAlert"
    header="Ops!"
    message="Usuário ou senha incorretos. Por favor, verifique e tente novamente."
    @didDismiss="showAlert = false"
  ></ion-alert>
    </div>
  </ion-page>
</template>

<script>
import auth from '@/api/auth.js';

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      showModal: false,
      showAlert: false,
    };
  },

  methods: {
    async handleLogin() {
      auth.login(this.form).then((response) => {
        this.$store.dispatch('login', response.data);
        window.location.href = "/";
      }).catch((error) => {
        //por enquanto
        this.showAlert = true;
        console.log(error);
      });
    },
  },
};
</script>

<style scoped></style>