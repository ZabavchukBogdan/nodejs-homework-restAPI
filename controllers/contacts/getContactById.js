const { Contact } = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const data = await Contact.findById(contactId);
  

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
};

module.exports = getContactById;