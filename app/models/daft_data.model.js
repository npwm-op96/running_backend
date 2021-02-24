module.exports = (sequelize, Sequelize) => {
    const Draft = sequelize.define("draft", {
      id_user: {
        type: Sequelize.INTEGER
      },
      draft: {
        type: Sequelize.JSON
      }
    });
    return Draft;
  };