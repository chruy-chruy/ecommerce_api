const { makeUserEntity } = require('../entities/user/index')

describe('module Add User test', () => {
  test('Check username', () => {
    let data = {
      username: null,
      password: '123',
      first_name: 'steve',
      last_name: 'camsa',
      role: 'Customer',
      address: 'kesese',
    }
    const check = () => makeUserEntity({ data })
    expect(check).toThrow('Username is required.')
  })

  test('Check password', () => {
    let data = {
      username: 'steb',
      password: null,
      first_name: 'steve',
      last_name: 'camsa',
      role: 'Customer',
      address: 'kesese',
    }
    const check = () => makeUserEntity({ data })
    expect(check).toThrow('Password is required.')
  })

  test('Check first_name', () => {
    let data = {
      username: 'steb',
      password: '123',
      first_name: null,
      last_name: 'camsa',
      role: 'Customer',
      address: 'kesese',
    }
    const check = () => makeUserEntity({ data })
    expect(check).toThrow('First Name is required.')
  })

  test('Check last_name', () => {
    let data = {
      username: 'steb',
      password: '123',
      first_name: 'steve',
      last_name: null,
      role: 'Customer',
      address: 'kesese',
    }
    const check = () => makeUserEntity({ data })
    expect(check).toThrow('Last Name is required.')
  })

  test('Check role', () => {
    let data = {
      username: 'steb',
      password: '123',
      first_name: 'steve',
      last_name: 'camsa',
      role: null,
      address: 'kesese',
    }
    const check = () => makeUserEntity({ data })
    expect(check).toThrow('User Role is required.')
  })

  test('Check address', () => {
    let data = {
      username: 'steb',
      password: '123',
      first_name: 'steve',
      last_name: 'camsa',
      role: 'customer',
      address: null,
    }
    const check = () => makeUserEntity({ data })

    expect(check).toThrow('address is required.')
  })
})
