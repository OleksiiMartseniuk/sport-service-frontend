import { LocalStorage } from "quasar";


export default function () {
  const token = LocalStorage.getItem('token')
  return {
    isAuth: !!token,
  }
}
