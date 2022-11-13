export interface UserLogin {
  email: string;
  password: string;
}

export interface UserCreate {
  username: string;
  role: string;
  email: string;
  password: string;
}

// export interface UserMongo {
//   _id: ObjectId;
//   username: string;
//   email: string;
//   role: string;
//   password: string;
//   createdAt: object;
//   updatedAt: object;
//   __v?: number;
// }
