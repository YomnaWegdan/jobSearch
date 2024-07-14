import { Router } from "express";
import { addCompany } from "./company.controller";

const companyRouter = Router();
companyRouter.post('/' , addCompany)