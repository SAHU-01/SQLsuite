## Getting Started

### Install project (using Docker)

For development

```bash
docker build --no-cache -t sql-editor-dev .

docker run -p 3000:3000 sql-editor-dev
```

For Production

```bash
docker build --no-cache -t sql-editor-prod -f Dockerfile.production .

# Test prod locally
docker run -p 3000:3000 sql-editor-prod
```

### Install project (using npm or yarn)

```bash
npm i
# or
yarn
```

Make sure to have sqlite3 installed by default on your device otherwise the api endpoint `/run` won't work.

```bash
# Install SQLite3
sudo apt-get install sqlite3
```

Next, run the development server:

```bash
npm run dev
or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on http://localhost:3000/api/${endpoint}. This endpoint can be edited in `pages/api/{endpoint}.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Learn More
## API Docs

To learn more about Next.js, take a look at the following resources:
### `/run`

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
Use this endpoint to run SQL code online.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
### NodeJS Example to Execute API Call?

## Deploy on Vercel
```js
var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  code: "SELECT first_name, last_name, age  FROM CurrentTable;",
  currentTable:
    "customer_id,first_name,last_name,age,country\n1,John,Doe,31,USA\n2,Robert,Luna,22,USA\n3,David,Robinson,22,UK\n4,John,Reinhardt,25,UK",
  // Current Table can be CSV content
});
var config = {
  method: "get",
  url: "https://sqlsuite.onrender.com/api/runn",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Sample Output

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```json
{
  "success": true,
  "data": "John,Doe,31\nRobert,Luna,22\nDavid,Robinson,22\nJohn,Reinhardt,25\n",
  "jobid": "b8268795-c694-4092-9941-5ae52077d58d"
}
```