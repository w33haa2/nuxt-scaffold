export default {
  logIn({ commit }, payload) {
    commit('setLogInRequestState', true)
    commit('setErrorMessage', '')
    const data = {
      ...payload,
      applicationId: 0,
    }
    this.$api
      .post('auth/login', {
        ...data,
      })
      .then(() => {
        commit('setLogInRequestState', false)
      })
      .catch(({ response }) => {
        commit('setLogInRequestState', false)
        commit('setErrorMessage', response.data.message)
      })
  },
}
