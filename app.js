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

const School = mongoose.model("School", personSchema);

const school = new School ({
  name: "University of Lagos, Ojo, Lagos State, Nigeria.",
  age: 39
});

school.save();

const fruitsSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty Solid fruit."
});

fruit.save();






