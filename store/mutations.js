export const updateInputValue = (state, payload) => {
  state.calculator.inputValue = state.calculator.inputValue * 10 + payload.number
}

export const clearResultValue = (state) => {
  state.calculator.resultValue = 0
}

export const clearInputValue = (state) => {
  state.calculator.inputValue = 0
}

export const showResult = (state) => {
  state.calculator.showResult = true
}

export const showInput = (state) => {
  state.calculator.showResult = false
}

export const calculate = (state) => {
  if (state.calculator.operator === "plus") {
    state.calculator.resultValue += state.calculator.inputValue
  } else if (state.calculator.operator === "minus") {
    state.calculator.resultValue -= state.calculator.inputValue
  } else {
    state.calculator.resultValue = state.calculator.inputValue
  }
}

export const updateOperator = (state, payload) => {
  state.calculator.operator = payload.operator
}

export const clearOperator = (state) => {
  state.calculator.operator = ""
}