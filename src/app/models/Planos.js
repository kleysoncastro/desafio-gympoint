import Sequelize, { Model } from 'sequelize';

class Planos extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        active: Sequelize.BOOLEAN,
      },
      { sequelize }
    );
  }
}

export default Planos;
