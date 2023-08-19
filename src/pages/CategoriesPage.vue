<template>
  <q-page class="q-pa-sm">
    <h5 class="text-center text-h6">Категории</h5>
    <div class="row items-end q-gutter-sm">
      <div
        class="col-lg-3 col-md-3 col-xs-12 col-sm-12"
        v-for="category in categories"
        :key="category.id"
      >
        <card-profile-dark
            :name="category.title"
            text="Состоит из"
            des="12"
          />
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref, onMounted} from "vue";
import CardProfileDark from "components/CardProfileDark.vue";
import getCategories from "src/api/category";

export default defineComponent({
  name: 'CategoriesPage',
  components: {
    CardProfileDark,
  },
  setup() {
    const categories = ref([]);

    onMounted(() => {
      getCategories().then((response) => {
        categories.value = response.data.results;
      })
    })

    return { categories }
  }
});
</script>

