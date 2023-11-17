/**
 * Container for a recipe item
 */
class RecipeInfo {
    /**
     * Default constructor for recipe item
     * @param {string} title The title from the recipe
     * @param {string} description Description of the recipe
     * @param {array[string]} tags 
     * @param {string} time 
     * @param {string} difficulty 
     */
    constructor(title, description, tags, time, difficulty) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.time = time;
        this.difficulty = difficulty;
    }
}

export default RecipeInfo;