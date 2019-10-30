import Matricula from '../models/Matricula';
import Plano from '../models/Plano';
import Student from '../models/Student';

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
    console.log(priceFinal);
    const mantricula = await Matricula.create({
      student_id: student,
      plan_id: plan,
      price: priceFinal,
    });

    return res.status(200).json(mantricula);
  }
}

export default new MatriculaController();
