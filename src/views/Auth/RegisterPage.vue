<template>
  <ion-page>
  <ion-button href="/" class="custom p-2" size="small">
    Voltar
  </ion-button>
  <div class="container d-flex flex-column align-items-center justify-content-center text-center">
    <div class="image-wrapper">
      <img class="img-fluid" src="/unpaposemfundo.png" />
    </div>

    <div v-if="showForm" class="form-group">
      <p class="text-white">Seja Bem-vindo(a) {{ form.name }}! <br /></p>

      <div class="d-flex flex-column">
        <ion-label class="text-start">Digite seu e-mail</ion-label>
        <ion-input v-model="form.email" :required="true" shape="round" class="custom" aria-label="example@gmail.com"
          placeholder="example@gmail.com"></ion-input>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col-4 col-sm-6 col-md-4">
          <ion-label for="age">Nascimento</ion-label>
          <!-- <input style="width: 100px; border-radius: 20px; padding: 10px; background: white; color: black; border: 1px solid white; appearance: none;" class="" type="date" v-model="form.birthDate"> -->
         <ion-datetime-button color="danger" datetime="datetime"></ion-datetime-button>

         <ion-modal :keepContentsMounted="true">
           <ion-datetime id="datetime" presentation="date"></ion-datetime>
         </ion-modal>
        </div>
        <div class="col-4 col-sm-6 col-md-4">
          <ion-label for="gender">Gênero</ion-label>

          <ion-select v-model="form.gender" aria-label="gender" placeholder="Gênero">
            <ion-select-option v-for="gender in genders" :value="gender" :key="gender">
              {{ gender }}
            </ion-select-option>
          </ion-select>
        </div>
        <div class="col-4 col-sm-6 col-md-4">
          <ion-label for="preference">Preferência</ion-label>
          <ion-input id="preference" v-model="form.preference" :required="true" shape="round" class="custom"
            aria-label="Preferência" placeholder="Mulher" />
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col-6 d-flex flex-column">
          <ion-label class="text-start">Digite sua senha</ion-label>
          <ion-input v-model="form.password" :required="true" shape="round" class="custom" aria-label="Senha"
            placeholder="Senha"></ion-input>
        </div>

        <div class="col-6 d-flex flex-column">
          <ion-label class="text-start">Confirme sua senha</ion-label>
          <ion-input v-model="form.confirmPassword" :required="true" shape="round" class="custom" aria-label="Senha"
            placeholder="Confirme sua senha"></ion-input>
        </div>
      </div>

      <ion-button @click="handleSubmit" shape="round" class="custom mt-4">
        Tudo certo!
      </ion-button>
    </div>

    <div v-else class="form-group">
      <p class="text-white">
        Olá, tudo bem?! <br />
        Pode nos informar seu nome completo?
      </p>

      <div class="name mb-3">
        <ion-input v-model="form.name" :required="true" shape="round" class="custom" aria-label="Digite aqui seu nome"
          color="light" placeholder="Digite aqui seu nome"></ion-input>
        <p v-if="showValidate" class="text-start w-100 mt-1" style="font-size: 10px !important; color: #f32e2e">
          Preencha antes de continuar
        </p>
      </div>

      <ion-button @click="validate('name')" shape="round" class="custom">
        Continuar
      </ion-button>
    </div>
  </div>
</ion-page>
</template>

<script>
import authApi from "@/api/auth.js";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        birthDate: "",
        gender: "",
        preference: "",
        password: "",
        confirmPassword: "",
        city: "Natal",
        state: "RN",
      },
      genders: ["MASCULINO", "FEMININO", "OUTRO"],
      showForm: false,
      showValidate: false,
    };
  },
  methods: {
    validate(field) {
      if (field === "name" && this.form.name.length > 0) {
        this.showForm = true;
        return;
      }

      this.showValidate = true;
      setTimeout(() => {
        this.showValidate = false;
      }, 3000);
    },
    handleSubmit() {
      authApi.register(this.form).then((response) => {
        window.app.href = "/login";
      })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
ion-select {
  --background: white;
  --placeholder-color: #2e294e;
  --color: #2e294e;
  --border-radius: 20px;
}

ion-datetime-button::part(native) {
    background: #FFF;
    color: #2e294e;
    border-radius: 20px;
}
</style>
