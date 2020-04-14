# auth-middleware

Auth-middleware is a npm package for verify the authentication.

## Installation

```bash
npm i stormtech-authmiddleware
```

## Usage

```javascript
import authMiddleware from 'stormtech-authmiddleware'

/*
 * config = file that save the encryption jwt key
 * logger = instance to log the error
 */
 
const auth = authMiddleware.initAuthMiddleware({
  config,
  logger,
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)