import { Router } from 'express'
import swaggerDocs from '../swagger.json'
import swaggerUi from 'swagger-ui-express'

const router = Router()

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocs))

export default router