import Sequelize from 'sequelize';
import Student from '../app/models/Student';
import User from '../app/models/User';
import Plano from '../app/models/Plano';
import Matricula from '../app/models/Matricula';
import Checkin from '../app/models/Checkin';
import databaseConfig from '../config/database';

const models = [Student, User, Plano, Matricula, Checkin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // percorre o array models e chama o metodo init
    models.map(model => model.init(this.connection));
  }
}

// essa class deve ser importada em App
export default new Database();
