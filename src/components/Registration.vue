<template>
  <div class="modal__content modal__content--registration">
    <div class="modal__close" @click="$emit('closeIcon')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="22"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M7.32166 5.99941L11.8083 10.4862C11.9317 10.6098 11.9998 10.7745 12
        10.9502C12 11.126 11.9319 11.291 11.8083 11.4143L11.4151 11.8074C11.2915
        11.9312 11.1267 11.999 10.9508 11.999C10.7752 11.999 10.6104 11.9312
        10.4868 11.8074L6.0002 7.32088L1.51337 11.8074C1.38995 11.9312 1.22507
        11.999 1.04927 11.999C0.873659 11.999 0.70878 11.9312 0.585366 11.8074L0.192
        11.4143C-0.064 11.1583 -0.064 10.7419 0.192 10.4862L4.67873 5.99941L0.192
        1.51278C0.0684878 1.38907 0.000487805 1.22429 0.000487805 1.04858C0.000487805
        0.872873 0.0684878 0.708094 0.192 0.584484L0.585268 0.19141C0.708683 0.0677032
        0.873658 -0.000199318 1.04917 -0.000199318C1.22498 -0.000199318 1.38985 0.0677032
        1.51327 0.19141L6.0001 4.67805L10.4867 0.19141C10.6103 0.0677032 10.7751 -0.000199318
        10.9507 -0.000199318H10.9509C11.1266 -0.000199318 11.2914 0.0677032 11.415 0.19141L11.8082
        0.584484C11.9316 0.707996 11.9997 0.872873 11.9997 1.04858C11.9997 1.22429 11.9316 1.38907
        11.8082 1.51268L7.32166 5.99941Z"
          fill="#7C9CBF"
        />
      </svg>
    </div>
    <h2 class="modal__title">Регистрация</h2>
    <div>
      <span class="registration__subtitle">Уже есть аккаунт?</span>
      <a href="#">Войти</a>
    </div>
      <form
        method="POST"
        action="#"
        class="form__registration"
        @submit.prevent="onSubmit"
      >
        <div class="form__item">
          <label class="form__label">
              <span class="form__label-title">Имя</span>
              <input
                type="text"
                placeholder="Введите ваше имя"
                name="name"
                class="form__input input"
                v-model="form.name"
                @keyup="isValid"
              />
              <span class="form__error"></span>
          </label>
        </div>
        <div class="form__item">
          <label class="form__label">
              <span class="form__label-title">Email</span>
              <input
                type="email"
                placeholder="Введите ваш email"
                name="email"
                class="form__input input"
                v-model.trim="form.email"
                @keyup="isValid"
              />
              <span class="form__error"></span>
          </label>
        </div>
        <div class="form__item">
          <label class="form__label">
              <span class="form__label-title">Номер телефона</span>
              <input
                type="text"
                placeholder="Введите номер телефона"
                name="tel"
                class="form__input input"
                v-model.trim="form.tel"
                @keyup="isValid"
              />
              <span class="form__error"></span>
          </label>
        </div>
        <div class="form__item">
          <label class="form__label">
            <span class="form__label-title">Язык</span>
            <div class="dropdown">
              <select
                  name="language"
                  id="language"
                  v-model="form.selectedLanguage"
                  class="select-native"
                  @blur="isValid"
                >
                  <option selected>{{ form.selectedLanguage }}</option>
                  <option
                    v-for="language in languages"
                    :key="language"
                    :value="language"
                  >
                    {{ language }}
                  </option>
              </select>
              <div class="select-custom" id="language">
                  <div class="select__header" @click="openSelect">
                    <span class="select__current select-placeholder">
                      {{ form.selectedLanguage }}
                    </span>
                    <div class="select__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071
                          11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071
                          19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289
                          12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342
                          10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z"
                          fill="black"
                        />
                        <mask
                          id="mask0_1:51"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="7"
                          y="11"
                          width="16"
                          height="9"
                        >
                          <path
                            d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024
                          22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071
                          19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289
                          12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024
                          8.31658 10.9024 8.70711 11.2929L15 17.5858Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1:51)">
                          <rect width="30" height="30" fill="#0880AE" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <transition name="fade">
                    <div class="select__body" v-if="isOpenSelect">
                      <div
                        class="select__item"
                        v-for="language in languages"
                        :key="language"
                        @click="pickLanguage"
                      >
                        {{ language }}
                      </div>
                    </div>
                  </transition>
              </div>
              <span class="form__error"></span>
            </div>
          </label>
        </div>
        <div class="form__item form__item--checkbox">
          <label class="form__checkbox checkbox">
              <input
                type="checkbox"
                name="agreement"
                class="checkbox__input"
                v-model="form.agreement"
                @change="isValid"
              />
              <span class="form__checkbox-custom checkbox__custom"></span>
              <span
                >Принимаю
                <a href="#">&ensp;условия&ensp;</a> использования</span
              >
              <span class="form__error"></span>
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary form__btn--submit"
          :disabled="invalidForm"
        >
          Зарегистрироваться
        </button>
      </form>
  </div>
