import Person from "../models/persons.model.js";

// create Husband
export const createHusband = async (req, res) => {
  try {
    const { fullName } = req.body;

    const husband = await Person.create({
      fullName,
      gender: "Male",
    });

    res.status(201).json({
      success: true,
      message: "Husband created successfully",
      data: husband,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create wifes
export const createWife = async (req, res) => {
  try {
    const { fullName, husbandId } = req.body;

    const husband = await Person.findById(husbandId);

    if (!husband) {
      return res.status(404).json({
        success: false,
        message: "Husband not found",
      });
    }

    const wife = await Person.create({
      fullName,
      gender: "Female",
    });

    husband.spouses.push(wife._id);
    wife.spouses.push(husband._id);

    await husband.save();
    await wife.save();

    res.status(201).json({
      success: true,
      message: "Wife created successfully",
      data: wife,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create children
export const createChild = async (req, res) => {
  try {
    const { fullName, gender, fatherId, motherId } = req.body;

    const father = await Person.findById(fatherId);
    const mother = await Person.findById(motherId);

    if (!father || !mother) {
      return res.status(404).json({
        success: false,
        message: "Father or Mother not found",
      });
    }

    const child = await Person.create({
      fullName,
      gender,
      father: father._id,
      mother: mother._id,
      generationLevel:
        Math.max(father.generationLevel, mother.generationLevel) + 1,
    });

    res.status(201).json({
      success: true,
      message: "Child created successfully",
      data: child,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Persons
export const getPersons = async (req, res) => {
  try {
    const person = await Person.find();

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Persons
export const getSinglePersons = async (req, res) => {
  try {
    const person = await Person.find().populate("spouses", "fullName");

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
