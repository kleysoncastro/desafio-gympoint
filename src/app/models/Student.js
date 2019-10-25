import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.DATEONLY,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },

      { sequelize }
    );
  }
}

export default Student;
