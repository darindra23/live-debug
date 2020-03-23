"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Loan extends Model {}

  Loan.init(
    {
      MemberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "MemberId is required"
          },
          notNull: {
            args: true,
            msg: "MemberId is required"
          }
        }
      },
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "BookId is required"
          },
          notNull: {
            args: true,
            msg: "BookId is required"
          }
        }
      },
      date_loaned: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Date loaned is required"
          },
          notNull: {
            args: true,
            msg: "Date loaned is required"
          }
        }
      },
      date_returned: DataTypes.DATE
    },
    { sequelize }
  );
  Loan.associate = function(models) {
    Loan.belongsTo(models.Member);
    Loan.belongsTo(models.Book);
  };
  return Loan;
};
