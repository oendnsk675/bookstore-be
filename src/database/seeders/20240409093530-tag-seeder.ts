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
    const tagsData = [
      { tag: "Fiction" },
      { tag: "Science Fiction" },
      { tag: "Fantasy" },
      { tag: "Mystery" },
      { tag: "Thriller" },
      { tag: "Horror" },
      { tag: "Romance" },
      { tag: "Biography" },
      { tag: "History" },
      { tag: "Self-Help" },
    ];

    await queryInterface.bulkInsert(
      "Tags",
      tagsData.map((tag) => ({
        ...tag,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
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
    await queryInterface.bulkDelete("Tags", {});
  },
};
