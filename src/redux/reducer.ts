export function counterReducer(state = 0, action: { type: string; payload: any }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENT_BY_AMOUNT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export const selectCount = (state: number) => state;
