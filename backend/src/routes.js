import { Router } from "express";

import OngController from "./controllers/OngController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const routes = new Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/incident", IncidentController.index);
routes.post("/incident", IncidentController.store);
routes.delete("/incident/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/session", SessionController.store);

export default routes;
