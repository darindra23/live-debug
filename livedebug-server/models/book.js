"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Book extends Model {}

  Book.init(
    {
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "ISBN is required"
          },
          notNull: {
            args: true,
            msg: "ISBN is required"
          },
          len: {
            args: [10],
            msg: "Invalid ISBN length"
          }
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Title is required"
          },
          notNull: {
            args: true,
            msg: "Title is required"
          }
        }
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Author is required"
          },
          notNull: {
            args: true,
            msg: "Author is required"
          }
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Category is required"
          },
          notNull: {
            args: true,
            msg: "Category is required"
          }
        }
      },
      stock: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Stock is required"
          },
          notNull: {
            args: true,
            msg: "Stock is required"
          },
          min: 0
        }
      }
    },
    { sequelize }
  );
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.Loan);
  };
  return Book;
};
