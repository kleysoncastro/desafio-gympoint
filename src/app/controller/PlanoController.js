import Planos from '../models/Planos';

class PlanoController {
  async store(req, res) {
    const { title, duration, price } = req.body;

    const existPlano = await Planos.findOne({ where: { title } });

    if (existPlano) {
      return res.status(400).json({ erro: 'Este plano ja existe' });
    }

    const cadastroPlano = await Planos.create(req.body);

    return res.status(200).json({ title, duration, price });
  }

  async index(req, res) {
    const teste = await Planos.findAll();
    return res.json(teste);
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
    res.json({ msg: true });
  }
}

export default new PlanoController();
