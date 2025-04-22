const db = require('../config/db');

async function getInstituteTypes(req, res) {
    try {
        const [results] = await db.query('SELECT * FROM institute_types');
        console.log(results);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getStandardsByInstitute(req, res) {
    try {
        const { instituteTypeId } = req.params;
        const [results] = await db.query('SELECT * FROM standards WHERE institute_type_id = ?', [instituteTypeId]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getSubjectsByStandard(req, res) {
    try {
        const { standardId } = req.params;
        const [results] = await db.query('SELECT * FROM subjects WHERE standard_id = ?', [standardId]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function registerUser(req, res) {
    try {
        const { institute_type_id, standard_id, subject_id, user_details } = req.body;
        if (!institute_type_id || !standard_id || !user_details) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        if (institute_type_id === 3 && !user_details.degree) {
            return res.status(400).json({ error: 'Degree type is required for College' });
        }
        const [result] = await db.query(
            'INSERT INTO registrations (institute_type_id, standard_id, subject_id, user_details) VALUES (?, ?, ?, ?)',
            [institute_type_id, standard_id, subject_id || null, JSON.stringify(user_details)]
        );
        res.status(201).json({ message: 'Institute Registration successful', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getInstituteTypes,
    getStandardsByInstitute,
    getSubjectsByStandard,
    registerUser
};