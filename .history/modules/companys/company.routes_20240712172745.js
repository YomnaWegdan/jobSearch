import { Router } from "express";
import { addCompany } from "./company.controller";
import { validate } from "../../middlewares/validate";

const companyRouter = Router();
companyRouter.post('/' , validate(add),  addCompany)