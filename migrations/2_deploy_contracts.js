const ExerciseC6A = artifacts.require('ExerciseC6A')
const ExerciseC6B = artifacts.require('ExerciseC6B')
const ExerciseC6C = artifacts.require('ExerciseC6C')
const ExerciseC6D = artifacts.require('ExerciseC6D')

module.exports = function (deployer) {
  deployer.deploy(ExerciseC6A).then(function () {
    console.log('Deployed ContractA Address:', ExerciseC6A.address)
  })
  deployer.deploy(ExerciseC6B).then(function () {
    console.log('Deployed ContractB Address:', ExerciseC6B.address)
  })
  deployer.deploy(ExerciseC6C).then(function () {
    console.log('Deployed ContractC Address:', ExerciseC6C.address)
  })
  deployer.deploy(ExerciseC6D).then(function () {
    console.log('Deployed ContractD Address:', ExerciseC6D.address)
  })
}
