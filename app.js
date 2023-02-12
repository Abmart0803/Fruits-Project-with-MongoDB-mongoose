// jshint esversion:6 
const mongoose = require('mongoose');

mongoose.set( "strictQuery", false );
mongoose.connect( "mongodb://0.0.0.0:27017/peopleDB", () => {
    console.log(`Connected to MongoDB`)
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Martins",
  age: 42
});

person.save();

const schoolSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const School = mongoose.model("School", schoolSchema);

const school = new School ({
  name: "University of Lagos, Ojo, Lagos State, Nigeria.",
  age: 39
});

school.save();

const fruitsSchema = new mongoose.Schema ({
  name: String,
  //Validation Below:
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating:8,
  review: "Pretty Solid fruit."
});

fruit.save();

//to save many collections at a time using insertMany.
const bankSchema = new mongoose.Schema ({
  //validation here below.
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  dateOfEstablish: Number,
  rating: Number,
  branches: Number
});

const Bank = mongoose.model("Bank", bankSchema);

const uba = new Bank ({
  name: "UBA",
  dateOfEstablish: 1950,
  rating: 7,
  branches: 138
});

const gtb = new Bank ({
  name: "GTB",
  dateOfEstablish: 1960,
  rating: 9,
  branches: 156
});

const firstBank = new Bank ({
  name: "First Bank",
  dateOfEstablish: 1940,
  rating: 6,
  branches: 140
});

Bank.insertMany([uba, gtb, firstBank], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the banks to peopleDB");
  }
});

//Reading from our Database with mongoose using Find.
Bank.find(function(err, banks) {
  if (err) {
    console.log(err);
  } else {

    //To close our connection so we wont be using CTR + C all the time, after the operation we close it with below code.
    mongoose.connection.close();

    //To print out only the name of banks in Bank model
    banks.forEach(function(Bank) {
      console.log(Bank.name)
    })
  }
});
// Updating data with mongoose using updateOne().
Bank.updateOne({_id: "63e9494fe43e360b9b66434d"}, {name: "Fidelity Bank"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Updated the document");
  }
});

// Deleting data with mongoose using deleteOne()
Bank.deleteOne({name: "First Bank"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document.");
  }
});









