const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: {
            type: String,
            required: true,
            match: [/^[A-Za-z\s]+$/, "City name should contain only alphabets and spaces"]
        },
        zipcode: {
            type: String,
            required: true,
            match: [/^\d{5}-\d{4}$/, "Zip code must be in format DDDDD-DDDD"]
        },
        geo: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be in format D-DDD-DDD-DDDD"]
    },
    website: {
        type: String,
        required: true,
        match: [/^(https?:\/\/)[\w.-]+(\.[a-z]{2,})+([/?#].*)?$/, "Please enter a valid website URL"]
    },
    company: {
        name: { type: String, required: true },
        catchPhrase: { type: String, required: true },
        bs: { type: String, required: true }  
    }
});

userSchema.pre('save', (next) => {
    console.log("Before Save")
    let now = Date.now()
     
    this.updatedat = now
    // Set a value for createdAt only if it is null
    if (!this.created) {
      this.created = now
    }
    
    // Call the next function in the pre-save chain
    next()
  });
  
userSchema.pre('findOneAndUpdate', (next) => {
    console.log("Before findOneAndUpdate")
    let now = Date.now()
    this.updatedat = now
    console.log(this.updatedat)
    next()
  });
  
  
userSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
userSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
userSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
userSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });

module.exports = mongoose.model("User", userSchema);
