"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyFiltersValidators = exports.propertyUpdateValidators = exports.propertyCreateValidators = void 0;
var joi_1 = __importDefault(require("joi"));
var validTypes = ['casa', 'apartamento', 'terreno', 'sobrado', 'prédio', 'galpão'];
var propertyCreateValidators = function (params) {
    var _a;
    var validator = joi_1.default.object({
        type: (_a = joi_1.default.any())
            .valid.apply(_a, validTypes).required(),
        description: joi_1.default.string()
            .min(5)
            .max(1000)
            .required(),
        address: joi_1.default.string()
            .min(4)
            .max(400)
            .required(),
        addressNumber: joi_1.default.string()
            .required(),
        addressComplement: joi_1.default.string()
            .allow(null)
            .optional(),
        addressNeighborhood: joi_1.default.string()
            .min(5)
            .max(400)
            .required(),
        cep: joi_1.default.string()
            .regex(/[0-9]{8}/)
            .required(),
        rooms: joi_1.default.number()
            .allow(null)
            .optional(),
        garageVacancys: joi_1.default.number()
            .allow(null)
            .optional(),
        propertyMeterage: joi_1.default.number()
            .required(),
        venueValue: joi_1.default.number()
            .required(),
        rentValue: joi_1.default.number()
            .required(),
    });
    var validations = validator.validate({
        type: params.type,
        description: params.description,
        address: params.address,
        addressNumber: params.addressNumber,
        addressComplement: params.addressComplement,
        addressNeighborhood: params.addressNeighborhood,
        cep: params.cep,
        rooms: params.rooms,
        garageVacancys: params.garageVacancys,
        propertyMeterage: params.propertyMeterage,
        venueValue: params.venueValue,
        rentValue: params.rentValue,
    });
    return validations;
};
exports.propertyCreateValidators = propertyCreateValidators;
var propertyUpdateValidators = function (params) {
    var _a;
    var validator = joi_1.default.object({
        type: (_a = joi_1.default.any())
            .valid.apply(_a, validTypes).optional(),
        description: joi_1.default.string()
            .min(5)
            .max(1000)
            .optional(),
        address: joi_1.default.string()
            .min(5)
            .max(400)
            .optional(),
        addressNumber: joi_1.default.string()
            .optional(),
        addressComplement: joi_1.default.string()
            .allow(null)
            .optional(),
        addressNeighborhood: joi_1.default.string()
            .min(5)
            .max(400)
            .optional(),
        cep: joi_1.default.string()
            .regex(/[0-9]{8}/)
            .optional(),
        rooms: joi_1.default.number()
            .allow(null)
            .optional(),
        garageVacancys: joi_1.default.number()
            .allow(null)
            .optional(),
        propertyMeterage: joi_1.default.number()
            .optional(),
        venueValue: joi_1.default.number()
            .optional(),
        rentValue: joi_1.default.number()
            .optional(),
    });
    var validations = validator.validate({
        type: params.type,
        description: params.description,
        address: params.address,
        addressNumber: params.addressNumber,
        addressComplement: params.addressComplement,
        addressNeighborhood: params.addressNeighborhood,
        cep: params.cep,
        rooms: params.rooms,
        garageVacancys: params.garageVacancys,
        propertyMeterage: params.propertyMeterage,
        venueValue: params.venueValue,
        rentValue: params.rentValue,
    });
    return validations;
};
exports.propertyUpdateValidators = propertyUpdateValidators;
var propertyFiltersValidators = function (params) {
    var validator = joi_1.default.object({
        rooms: joi_1.default.number()
            .optional(),
        garageVacancys: joi_1.default.number()
            .optional(),
        propertyMeterage: joi_1.default.number()
            .optional(),
    });
    var validations = validator.validate({
        rooms: params.rooms,
        garageVacancys: params.garageVacancys,
        propertyMeterage: params.propertyMeterage,
    });
    return validations;
};
exports.propertyFiltersValidators = propertyFiltersValidators;
