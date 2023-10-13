const server = require('../index');
const request = require('supertest');
const { User, sequelize } = require('../src/db');

const user = {
  name: 'Joshua Ceballos',
  email: 'joshuaceballos@gmail.com',
  password: '321456123',
  address: 'San Martin 215',
  code: '833097'
};

beforeAll(async () => {
  try {
    console.log('Its working');
    return await sequelize.authenticate();
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});

describe('if there is a get request to /api/codes', () => {
  test('it should return a 200 status code', async (done) => {
    const response = await request(server).get('/api/codes');
    expect(response.status).toBe(200);
    done();
  });

  afterAll(async () => {
    await User.destroy({ where: { name: user.name } });
  });
});
