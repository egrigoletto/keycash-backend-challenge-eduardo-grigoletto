import { Router } from 'express'
import {
  getPropertyById,
  getPropertyList,
  createProperty,
  updateProperty,
  deleteProperty,
} from '../controllers/property.controller'; 

const router = Router()

router.get('/property', getPropertyList);
router.get('/property/:id', getPropertyById)
router.post('/property',createProperty)
router.put('/property/:id', updateProperty)
router.delete('/property/:id', deleteProperty)

export default router