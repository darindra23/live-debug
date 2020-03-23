"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Member extends Model {}

  Member.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name is required"
          },
          notNull: {
            args: true,
            msg: "Name is required"
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name is required"
          },
          notNull: {
            args: true,
            msg: "Name is required"
          }
        }
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Zipcode is required"
          },
          notNull: {
            args: true,
            msg: "Zipcode is required"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid Email Format"
          },
          notEmpty: {
            args: true,
            msg: "Email is required"
          },
          notNull: {
            args: true,
            msg: "Email is required"
          }
        }
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Phone Number is required"
          },
          notNull: {
            args: true,
            msg: "Phone Number is required"
          },
          len: {
            args: [10, 13],
            msg: "Invalid Phone Number length"
          }
        }
      }
    },
    { sequelize }
  );
  Member.associate = function(models) {
    Member.hasMany(models.Loan);
  };
  return Member;
};
