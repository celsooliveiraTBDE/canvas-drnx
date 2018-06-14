'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        name: 'Jason Yu',
        about_me: "Walks on the beach, for sure",
        username: "mrgiggles",
        email: "jason@thebestdrinkever.com",
        password: "ballsdeep",
        role: "drink_maker",
        image_url: "https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5a066cdf652deab98d16d9ba/1510370906936/jason_yu_jasonfyu_instagram_drnxmyth",
        instagram_handle: "@jasonfyu"
      },{
        name: 'Amanda Colom',
        about_me: "Bar beverage development, Social media influencer, Event cocktail execution, Social media marketing, Content creation",
        username: "byebyebirdy",
        email: "birdy@thebestdrinkever.com",
        password: "birdsfly123",
        role: "drink_maker",
        image_url: "https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5a065cd5f9619a1bb0c5fa84/1510366441057/amanda_colom_badbirdy_instagram_drnxmyth",
        instagram_handle: "@bad_birdy"
      },{
        name: 'BarMax LA',
        about_me: "Techno and all things German, small tiny cars, drinks",
        username: "superforeignmaster",
        email: "barmaxLA@thebestdrinkever.com",
        password: "ballsdeep2",
        role: "drink_maker",
        image_url: "https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5afce0ac70a6ad7647eec4af/1526522047250/barmax",
        instagram_handle: "@barmaxLA"
      },
      {
        name: 'Celso Oliveira',
        about_me: "I contribute to awesome projects",
        username: "iamthebestdrinkever",
        email: "celsoLA@thebestdrinkever.com",
        password: "ballsdeepz",
        role: "user",
        image_url: "https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5afce0ac70a6ad7647eec4af/1526522047250/barmax",
        instagram_handle: "@barmaxLA"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});
  
  }
};
