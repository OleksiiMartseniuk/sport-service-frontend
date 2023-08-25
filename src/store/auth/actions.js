import { api } from "boot/axios";
import { Loading, Notify, LocalStorage } from "quasar";

export function login ({ dispatch }, payload) {
  Loading.show()
  api
    .post('auth/token/login/', payload)
    .then( response => {
      LocalStorage.set('token', response.data.auth_token);
      dispatch('getUser');
    })
    .catch(error => {
      for (let field in error.response.data) {
        Notify.create({
          message: field + ": " + error.response.data[field],
          type: 'negative',
        });
      }
    })
    .finally(() => {
      Loading.hide();
    });
}

export function getUser({ commit }) {
  api
    .get('auth/users/me/', { headers: {Authorization: 'Token ' + LocalStorage.getItem('token') }})
    .then( response => {
      LocalStorage.set('user', response.data);
      commit('setSuccessAuth');
    });
}

export function logout (context) {

}

export function register (context) {

}
