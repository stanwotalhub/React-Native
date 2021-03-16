class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    isVegetarian
  ) {
      this.id = id;
      this.categoryId = categoryId;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.isVegetarian = isVegetarian;
  }
}

export default Meal;
