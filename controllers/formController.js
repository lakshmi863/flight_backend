const formModel = require('../models/formModel');

exports.submitForm = (req, res) => {
  const formData = req.body;

  formModel.saveForm(formData, (err) => {
    if (err) return res.status(500).json({ message: 'Form submission failed' });
    res.status(201).json({ message: 'Form submitted successfully' });
  });
};