'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        project_name : 'RUM PUNCH',
        description : 'Cocktail',
        image_url : 'https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/59cd455ac027d83dc88bfa22/1506625922388/Untitled_5.001.jpeg',
        rating : 5,
        project_amount : 5000,
        project_goal: 7500,
        alcohol_content: 20,
        ingredient_1: '2.92 oz. Rum',
        ingredient_2: '1.1 oz. Lime Cold-Pressed',
        ingredient_3: '1.1 oz. Passionfruit Syrup',
        ingredient_4: '0.015 oz. Coconut-celery bitters',
        UserId: "1"
      }, 
      {
        project_name : 'EAST SIDE',
        description : 'Cocktail',
        image_url : 'https://static1.squarespace.com/static/581cd1f3c534a514915f9a4b/5a4c55df4192021bcbc447c0/5a4c55e0652dea72c883d812/1514952282808/cocktail%2Bcontent-1-04.jpg',
        rating : 4,
        project_amount : 4000,
        project_goal: 5000,
        alcohol_content: 20,
        ingredient_1: '2.92 oz. Gin',
        ingredient_2: '1.2 oz. Cucumber-mint tincture',
        ingredient_3: '1.2 oz. Lime Cold-Pressed',
        ingredient_4: '0.15 oz. Cane sugar',
        UserId: "2"

      },
      {
        project_name : "BOURBON'S HONEY",
        description : 'Cocktail',
        image_url : 'https://static1.squarespace.com/static/581cd1f3c534a514915f9a4b/5a4c55df4192021bcbc447c0/5a4c55df71c10b82b8cfeeea/1514952162933/cocktail%2Bcontent-1-02.jpg',
        rating : 4,
        project_amount : 2500,
        project_goal: 5000,
        alcohol_content: 20,
        ingredient_1: '3 oz. Bourbon',
        ingredient_2: '1.2 oz. Honey',
        ingredient_3: '1.2 oz. Lemon Cold-Pressed',
        ingredient_4: '0.3 oz. Orange bitters',
        UserId: "3"

            },
      {
        project_name : "MARGARITA",
          description : 'Cocktail',
          image_url : 'https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/59cd380accc5c5d7076808b0/1506621482199/drink_with_image_d2d77740-48eb-4611-98fb-8718dc52d2e4.png',
          rating : 4,
          project_amount : 3500,
          project_goal: 4000,
          alcohol_content: 20,
          ingredient_1: '3 oz. Mezcal',
          ingredient_2: '1.2 oz. Agave Nectar',
          ingredient_3: '1.2 oz. Lime Cold-Pressed',
          ingredient_4: '0.3 oz. Jalapeno Tincture',
          UserId: "1"

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
    
  }
};