</template>

<script>
import errors from '../errors';

export default {
  name: 'Registration',
  data: () => ({
    form: {
      name: '',
      email: '',
      tel: '',
      selectedLanguage: 'Язык',
      agreement: false,
    },
    errorList: {
      name: true,
      email: true,
      tel: true,
      selectedLanguage: true,
      agreement: true,
    },
    invalidForm: true,
    isOpenSelect: false,
    languages: [
      'Русский',
      'Английский',
      'Китайский',
      'Испанский',
      'Немецкий',
      'Французский',
      'Сербский',
    ],
  }),
  computed: {
    errors() {
      return errors;
    },
  },
  methods: {
    pickLanguage(e) {
      this.form.selectedLanguage = e.target.innerText;
      e.target.parentElement.parentElement.classList.remove('is-active');
      this.validSelect(e.target.parentElement.parentElement.parentElement);
      this.isTrue();
    },
    isTrue() {
      if (this.isOpenSelect === false) {
        this.isOpenSelect = true;
      } else {
        this.isOpenSelect = false;
      }
    },
    openSelect(e) {
      const select = e.target;
      this.isTrue();

      if (select.classList.contains('select__header')) {
        select.parentElement.classList.toggle('is-active');
        select.querySelector('.select__current').classList.remove('select-placeholder');
      } else {
        const selectParent = select.closest('.select__header');
        selectParent.parentElement.classList.toggle('is-active');
        selectParent.querySelector('.select__current').classList.remove('select-placeholder');
      }
    },
    isValid(e) {
      const input = e.target;
      const inputName = input.getAttribute('name');
      const inputValue = input.value;
      const span = input.parentElement.querySelector('.form__error');

      if (inputName === 'language') {
        if (this.form.selectedLanguage === 'Язык') {
          span.innerText = this.errors.language;
          this.errorList.selectedLanguage = true;
        } else {
          span.innerText = '';
          this.errorList.selectedLanguage = false;
        }
      } else if (inputName === 'agreement') {
        if (this.form.agreement === false) {
          span.innerText = this.errors.agreement;
          this.errorList.agreement = true;
        } else {
          span.innerText = '';
          this.errorList.agreement = false;
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (inputValue === '') {
          span.innerText = this.errors.required;
          this.errorList[inputName] = true;
        } else if (!this.errors[inputName].test(this.form[inputName])) {
          span.innerText = 'Введено некорректное значение';
          this.errorList[inputName] = true;
        } else {
          span.innerText = '';
          this.errorList[inputName] = false;
        }
      }
      this.validation();
    },
    validSelect(e) {
      e.querySelector('.form__error').innerText = '';
      this.errorList.selectedLanguage = false;
    },
    validation() {
      const values = Object.values(this.errorList);
      if (values.includes(true, 0)) {
        this.invalidForm = true;
      } else {
        this.invalidForm = false;
      }
    },
    onSubmit() {
      const formData = this.form;
      this.$emit('getFormData', formData);
      // this.$emit('closeIcon');
      this.$emit('submitRegistration', 'registrationSucces');
    },
  },
};
</script>

<style scoped lang="scss">
.modal__content--registration {
  max-width: 460px;
  text-align: left;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    height: 100%;
    padding: 40px 20px;
    overflow-y: auto;
    border-radius: 0;
  }
}

.modal__title {
  font-size: 34px;
  line-height: 44px;
  margin: 0 0 8px;
}
</style>
