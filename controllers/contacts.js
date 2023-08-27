
const { Contact } = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (_, res) => {
  const data = await Contact.find({}, "-createdAt -updatedAt");

  res.json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;

   const data = await Contact.findById(contactId);

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
};

const addContact = async (req, res) => {
  const data = await Contact.create(req.body);

  res.status(201).json(data);
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;

  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
};


const updateContactFavorite = async (req, res) => {
  const { contactId } = req.params;

  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const data = await Contact.findByIdAndRemove(contactId);

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.json(data);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  updateContactFavorite: ctrlWrapper(updateContactFavorite),
  deleteContact: ctrlWrapper(deleteContact),
};