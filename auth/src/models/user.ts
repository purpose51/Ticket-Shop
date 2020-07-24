import mongoose, { Mongoose } from 'mongoose'

// An interface that describes the properties 
// that are required to create a new user

interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a user model has
interface userModel extends mongoose.Model<UserDoc> {
  build(attrs : UserAttrs): UserDoc
}

// An interface that describes the properties that a user document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
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

const User = mongoose.model<UserDoc, userModel>('User', userSchema)

const user  = User.build({
  email: '22222@gmail.com',
  password: 'lslss'
})

export { User }