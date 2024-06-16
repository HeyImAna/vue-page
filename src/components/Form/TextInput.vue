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
        minLength: null,
        maxLength: null
      }
    }
  }
})

const borderError = ref('')

const emit = defineEmits(['update:modelValue', 'form-validate'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const validate = (event) => {
  const isLengthValid =
    event.target.value.length >= props.componentData.minLength &&
    event.target.value.length <= props.componentData.maxLength

  if (!isLengthValid) {
    borderError.value = 'rgb(175, 32, 32)'
  } else {
    borderError.value = ''
  }

  emit('form-validate', !!isLengthValid)
}
</script>

<template>
  <div class="text">
    <label for="name">{{ props.componentData.label }}</label>
    <input
      :style="{ 'border-color': borderError }"
      :type="props.componentData.type"
      @input="handleInput"
      @blur="validate"
    />
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
