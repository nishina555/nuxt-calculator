export const calculator = state => state.calculator;

export const displayValue = state => state.calculator.showResult ? state.calculator.resultValue : state.calculator.inputValue;

// export const incompletedTodos = state =>state.todos.filter(todo => !todo.is_completed);

// export const completedTodos = state => state.todos.filter(todo => todo.is_completed);