import Student from '../models/Student';
import User from '../models/User';

class StudentController {
  async store(req, res) {
    const userAdmin = await User.findOne({ where: { email: req.body.email } });
    const userStudent = await Student.findOne({
      where: { email: req.body.email },
    });

    if (userAdmin || userStudent) {
      if (userAdmin) {
        return res
          .status(400)
          .json({ erro: 'Este email nao pode ser cadastrado..' });
      }

      return res.status(400).json({ erro: 'Email existente' });
    }

    const student = await Student.create(req.body);

    return res.status(200).json(student);
  }
}

export default new StudentController();
