import { appError } from "../utilities/appError.js";

export const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return next(new appError('Unauthorized: Insufficient permissions', 403));
        }
        next();
    };
};


export const isCompanyOwner = async (req, res, next) => {
    const company = await CompanyModel.findById(req.params.id);
    if (!company) {
        return next(new appError('Company not found', 404));
    }
    if (company.companyHr.toString() !== req.user.id) {
        return next(new appError('Unauthorized: Only the company owner can perform this action', 403));
    }
    next();
};