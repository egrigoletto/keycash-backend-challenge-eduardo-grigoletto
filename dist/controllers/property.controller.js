"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.createProperty = exports.getPropertyById = exports.getPropertyList = void 0;
var typeorm_1 = require("typeorm");
var Property_1 = require("../entity/Property");
var property_validators_1 = require("../schema/validators/property.validators");
var createFilter = function (garageVacancys, propertyMeterage, rooms) {
    var vacancyFilter = {};
    var propertyMeterageFilter = {};
    var roomsFilter = {};
    if (garageVacancys)
        vacancyFilter = { garageVacancys: garageVacancys };
    if (propertyMeterage)
        propertyMeterageFilter = { propertyMeterage: propertyMeterage };
    if (rooms)
        roomsFilter = { rooms: rooms };
    return __assign(__assign(__assign({}, vacancyFilter), propertyMeterageFilter), roomsFilter);
};
var getPropertyList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, garageVacancys, propertyMeterage, rooms, results, results;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                error = (0, property_validators_1.propertyFiltersValidators)(req.query).error;
                if (error) {
                    return [2 /*return*/, res.status(409).json({
                            validationError: error.message
                        })];
                }
                _a = req.query, garageVacancys = _a.garageVacancys, propertyMeterage = _a.propertyMeterage, rooms = _a.rooms;
                if (!req.query) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Property_1.Property).find({
                        where: __assign({}, createFilter(garageVacancys, propertyMeterage, rooms)),
                        order: {
                            venueValue: "DESC",
                        }
                    })];
            case 1:
                results = _b.sent();
                if (results)
                    return [2 /*return*/, res.json(results)];
                else
                    return [2 /*return*/, res.json([])];
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, (0, typeorm_1.getRepository)(Property_1.Property).find()];
            case 3:
                results = _b.sent();
                if (results)
                    return [2 /*return*/, res.json(results)];
                else
                    return [2 /*return*/, res.json([])];
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPropertyList = getPropertyList;
var getPropertyById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Property_1.Property).findOne(id)];
            case 1:
                results = _a.sent();
                if (results)
                    return [2 /*return*/, res.json(results)];
                else
                    return [2 /*return*/, res.json([])];
                return [2 /*return*/];
        }
    });
}); };
exports.getPropertyById = getPropertyById;
var createProperty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, propertyRepository, newUser, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = (0, property_validators_1.propertyCreateValidators)(req.body).error;
                if (error) {
                    return [2 /*return*/, res.status(409).json({
                            validationError: error.message
                        })];
                }
                propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
                return [4 /*yield*/, propertyRepository.create(req.body)];
            case 1:
                newUser = _a.sent();
                return [4 /*yield*/, propertyRepository.save(newUser)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createProperty = createProperty;
var updateProperty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, id, body, propertyRepository, property, updatedProperty;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = (0, property_validators_1.propertyUpdateValidators)(req.body).error;
                if (error) {
                    return [2 /*return*/, res.status(409).json({
                            validationError: error.message
                        })];
                }
                id = req.params.id;
                body = req.body;
                propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
                return [4 /*yield*/, propertyRepository.findOne(id)];
            case 1:
                property = _a.sent();
                if (property) {
                    updatedProperty = propertyRepository.merge(property, body);
                    propertyRepository.save(property);
                    return [2 /*return*/, res.json(updatedProperty)];
                }
                return [2 /*return*/, res.status(404).json({
                        message: "The property doesn't exist"
                    })];
        }
    });
}); };
exports.updateProperty = updateProperty;
var deleteProperty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, propertyRepository, property, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
                return [4 /*yield*/, propertyRepository.findOne(id)];
            case 1:
                property = _a.sent();
                if (property) {
                    results = propertyRepository.delete(id);
                    return [2 /*return*/, res.status(204).json(results)];
                }
                return [2 /*return*/, res.status(404).json({
                        message: "The property doesn't exist"
                    })];
        }
    });
}); };
exports.deleteProperty = deleteProperty;
