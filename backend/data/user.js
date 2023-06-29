import bcrypt from 'bcryptjs';

const users = [
      {
            name: 'Admin User',
            email: 'admin@email.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: true,
      },
      {
            name: 'Jonh Doe',
            email: 'jonh@email.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: false,
      },
      {
            name: 'Maksym Pavliv',
            email: 'maksym@email.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: false,
      },
];

export default users;