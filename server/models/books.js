'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};