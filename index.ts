import express from "express";
const swaggerize = require("swaggerize-express-ts");

const app = express();
const PORT = 8000;

/* ROUTES */
const routesFromSwaggerExpress = swaggerize({
	api: require("./api/foobar-api-spec.json"),
	docspath: "/api-docs",
	handlers: "./src/handlers",
});

app.use(express.json()); // https://cloudnweb.dev/2019/07/configuring-babel-for-node-js-express-server/
app.use(express.urlencoded());

app.use("/", routesFromSwaggerExpress);
/* END ROUTES */

app.listen(PORT, () => {
	// tslint:disable-next-line:no-console
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
