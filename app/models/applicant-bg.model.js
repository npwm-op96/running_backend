module.exports = (sequelize, Sequelize) => {
    const Applicant_BG = sequelize.define("applicant_bg", {
      id_user: {
        type: Sequelize.INTEGER
      },
      history: {
        type: Sequelize.JSON
      },
      time_expect: {
        type: Sequelize.STRING
      },
    });
    return Applicant_BG;
  };