import Sequelize, { Model } from 'sequelize';

class Matricula extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATEONLY,
        end_date: Sequelize.DATEONLY,
        price: Sequelize.FLOAT,
      },
      { sequelize }
    );
  }
}

export default Matricula;
