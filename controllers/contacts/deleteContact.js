const { Contact } = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const data = await Contact.findByIdAndRemove(contactId);
  

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
  
};

module.exports = deleteContact;