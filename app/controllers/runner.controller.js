
const db = require("../models");
const Applicant =db.applicant;
const Emergency = db.emergency;
const Medical = db.medical;
const Personal = db.personal;
const Souvenir = db.souvenir;


exports.register_runing = (req, res) => {

    const applicant = req.body.draft.applicant;
    const personal = req.body.draft.personal;
    const emergency = req.body.draft.emergency;
    const medical = req.body.draft.medical;
    const souvenir = req.body.draft.souvenir;

    console.log(emergency)
    console.log(medical)


    Personal.create(personal)
        .then(personal => {
            Applicant.create(applicant)
            .then(function (applicant) {
                    Emergency.create(emergency[0])
                    Emergency.create(emergency[1])
                        .then(emergency => {
                            Medical.create(medical)
                                .then(medical => {
                                    Souvenir.create(souvenir)
                                        .then(souvenir => {
                                            const data = {
                                                applicant: applicant,
                                                emergency: emergency,
                                                medical: medical,
                                                personal: personal,
                                                souvenir: souvenir
                                            };
                                            res.send(data);
                                        });

                        
                                    });
                        });
                })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error Personal"
            });
        });     
    
 
};


  