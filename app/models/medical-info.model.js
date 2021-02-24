module.exports = (sequelize, Sequelize) => {
    const Medical_Info = sequelize.define("medical_info", {
      id_user: {
        type: Sequelize.INTEGER,
      },
      bood_type: {
        type: Sequelize.STRING
      },
      information: {
        type: Sequelize.JSON
      },
    });
    return Medical_Info;
  };