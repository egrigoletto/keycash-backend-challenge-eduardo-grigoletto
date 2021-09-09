import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Property } from '../entity/Property'
import { 
  propertyCreateValidators,
  propertyUpdateValidators,
  propertyFiltersValidators,
} from '../schema/validators/property.validators'

const createFilter = (garageVacancys: any, propertyMeterage: any , rooms: any ) => {
  let vacancyFilter = {}
  let propertyMeterageFilter ={}
  let roomsFilter = {}
  if (garageVacancys) vacancyFilter = { garageVacancys: garageVacancys}
  if (propertyMeterage) propertyMeterageFilter = { propertyMeterage: propertyMeterage }
  if (rooms) roomsFilter = { rooms: rooms }
  return {...vacancyFilter, ...propertyMeterageFilter, ...roomsFilter}
}

export const getPropertyList = async (req: Request, res: Response): Promise<Response> => {
  const { error } = propertyFiltersValidators(req.query)
  if (error) {
    return res.status(409).json({
      validationError: error.message
    })
  }
  const { garageVacancys, propertyMeterage, rooms } = req.query
  if (req.query) {
    const results = await getRepository(Property).find({
      where: {
        ...createFilter(
          garageVacancys,
          propertyMeterage,
          rooms
        )
      },
      order: {
        venueValue: "DESC",
      }
    })
    if (results) return res.json(results)
    else return res.json([])
  } else {
    const results = await getRepository(Property).find()
    if (results) return res.json(results)
    else return res.json([])
  }
}

export const getPropertyById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const results = await getRepository(Property).findOne(id)
  if (results) return res.json(results)
  else return res.json([])
}

export const createProperty = async (req: Request, res: Response): Promise<Response> => {
  const { error } = propertyCreateValidators(req.body)
  if (error) {
    return res.status(409).json({
      validationError: error.message
    })
  }
  const propertyRepository = getRepository(Property)
  const newUser = await propertyRepository.create(req.body)
  const results = await propertyRepository.save(newUser)
  return res.json(results)
}

export const updateProperty = async (req: Request, res: Response): Promise<Response> => {
  const { error } = propertyUpdateValidators(req.body)
  if (error) {
    return res.status(409).json({
      validationError: error.message
    })
  }
  const { id } = req.params
  const { body } = req
  const propertyRepository = getRepository(Property)
  const property = await propertyRepository.findOne(id)
  if (property) {
    const updatedProperty = propertyRepository.merge(property, body)
    propertyRepository.save(property)
    return res.json(updatedProperty)
  }
  return res.status(404).json({
    message: `The property doesn't exist`
  })
}

export const deleteProperty = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const propertyRepository = getRepository(Property)
  const property = await propertyRepository.findOne(id)
  if (property) {
    const results = propertyRepository.delete(id)
    return res.status(204).json(results)
  }
  return res.status(404).json({
    message: `The property doesn't exist`
  })
}