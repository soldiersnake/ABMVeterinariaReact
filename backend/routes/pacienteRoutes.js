import express from 'express';
const router = express.Router();
import { agregarPacientes, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente  } from '../controllers/pacienteController.js';
import checkAuth from '../middleware/AuthMiddleware.js';

router.route("/")
    .post(checkAuth, agregarPacientes)
    .get(checkAuth, obtenerPacientes);

router
    .route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente)

export default router;