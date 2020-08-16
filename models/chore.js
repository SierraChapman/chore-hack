// Creating our Chore model
module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define("Chore", {
    // The chore cannot be null, varchar 255
    chore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The repeats can not be null
    repeats: {
      type: DataTypes.Boolean,
      allowNull: false
    }, 
    // The repeated_days can not be null, varchar 255
    repeated_days: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Chore.associate = function (models) {
    // We're saying that a Chore should belong to a Household
    // A Chore can't be created without a Household due to the foreign key constraint
    Chore.belongsTo(models.Household, {
        foreignKey: {
            allowNull: false
        }
    });
    // Chore can have many repetitions, if chore is deleted all its repetitions will be deleted 
    Chore.hasMany(models.Repetition, {
      onDelete: "cascade"
    });
};
  return Chore;
};
