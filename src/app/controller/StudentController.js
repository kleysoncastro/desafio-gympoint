import Student from '../models/Student';
import User from '../models/User';

class StudentController {
  async store(req, res) {
    const { email } = req.body;
    const userAdmin = await User.findOne({ where: { email } });
    const userStudent = await Student.findOne({
      where: { email },
    });

    /*
     * Se encontar email em DB users ou students retorna erro
     */

    if (userAdmin || userStudent) {
      if (userAdmin) {
        return res
          .status(400)
          .json({ erro: 'Este email nao pode ser cadastrado..' });
      }

      return res.status(400).json({ erro: 'Email existente' });
    }

    // criar um studante no DB student

    const student = await Student.create(req.body);

    return res.status(200).json(student);
  }

  async update(req, res) {
    const { student_id: student } = req.query;

    const existId = await Student.findByPk(student);

    if (!existId) {
      return res
        .status(400)
        .json({ erro: 'Esse estudante nao esta cadastrodo' });
    }

    const studentUpdate = await existId.update(req.body);

    return res.json(studentUpdate);
  }
}

export default new StudentController();
