export const updateInputValue = ({ commit }, number) => {
  // { number } は {number: number}の略
  // payloadを利用しているため、Objectを引数にしている
  commit('updateInputValue', { number })
};

export const clearResultValue = ({ commit }) => {
  commit('clearResultValue')
};

export const clearInputValue = ({ commit }) => {
  commit('clearInputValue')
};

export const showResult = ({ commit }) => {
  commit('showResult')
};

export const showInput = ({ commit }) => {
  commit('showInput')
};

export const calculate = ({ commit }) => {
  commit('calculate')
};

export const updateOperator = ({ commit }, operator) => {
  commit('updateOperator', { operator })
};

export const clearOperator = ({ commit }) => {
  commit('clearOperator')
};