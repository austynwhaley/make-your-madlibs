//create stories model
module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define("Stories", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    storyBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    upvotes: {
      type: DataTypes.INTEGER,
    },
  });

  return Stories;
};
