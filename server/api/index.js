import { Router } from 'express'

import providers from './providers'

const router = Router()

// Add USERS Routes
router.use(providers)

export default router
