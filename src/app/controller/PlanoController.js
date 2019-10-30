import Planos from '../models/Plano';

class PlanoController {
  async store(req, res) {
    const { title, duration, price } = req.body;

    const existPlano = await Planos.findOne({ where: { title } });

    if (existPlano) {
      return res.status(400).json({ erro: 'Este plano ja existe' });
    }

    await Planos.create(req.body);

    return res.status(200).json({ title, duration, price });
  }

  async index(req, res) {
    const listPlanos = await Planos.findAll();
    return res.status(200).json(listPlanos);
  }

  async update(req, res) {
    const { id } = req.query;

    const findPlano = await Planos.findByPk(id);

    if (!findPlano) {
      return res.status(400).json({ erro: 'Plano nao encontrado!' });
    }

    const newPlano = await findPlano.update(req.body);

    return res.status(200).json(newPlano);
  }

  async delete(req, res) {
    const { active } = req.query;
    const { id } = req.params;
    const findPlanos = await Planos.findByPk(id);

    if (!findPlanos) {
      return res.status(400).json({ erro: 'Plano não encontrado' });
    }

    findPlanos.active = active;
    await findPlanos.save();

    return res.json(findPlanos);
  }
}

export default new PlanoController();
