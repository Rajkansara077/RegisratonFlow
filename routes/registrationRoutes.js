const express = require('express');
const router = express.Router();
const {registerUser,getInstituteTypes,getSubjectsByStandard,getStandardsByInstitute} = require('../controllers/registrationController')


router.post('/register',registerUser);
router.get('/institute-type',getInstituteTypes);
router.get('/subjects/:standardId',getSubjectsByStandard);
router.get('/standards/:instituteTypeId',getStandardsByInstitute)


module.exports = router;