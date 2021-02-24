module.exports = (sequelize, Sequelize) => {
    const Personal = sequelize.define("personal", {
      id_user:{
        type:Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      fname_eng: {
        type: Sequelize.STRING
      },
      lname_eng: {
        type: Sequelize.STRING
      },
      fname_th: {
        type: Sequelize.STRING
      },
      lname_th: {
        type: Sequelize.STRING
      },
      bd: {
        type: Sequelize.DATE
      },
      id_card: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      contact:{
        type:Sequelize.INTEGER
      },
      photo:{
        type:Sequelize.STRING
      },
      name_applicant:{
        type:Sequelize.STRING
      }
    });
    return Personal;
  };