<template>
  <div class="modal__backdrop" @click="closeModal">
    <Registration v-if="targerBlock === 'registration'"
      @closeIcon="closeModalIcon"
      @submitRegistration="showRegistrationSucces('registrationSucces')"
      @getFormData="getFormData"
    />
    <RegistrationSuccess v-if="targerBlock === 'registrationSucces'" />
  </div>
</template>

<script>
import Registration from './Registration.vue';
import RegistrationSuccess from './RegistrationSucces.vue';

export default {
  name: 'Modal',
  components: {
    Registration,
    RegistrationSuccess,
  },
  props: {
    openTarget: {
      type: String,
    },
  },
  data: () => ({
    targerBlock: '',
  }),
  mounted() {
    this.targerBlock = this.openTarget;
  },
  methods: {
    closeModal(event) {
      const content = document.querySelector('.modal__backdrop');
      if (event.target === content) {
        this.$emit('close');
      }
    },
    closeModalIcon() {
      this.$emit('close');
    },
    showRegistrationSucces(target) {
      this.targerBlock = target;
      setTimeout(() => { this.$emit('close'); }, 3000);
    },
    getFormData(form) {
      this.$emit('getFormData', form);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
