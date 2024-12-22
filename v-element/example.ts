/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export function testFn(nunmber: number, cb: Function) {
  if (nunmber > 10) {
    cb()
  }
}

import axios from 'axios'

export async function request() {
  const { data } = await axios.get('fake.url')
  return data
}
