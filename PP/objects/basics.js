/*
Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
*/
let createProject = function (description, language, repository, isInDevelopment) {
    project = {
        description: description,
        language: language,
        repository: repository,
        isInDevelopment: isInDevelopment,
        printRepo: function () {
            return project.repository
        },
        checkIsJS: function () {
            if (project.language === 'JavaScript') {
                return true
            } else {
                return false
            }
        },
        checkIsInDevelopment: function () {
            if (project.isInDevelopment) {
                return 'Project is in development.'
            } else {
                return 'Project is not in development.'
            }
        }
    }

    return project
}

let newProject = createProject('Budget application, Tracks your personal budget.', 'JavaScript', 'www.github.com/repositories/budgetApp', true);
console.log(newProject, newProject.checkIsInDevelopment(), newProject.checkIsJS(), newProject.printRepo());
/*
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/

let Hero = function (name) {
    this.name = name;
    this.occupation = 'ninja';
    this.say = function () {
        return 'Hi, my name is ' + this.name + ' and I am a ' + this.occupation;
    }
}

let hero1 = new Hero('Donatelo');
let hero2 = new Hero('Leonardo');
console.log(hero1.say());
console.log(hero2.say());

function Meal (name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    this.writeRecipe = function () {
        return 'you mix ' + this.ingredients + ' and you get ' + this.name
    }
};

let beans = new Meal ('bean', 'bean, flour, water, salt, chilli');
console.log(beans.writeRecipe());