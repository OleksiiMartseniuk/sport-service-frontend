import { LocalStorage } from "quasar";

export default function authHeader() {
  const token = LocalStorage.getItem('token');

  if (token) {
    return { Authorization: 'Token ' + token };
  } else {
    return {};
  }
}
