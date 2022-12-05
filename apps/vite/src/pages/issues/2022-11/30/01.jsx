const favorites = [
  {
    categoryId: null,
    categoryName: 'Uncategorized',
    favorites: [
      {
        id: 30143,
        name: 'Ceiling group',
        unit: 'ft',
        user_id: 41816,
        category_id: null,
        category_name: null,
      },
      {
        id: 30144,
        name: 'Ceil 1',
        unit: 'ft',
        user_id: 41816,
        category_id: null,
        category_name: null,
      },
      {
        id: 30142,
        name: 'Flooring 1',
        unit: 'ft',
        user_id: 41816,
        category_id: null,
        category_name: null,
      },
    ],
  },
  {
    categoryId: 14,
    categoryName: 'Doors 1',
    favorites: [
      {
        id: 30148,
        name: 'Doors 1 Group',
        unit: 'count',
        user_id: 41816,
        category_id: 14,
        category_name: 'Doors 1',
      },
    ],
  },
]

const favToDelete = {14: [30148]}

const removeFav = (list, map) =>
  list.map((category) => ({
    ...category,
    favorites: category.favorites.filter(
      (fav) => !map[category.categoryId]?.includes(fav.id),
    ),
  }))

const updatedFavs = removeFav(favorites, favToDelete)

console.log({updatedFavs})
