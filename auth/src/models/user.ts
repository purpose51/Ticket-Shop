import mongoose, { Mongoose } from 'mongoose'

// An interface that describes the properties 
// that are required to create a new user

interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a user model has
interface userModel extends mongoose.Model<any> {
  build(attrs : UserAttrs): any
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User = mongoose.model<any, userModel>('User', userSchema)

User.build({

})

export { User }