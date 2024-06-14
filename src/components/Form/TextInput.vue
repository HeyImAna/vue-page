<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  modelValue: {
    required: true
  },
  componentData: {
    type: Object,
    default: () => {
      return {
        type: 'text',
        label: 'Label',
        errorMessage: null,
        pattern: '',
        minLength: null,
        maxLength: null
      }
    }
  }
})

const localError = ref('')

const emit = defineEmits(['update:modelValue', 'form-validate'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const validate = (event) => {
  const isLengthValid =
    event.target.value.length >= props.componentData.minLength &&
    event.target.value.length <= props.componentData.maxLength

  if (!isLengthValid) {
    localError.value = `От ${props.componentData.minLength} до ${props.componentData.maxLength} символов`
  } else {
    localError.value = ''
  }

  emit('form-validate', !!isLengthValid)
}
</script>

<template>
  <div class="text">
    <label for="name">{{ props.componentData.label }}</label>
    <input
      class="input"
      :style="props.componentData.errorMessage || (localError && 'border-color:rgb(175, 32, 32);')"
      :type="props.componentData.type"
      @input="handleInput"
      @blur="validate"
    />

    <span v-if="props.componentData.errorMessage || localError">{{
      props.componentData.errorMessage || localError
    }}</span>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/util/index' as u;

.text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  input {
    outline: none;
    padding: 0.3rem;
    border: u.rem(1) solid var(--clr-gray);
    border-radius: u.rem(5);
    height: 2.5rem;

    @media (max-width: 36.25em) {
      width: u.rem(280);
    }

    &:focus {
      border: u.rem(1) solid rgb(81, 81, 81);
    }
  }

  span {
    color: rgb(175, 32, 32);
    font-size: u.rem(14);
  }
}
</style>
