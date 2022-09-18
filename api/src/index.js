import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import admController from './controller/admController.js'

const router = express();
router.use(cors());
router.use(express.json());
router.use(admController);

router.use('/storage/produtos', express.static('storage/produtos'))

router.listen(process.env.PORT, () => console.log(`Server online na porta: ${process.env.PORT}`))
