<script setup lang="ts">
import { ref } from "vue"

const restaurantList = ref<string[]>([])
const newRestaurantName = ref()

function addRestaurant() {
  restaurantList.value.push(newRestaurantName.value)
}
</script>

<template>
  <main>
    <form @submit.prevent="addRestaurant">
      <label for="restaurant-name">Restaurant Name</label>
      <input id="restaurant-name" v-model="newRestaurantName" type="text" />
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li 
        v-for="restaurant in restaurantList" 
        :key="restaurant">
        {{ restaurant }}
      </li>
    </ul>
  </main>
</template>
