export type stateProp<S> = keyof S;

export type state<S> = {
  [prop in stateProp<S>]: S[prop];
};

export type stateProps<S> = state<S> & {
  get: (prop: stateProp<S>) => S[stateProp<S>];
  set: (prop: stateProp<S>, payload: S[stateProp<S>]) => void;
};

export type stateReducer<S> = (state: state<S>, action: stateAction<S>) => state<S>;

export type stateAction<S> = {
  prop: stateProp<S>;
  payload?: S[stateProp<S>];
};

export type stateDispatch<S> = (action: stateAction<S>) => void;

export type stateContext<S> = {
  state: state<S>;
  dispatcher: stateDispatch<S>;
};
