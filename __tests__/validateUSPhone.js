import validateUSPhone from '../lib/validateUSPhone'

describe('validateUSPhone', () => {
  it('should return true for a valid phone number', () => {
    const validator = validateUSPhone('2022243121')
    const validator2 = validateUSPhone('12022243121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
  })

  it('should ignore spaces between numbers', () => {
    const validator = validateUSPhone('202 224 3121')
    const validator2 = validateUSPhone('1 202 224 3121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
  })

  it('should ignore parentheses between numbers', () => {
    const validator = validateUSPhone('(202) 224 3121')
    const validator2 = validateUSPhone('1 (202) 224 3121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
  })

  it('should ignore hyphens between numbers', () => {
    const validator = validateUSPhone('(202) 224-3121')
    const validator2 = validateUSPhone('202-224-3121')
    const validator3 = validateUSPhone('(202)-224-3121')
    const validator4 = validateUSPhone('1 (202) 224-3121')
    const validator5 = validateUSPhone('1 202-224-3121')
    const validator6 = validateUSPhone('1 (202)-224-3121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
    expect(validator3).toBe(true)
    expect(validator4).toBe(true)
    expect(validator5).toBe(true)
    expect(validator6).toBe(true)
  })

  it('should ignore periods between numbers', () => {
    const validator = validateUSPhone('202.224.3121')
    const validator2 = validateUSPhone('(202) 224.3121')
    const validator3 = validateUSPhone('(202).224.3121')
    const validator4 = validateUSPhone('1.202.224.3121')
    const validator5 = validateUSPhone('1 (202) 224.3121')
    const validator6 = validateUSPhone('1.(202).224.3121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
    expect(validator3).toBe(true)
    expect(validator4).toBe(true)
    expect(validator5).toBe(true)
    expect(validator6).toBe(true)
  })

  it('should ignore + before numbers', () => {
    const validator = validateUSPhone('+1.202.224.3121')
    const validator2 = validateUSPhone('+1 (202) 224.3121')
    const validator3 = validateUSPhone('+1.(202).224.3121')
    expect(validator).toBe(true)
    expect(validator2).toBe(true)
    expect(validator3).toBe(true)
  })

  it('should return false if letters are present', () => {
    const validator = validateUSPhone('(202) 224 ABCD')
    const validator2 = validateUSPhone('(202) 224 3121 WXYZ')
    expect(validator).toBe(false)
    expect(validator2).toBe(false)
  })
})
