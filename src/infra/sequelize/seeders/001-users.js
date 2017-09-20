const bcrypt = require('bcrypt')

module.exports = {
  up: function (queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync()
    const password = bcrypt.hashSync('pass', salt)

    return queryInterface.bulkInsert('users', [{
      id: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b',
      firstName: 'Test',
      lastName: 'Developer',
      middleName: 'Super Dev',
      email: 'testdev@gmail.com',
      password: password,
      roleId: 1,
      verificationCode: 'ba1bfda5-1c27-4755-bd23-36c7a4dbfd2b',
      isVerified: 1,
      isDeleted: 0,
      createdBy: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
