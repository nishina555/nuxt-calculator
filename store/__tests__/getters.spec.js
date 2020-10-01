import * as getters from '../getters'

let calculator = {
  resultValue: 5,
  inputValue: 3,
  operator: "",
  showResult: false
}

const state = { calculator }

describe("displayValue", () => {
  it("show inputValue", () => {
    state.calculator.showResult = false
    const value = getters.displayValue(state)
    expect(value).toEqual(state.calculator.inputValue)
  }),
  it("show resultValue", () => {
    state.calculator.showResult = true
    const value = getters.displayValue(state)
    expect(value).toEqual(state.calculator.resultValue)
  })
})