type Context<S, A, G, M, RS, RG> = {
  commit: Commit<M>;
  state: S;
  dispatch: Dispatch<A>;
  getters: G;
  rootState: RS;
  rootGetters: RG;
};

type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void;
type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any;

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

type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
  [K in keyof A]: (ctx: Context<S, A, G, M, RS, RG>, payload: A[K]) => any;
};

interface IActions {
  asyncIncrement: void;
  asyncMulti: number;
}

export const actions: Actions<State, IActions, IGetters, IMutations> = {
  asyncIncrement({ commit }) {
    commit("increment");
  },
  asyncMulti({ commit, state }, payload) {
    commit("setCount", state.count * payload);
  }
};
