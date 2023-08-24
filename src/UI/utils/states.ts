import {
  state,
  stateProp,
  stateProps,
  stateAction,
  stateDispatch,
} from '../interfaces/Store/StateInterface';

export const getReducer = <S>(state: state<S>, action: stateAction<S>): state<S> => ({
  ...state,
  [action.prop]: action.payload,
});

export const initState = <S>(state: state<S>, dispatcher: stateDispatch<S>): stateProps<S> => {
  return {
    ...state,
    get: (prop: stateProp<S>) => state[prop],
    set: (prop: stateProp<S>, payload: S[stateProp<S>]) => dispatcher({ prop, payload })
  }
};
