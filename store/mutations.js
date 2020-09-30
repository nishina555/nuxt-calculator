export const updateInputValue = (state, payload) => {
  state.calculator.inputValue = state.calculator.inputValue * 10 + payload.number
}

export const clearValue = (state) => {
  state.calculator.inputValue = 0
  state.calculator.resultValue = 0
}

export const showResult = (state) => {
  state.calculator.showResult = true
}

export const showInput = (state) => {
  state.calculator.showResult = false
}