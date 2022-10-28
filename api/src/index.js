import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import admController from './controller/admController.js';
import categoriaController from './controller/categoriaController.js';
import artistasController from './controller/artistasController.js';
import produtosController from './controller/produtoController.js';
import usuarioController from './controller/usuarioController.js';
import musicaController from './controller/musicaController.js';
import enderecoController from './controller/enderecoController.js';

const router = express();
router.use(cors());
router.use(express.json());
router.use(admController);
router.use(categoriaController);
router.use(artistasController);
router.use(produtosController);
router.use(usuarioController);
router.use(musicaController);
router.use(enderecoController);

router.use('/storage/produtos', express.static('storage/produtos'));
router.use('/storage/artista', express.static('storage/artista'));
router.use('/storage/usuario', express.static('storage/usuario'));

router.listen(process.env.PORT, () => console.log(`Server online na porta: ${process.env.PORT}`))
