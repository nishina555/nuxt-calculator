import * as mutations from '../mutations'

let calculator = {
  resultValue: 0,
  inputValue: 0,
  operator: "",
  showResult: true
}

let state = { calculator }

describe("updateInputValue", () => {
  it("inputValueが更新されていること", ()=> {
    state.calculator.inputValue = 3
    let inputValue = 5
    mutations.updateInputValue(state, { number: inputValue })
    expect(state.calculator.inputValue).toEqual(35)
  })
})

describe("clearResultValue", () => {
  it("resultValueが初期化されていること", ()=> {
    state.calculator.resultValue = 100
    mutations.clearResultValue(state)
    expect(state.calculator.resultValue).toEqual(0)
  })
})

describe("showResult", () => {
  it("showResultがtrueになること", ()=> {
    state.calculator.showResult = false
    mutations.showResult(state)
    expect(state.calculator.showResult).toBeTruthy();
  })
})

describe("calculate", () => {
  it("operatorがplusの場合、入力値が加算されること", ()=> {
    state.calculator.inputValue = 2
    state.calculator.resultValue = 3
    state.calculator.operator = "plus"
    mutations.calculate(state)
    expect(state.calculator.resultValue).toEqual(5);
  }),
  it("operatorがminusの場合、入力値が減算されること", ()=> {
    state.calculator.inputValue = 2
    state.calculator.resultValue = 3
    state.calculator.operator = "minus"
    mutations.calculate(state)
    expect(state.calculator.resultValue).toEqual(1);
  })
})
