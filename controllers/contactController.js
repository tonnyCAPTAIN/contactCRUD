//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = async (req, res) => {
    res.status(200).json({ message: "Get all contact"});
};



//@desc  create newcontacts
//@route POST /api/contacts/:id
//@access public

const createContact = async (req, res) => {
    console.log("the request body is: ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "Create contact"});
};


//@desc  get  New contact
//@route GET /api/contacts/:id
//@access public

const getContact = async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
}



//@desc  uodate existing contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = async (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}`});
}


//@desc  Delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
};


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };