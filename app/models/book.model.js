module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING(256),
      allowNull: false,
    },
    numPages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING(256),
      allowNull: true,
    },
  });
  return Book;
};
