interface State {
  count: number;
}

export const state: State = {
  count: 0
};

type Getters<S, G> = {
  [K in keyof G]: (state: S) => G[K];
};

interface IGetters {
  double: number;
  expo2: number;
}

export const getters: Getters<State, IGetters> = {
  double: state => state.count * 2,
  expo2: state => state.count ** 2
};

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void;
};

interface IMutations {
  increment: void;
  setCount: number;
}

export const mutations: Mutations<State, IMutations> = {
  increment(state) {
    state.count++;
  },
  setCount(state, count) {
    state.count = count;
  }
};
