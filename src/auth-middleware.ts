import * as jwt from 'jwt-then';

const initAuthMiddleware = ({ config, logger }) => {
  const verifyToken = async (req, res, next): Promise<any> => {
    // check header or url parameters or post parameters for token
    if (!req.headers.authorization) {
      return res.status(403).send({ message: 'No token provided.' });
    }
  
    const token: string = req.headers.authorization.split(' ')[1];
  
    if (!token) {
      return res.status(403).send({ message: 'No token provided.' });
    }
  
    try {
      // verifies secret and checks exp
      const decoded = await jwt.verify(token, config.service.jwt.encryption);
      req.email = decoded.email;
      next();
    } catch (err) {
      logger.log('error', err);
      return res.status(403).send({ message: 'Invalid token provided.' });
    }
  };

  return verifyToken;
};

export default initAuthMiddleware;