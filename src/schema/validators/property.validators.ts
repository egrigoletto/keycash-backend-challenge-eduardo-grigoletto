import Joi from 'joi'

const validTypes = ['casa', 'apartamento', 'terreno', 'sobrado', 'prédio', 'galpão']

export const propertyCreateValidators = (params: any) => {
  const validator = Joi.object({
  type: Joi.any()
    .valid(...validTypes)
    .required(),
  description: Joi.string()
    .min(5)
    .max(1000)
    .required(),
  address: Joi.string()
    .min(4)
    .max(400)
    .required(),
  addressNumber: Joi.string()
    .required(),
  addressComplement: Joi.string()
    .allow(null)
    .optional(),
  addressNeighborhood: Joi.string()
    .min(5)
    .max(400)
    .required(),
  cep: Joi.string()
    .regex(/[0-9]{8}/)
    .required(),
  rooms: Joi.number()
    .allow(null)
    .optional(),
  garageVacancys: Joi.number()
    .allow(null)
    .optional(),
  propertyMeterage: Joi.number()
    .required(),
  venueValue: Joi.number()
    .required(),
  rentValue: Joi.number()
    .required(),
  })
  const validations = validator.validate({
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
  })
  return validations
}

export const propertyUpdateValidators = (params: any) => {
  const validator = Joi.object({
    type: Joi.any()
    .valid(...validTypes)
    .optional(),
  description: Joi.string()
    .min(5)
    .max(1000)
    .optional(),
  address: Joi.string()
    .min(5)
    .max(400)
    .optional(),
  addressNumber: Joi.string()
    .optional(),
  addressComplement: Joi.string()
    .allow(null)
    .optional(),
  addressNeighborhood: Joi.string()
    .min(5)
    .max(400)
    .optional(),
  cep: Joi.string()
    .regex(/[0-9]{8}/)
    .optional(),
  rooms: Joi.number()
    .allow(null)
    .optional(),
  garageVacancys: Joi.number()
    .allow(null)
    .optional(),
  propertyMeterage: Joi.number()
    .optional(),
  venueValue: Joi.number()
    .optional(),
  rentValue: Joi.number()
    .optional(),
  })
  const validations = validator.validate({
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
  })
  return validations
}

export const propertyFiltersValidators = (params: any) => {
  const validator = Joi.object({
    rooms: Joi.number()
    .optional(),
  garageVacancys: Joi.number()
    .optional(),
  propertyMeterage: Joi.number()
    .optional(),
  })
  const validations = validator.validate({
    rooms: params.rooms,
    garageVacancys: params.garageVacancys,
    propertyMeterage: params.propertyMeterage,
  })
  return validations
}
