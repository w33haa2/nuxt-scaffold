<!-- Please remove this file from your project -->
<template>
  <div
    class="max-w-lg w-full bg-white rounded-lg p-6 shadow-md space-y-4 border border-gray-200"
  >
    <auth-heading title="Login" description="Sign in to your account" />
    <alert-component v-show="errorMessage">{{ errorMessage }}</alert-component>
    <form @submit.prevent="submit">
      <div class="pb-5">
        <form-group label-for="email" label="Email Address">
          <form-input
            id="email"
            v-model="username"
            type="email"
            placeholder="name@traxiontech.net"
            required
          />
        </form-group>
        <form-group class="mb-1 mt-3" label-for="email" label="Password">
          <form-input
            id="password"
            v-model="password"
            type="password"
            placeholder="********"
            required
          />
        </form-group>
        <forgot-password-link />
      </div>
      <form-button
        :disabled="isLoggingIn"
        type="submit"
        block
        class="button button__block button__primary"
        >Login</form-button
      >
    </form>
    <div class="flex flex-col md:flex-row items-center justify-center pt-6">
      <span class="text-sm">Not a member yet? &nbsp;</span>
      <nuxt-link to="register" class="link__primary"
        >Sign up for an account.</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ForgotPasswordLink from './components/ForgotPasswordLink'
import AuthHeading from '~/components/Common/Auth/AuthHeading'
import AlertComponent from '~/components/Common/AlertComponent'
import FormInput from '~/components/Common/Inputs/FormInput'
import FormGroup from '~/components/Common/FormGroup'
import FormButton from '~/components/Common/Inputs/FormButton'

export default {
  components: {
    AuthHeading,
    AlertComponent,
    FormGroup,
    FormInput,
    FormButton,
    ForgotPasswordLink,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState('auth', ['isLoggingIn', 'errorMessage']),
  },
  methods: {
    submit() {
      this.$emit('submit', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>
