import Checkin from '../models/Checkin';

class CheckinController {
  async store(req, res) {
    const { id } = req.params;
    const checkinUpdate = await Checkin.findOne({ where: { student_id: id } });

    const active = await checkinUpdate.update({ active: true });

    return res.json(active);
  }
}

export default new CheckinController();
