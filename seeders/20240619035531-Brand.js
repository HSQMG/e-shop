'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data=[{
    name:'Quintiles',
    impath:'/img/brand-1.png'
   },
   {
    name:'IndiaCapital',
    impath:'/img/brand-2.png'
   },
   {
    name:'PapperlinX',
    impath:'/img/brand-3.png'
   },
   {
    name:'InfraRed',
    impath:'/img/brand-4.png'
   },
   {
    name:'Erland',
    impath:'/img/brand-5.png'
   },
   {
    name:'SportEngland',
    impath:'/img/brand-6.png'
   }
  ];
  
  await queryInterface.bulkInsert('Brands', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
