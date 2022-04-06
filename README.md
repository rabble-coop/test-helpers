# test-helpers
A test library.

To use this library:

1. Add the following to your `package.json` file.

```json
"devDependencies": {
    // You can provide a version which corresponds to a Tag
    // on the repository by appending `#tagname`, such as `#1.0.0`.
    "test-helpers": "github:rabble-coop/test-helpers" 
}
```

2. Run `npm i`.

3. Create a file for your project, such as `index.js` with the following contents:

```js
import { say_hello } from 'test-helpers';

say_hello();
```

4. Run `node index.js`. You should see "hello" in the console.