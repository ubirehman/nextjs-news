import jwt from 'jsonwebtoken';

export const getJsonWebToken = (email: string) => {
  return jwt.sign(
    {
      data: email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

export const verifyJsonWebToken = (email: string, token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      console.log(err);
      return err;
    }
    return decoded;
  });
};
