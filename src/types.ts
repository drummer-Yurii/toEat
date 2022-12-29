import type { restaurantStatusList } from "./constants"

export type RecommendStatus = typeof restaurantStatusList[number]

export interface Dish {
    name?: string
    diet?: Diet
    status?: RecommendStatus 
  }

  type Diet = 'vegetarian' | 'vegan' | 'gluten-free' | 'pescatarian' | 'lactose-free' | 'other'