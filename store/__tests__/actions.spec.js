import * as actions from '../actions'

describe("updateInputValue", () => {
  it("call updateInputValue mutations", () => {
    const commit = jest.fn()
    const number = 3
    actions.updateInputValue({ commit }, number)
    expect(commit).toHaveBeenCalledWith("updateInputValue", { number })
  })
})

describe("clearResultValue", () => {
  it("call clearResultValue mutations", () => {
    const commit = jest.fn()
    actions.clearResultValue({ commit })
    expect(commit).toHaveBeenCalledWith("clearResultValue")
  })
})