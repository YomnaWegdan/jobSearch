import { Router } from "express";
import { addCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema } from "./company.validation.js";

export default const companyRouter = Router();
companyRouter.post('/' , validate(addCompanySchema),  addCompany)