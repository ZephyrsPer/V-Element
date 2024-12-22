import { describe, expect, test, vi, Mocked } from 'vitest'
import { testFn, request } from './example'
import axios from 'axios'
vi.mock('axios')
const mockAxios = axios as Mocked<typeof axios>

test('example', () => {
  const name = 'World'
  expect(name).toBe('World')
  expect(1 + 1).toBe(2)
})

// cb test
// mock

describe('functions', () => {
  test('create a mock Function', () => {
    const cb = vi.fn()
    testFn(11, cb)
    expect(cb).toHaveBeenCalled()
    // expect(cb).toHaveBeenCalledWith(12)
  })

  test('spy on methods', () => {
    const obj = {
      foo() {
        return 'bar'
      },
    }
    const spy = vi.spyOn(obj, 'foo')
    obj.foo()
    expect(spy).toHaveBeenCalled()
  })

  test('mock module', async () => {
    mockAxios.get.mockImplementation(() => {
      return Promise.resolve({
        data: 'mock data',
      })
    })
    const res = await request()
    expect(res).toBe('mock data')
  })
})
