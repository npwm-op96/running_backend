module.exports = (sequelize, Sequelize) => {
    const Emergency_Contract = sequelize.define("emergency_contract", {
      id_user: {
        type: Sequelize.INTEGER,
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      relation: {
        type: Sequelize.STRING
      },
      no:{
          type:Sequelize.STRING
      }
    });
    return Emergency_Contract;
  };