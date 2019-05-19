var Test = require('../config/testConfig.js')
var ExerciseC6CApp = artifacts.require('ExerciseC6CApp')
contract('ExerciseC6C', async accounts => {
  var config
  var exerciseC6CApp
  before('setup contract', async () => {
    config = await Test.Config(accounts)
    exerciseC6CApp = await ExerciseC6CApp.new(config.exerciseC6C.address)
  })

  it('can register Employee, add sale and calculate bonus', async () => {
    // ARRANGE
    let employee = {
      id: 'test1',
      isAdmin: false,
      address: config.testAddresses[0]
    }
    let sale = 400
    let expectedBonus = parseInt(sale * 0.07)

    // ACT
    await config.exerciseC6C.registerEmployee(
      employee.id,
      employee.isAdmin,
      employee.address
    )
    await exerciseC6CApp.addSale(employee.id, 400)
    let bonus = await config.exerciseC6C.getEmployeeBonus.call(employee.id)

    // ASSERT
    assert.equal(
      bonus.toNumber(),
      expectedBonus,
      'Calculated bonus is incorrect incorrect'
    )
  })
})
