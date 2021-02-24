module.exports = (sequelize, Sequelize) => {
    const Souvenir = sequelize.define("souvenir", {
      id_user: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING
      }
 
    });
    return Souvenir;
  };