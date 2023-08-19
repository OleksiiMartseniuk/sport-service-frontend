<template>
<q-layout>
  <q-page-container>
    <q-page class="flex bg-image flex-center">
      <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="text-center q-pt-lg">
            <div class="col text-h6 ellipsis">
              Log in
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit.prevent="handlerSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="username"
              label="Username"
              lazy-rules
            />

            <q-input
              type="password"
              filled
              v-model="password"
              label="Password"
              lazy-rules

            />

            <div>
              <q-btn label="Login" type="submit" color="primary"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const store = useStore()
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    const handlerSubmit = () => {
      store.dispatch(
        'auth/login',
        {username: username.value, password: password.value}
      )
      username.value = '';
      password.value = '';
      if (store.state.auth.isAuth) {
        router.push({ path: '/' });
      }
    }
    return {username, password, handlerSubmit}
  },
})
</script>

<style>

.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
