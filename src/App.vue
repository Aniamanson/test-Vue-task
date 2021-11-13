<template>
  <div id="app">
    <h1>Тестовое задание. Форма регистрации</h1>
    <button class="btn btn-primary btn__open-modal"
      @click.prevent="isHidden"
    >
      Зарегистрироваться
    </button>

    <transition name="fade">
      <Modal v-if="isOpenModal"
        open-target="registration"
        @close="closeModal"
        @getFormData="changeUserData"
      />
    </transition>

    <div class="info" v-if="Object.keys(userData).length > 0">
      <h2 class="registration__subtitle">Ваши данные</h2>
      <div class="data-item">
        <span class="form__label-title">Имя:</span>
        <span class="form__label-info"> {{ userData.name }} </span>
      </div>
      <div class="data-item">
        <span class="form__label-title">Email:</span>
        <span class="form__label-info"> {{ userData.email }} </span>
      </div>
      <div class="data-item">
        <span class="form__label-title">Телефон:</span>
        <span class="form__label-info"> {{ userData.tel }} </span>
      </div>
      <div class="data-item">
        <span class="form__label-title">Язык:</span>
        <span class="form__label-info"> {{ userData.selectedLanguage }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data: () => ({
    isOpenModal: false,
    userData: {},
  }),
  methods: {
    isHidden() {
      this.isOpenModal = true;
      document.querySelector('body').style.overflow = this.isOpenModal ? 'hidden' : 'auto';
    },
    closeModal() {
      this.isOpenModal = false;
      document.querySelector('body').style.overflow = this.isOpenModal ? 'hidden' : 'auto';
    },
    changeUserData(data) {
      Object.assign(this.userData, data);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 400px;
  margin: 60px auto;

  @media (max-width: 430px) {
    padding: 0 20px;
  }
}
h1 {
  margin: 0 0 30px;
  line-height: 34px;
  @media (max-width: 430px) {
    font-size: 1.5em;
  }
}
h2 {
  font-size: 22px;
}
.btn__open-modal {
  margin: 0 auto;
}
</style>
