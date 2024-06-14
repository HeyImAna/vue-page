<script setup>
import { reactive, ref, inject } from 'vue'
import TextInput from './TextInput.vue'

//svg assests
import Video from '../svg/Video.vue'
import Arrow from '../svg/Arrow.vue'
import Screen from '../svg/Screen.vue'

//toast
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

// toast (START)

const toast = useToast()

const toastSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Отлично!',
    detail: 'Форма отправлена',
    closable: false,
    life: 2000
  })
}

const toastError = () => {
  toast.add({
    severity: 'error',
    summary: 'Ошибка!',
    detail: 'Форма недействительна, попробуйте еще раз',
    closable: false,
    life: 2000
  })
}

// toast (END)

//form (START)

const form = reactive({
  autoNumber: '',
  region: '',
  registration: ''
})

const autoNumberComponent = ref({
  type: 'text',
  label: 'Номер автомобиля',
  errorMessage: null,
  minLength: 6,
  maxLength: 6
})

const regionComponent = ref({
  type: 'text',
  label: 'Регион',
  errorMessage: null,
  minLength: 6,
  maxLength: 16
})

const registrationComponent = ref({
  type: 'text',
  label: 'Свидетельство о регистрации ТС',
  errorMessage: null,
  minLength: 6,
  maxLength: 16
})

const isFormValid = ref(true)

const validateForm = (isValid) => {
  isFormValid.value = isValid
}

const onSubmit = async () => {
  try {
    if (!isFormValid.value || !form.autoNumber || !form.region || !form.registration) {
      toastError()
    } else {
      const allInputs = document.querySelectorAll('input')
      allInputs.forEach((singleInput) => (singleInput.value = ''))
      toastSuccess()
    }
  } catch (error) {
    console.log(error)
  }
}
//form (END)

//window (START)
const { openWindow } = inject('window')
//window (END)
</script>

<template>
  <Toast position="top-left" />
  <div class="wrap">
    <div class="wrap__left">
      <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <div class="form">
        <div class="row">
          <TextInput
            isFormValid
            style="width: 56.84%; margin-right: 9px"
            v-model="form.autoNumber"
            :component-data="autoNumberComponent"
            @form-validate="validateForm"
          />

          <TextInput
            isFormValid
            style="width: 37.84%"
            v-model="form.region"
            :component-data="regionComponent"
            @form-validate="validateForm"
          />
        </div>
        <TextInput
          isFormValid
          v-model="form.registration"
          :component-data="registrationComponent"
          @form-validate="validateForm"
        />

        <div class="row">
          <button @click="onSubmit()" class="row__action">
            <h4>Проверить штрафы</h4>
            <Arrow style="margin-top: 4px" />
          </button>
          <button class="row__video" @click="openWindow">
            <Video />
            <h4>О сервисе</h4>
            <span>(1 мин. 20 сек)</span>
          </button>
        </div>
        <p>
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и
          принимаете оферту
        </p>
      </div>
    </div>
    <div class="wrap__right">
      <Screen class="screen" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/util/index' as u;

.wrap {
  display: flex;
  gap: u.rem(40);
  align-items: center;
  margin-bottom: u.rem(98);

  &__left {
    max-width: u.rem(563);

    h1 {
      margin-bottom: u.rem(25);
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: u.rem(16);

      .row {
        display: flex;
        gap: u.rem(21);

        @media (max-width: 36.25em) {
          flex-wrap: wrap;
        }

        h4 {
          text-align: center;
        }

        &__action,
        &__video {
          display: flex;
          gap: u.rem(5.3);
        }

        &__action {
          width: u.rem(210);
          height: u.rem(45);
        }
        &__video {
          width: u.rem(258);
          height: u.rem(45);
          border: u.rem(1) solid var(--clr-button);
          background-color: #fff;
          color: #000;

          &:hover,
          &:active {
            background-color: var(--clr-button);
            color: #fff;

            span {
              color: #fff;
            }
          }

          span {
            color: var(--clr-title);
            font-size: u.rem(15);
          }
        }
      }

      p {
        font-size: u.rem(13);
        color: var(--clr-text-light);
      }
    }
  }

  &__right {
    max-width: u.rem(532.18);
    max-height: u.rem(335);

    .screen {
      min-width: 350px;

      @media (max-width: 61em) {
        display: none;
      }
    }
  }
}
</style>
