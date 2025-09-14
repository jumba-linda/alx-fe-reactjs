import create from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    { 
      id: 1, 
      title: 'Spaghetti Carbonara', 
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
      ingredients: ['pasta', 'eggs', 'cheese', 'pancetta'],
      prepTime: 20,
      difficulty: 'Medium'
    },
    { 
      id: 2, 
      title: 'Chicken Curry', 
      description: 'Spicy chicken curry with aromatic spices',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'spices'],
      prepTime: 40,
      difficulty: 'Easy'
    },
    { 
      id: 3, 
      title: 'Chocolate Cake', 
      description: 'Rich and moist chocolate cake',
      ingredients: ['flour', 'sugar', 'cocoa', 'eggs', 'butter'],
      prepTime: 60,
      difficulty: 'Medium'
    }
  ],
  searchTerm: '',
  filters: {
    difficulty: 'All',
    maxPrepTime: 120,
    ingredients: []
  },
  
  // Recipe actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { id: Date.now(), ...newRecipe }] 
  })),
  
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setFilters: (newFilters) => set((state) => ({
    filters: { ...state.filters, ...newFilters }
  })),
  
  // Get filtered recipes based on search term and filters
  getFilteredRecipes: () => {
    const { recipes, searchTerm, filters } = get()
    
    return recipes.filter(recipe => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
      // Difficulty filter
      const matchesDifficulty = filters.difficulty === 'All' || 
        recipe.difficulty === filters.difficulty
      
      // Preparation time filter
      const matchesPrepTime = recipe.prepTime <= filters.maxPrepTime
      
      // Ingredients filter
      const matchesIngredients = filters.ingredients.length === 0 ||
        filters.ingredients.every(filterIngredient => 
          recipe.ingredients.includes(filterIngredient)
        )
      
      return matchesSearch && matchesDifficulty && matchesPrepTime && matchesIngredients
    })
  }
}))

export default useRecipeStore
