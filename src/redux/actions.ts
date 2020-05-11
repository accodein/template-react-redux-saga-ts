export enum ActionsType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC",
}

const increment = () => ({ type: ActionsType.INCREMENT });

const decrement = () => ({ type: ActionsType.DECREMENT });

const incrementByAmount = (value: number) => ({
  type: ActionsType.INCREMENT_BY_AMOUNT,
  payload: value,
});

const incrementAsync = (value: number) => ({
  type: ActionsType.INCREMENT_ASYNC,
  payload: value,
});

export const Actions = {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
};
