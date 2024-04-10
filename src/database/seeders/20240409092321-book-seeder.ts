"use strict";

import { QueryInterface, Sequelize } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Rise of Sharlock Holmes",
          alt_title: "Uncle Ed Remembers",
          writer: "Onna Carr",
          cover_image: "cover_image.jpg",
          price: 19,
          olid: "OL41421994M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Tambahkan data buku lainnya sesuai kebutuhan
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Books", {});
  },
};
