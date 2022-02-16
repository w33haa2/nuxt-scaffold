export default {
  setLogInRequestState(state, payload) {
    state.isLoggingIn = payload
  },
  setErrorMessage(state, payload) {
    state.errorMessage = payload
  },
}
