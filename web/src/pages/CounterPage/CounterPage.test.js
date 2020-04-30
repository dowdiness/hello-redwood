import { render, cleanup } from '@testing-library/react'

import CounterPage from './CounterPage'

describe('CounterPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CounterPage />)
    }).not.toThrow()
  })
})
