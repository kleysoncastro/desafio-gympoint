/*
 * class para matricular aluno em um determinado
 * plano existente,
 * quano cadastro bem sucedido, veeculua estudante na table
 * checkins usando student_id como chave relacão.
 */

import Matricula from '../models/Matricula';
import Plano from '../models/Plano';
import Student from '../models/Student';
import Checkin from '../models/Checkin';

class MatriculaController {
  async store(req, res) {
    const { student_id: student, plan_id: plan } = req.body;

    const exiPlan = await Plano.findByPk(plan);
    const exiStudent = await Student.findByPk(student);

    if (!exiPlan || !exiStudent) {
      if (!exiPlan) {
        return res.status(400).json({ erro: 'Este plano de não existe!' });
      }
      return res.status(400).json({ erro: 'Este Aluno não existe!' });
    }

    const { duration, price } = exiPlan;

    const priceFinal = (Number(duration) / 30) * Number(price);

    const mantricula = await Matricula.create({
      student_id: student,
      plan_id: plan,
      price: priceFinal,
    });

    const ativaCheckin = await Checkin.create({ student_id: student });

    return res.status(200).json(mantricula);
  }
}

export default new MatriculaController();
