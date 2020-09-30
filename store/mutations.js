export const updateInputValue = (state, payload) => {
  state.calculator.inputValue = state.calculator.inputValue * 10 + payload.number
}