import { Router } from "express";
import { addCompany } from "./company.controller.";
import { validate } from "../../middlewares/validate";
import { addCompanySchema } from "./company.validation";

const companyRouter = Router();
companyRouter.post('/' , validate(addCompanySchema),  addCompany)