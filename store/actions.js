export const updateInputValue = ({ commit }, number) => {
  commit('updateInputValue', { number: number })
};

export const clearValue = ({ commit }) => {
  commit('clearValue')
};