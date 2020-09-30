export const updateInputValue = ({ commit }, number) => {
  commit('updateInputValue', { number: number })
};

export const clearValue = ({ commit }) => {
  commit('clearValue')
};

export const showResult = ({ commit }) => {
  commit('showResult')
};

export const showInput = ({ commit }) => {
  commit('showInput')
};