import {
  ReactNode,
  ReducerState,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export const initialState = {
  county: {
    name: "",
    id: "",
  },
  countyDetailsModal: {
    isOpen: false,
  },
};

type Validate<T extends Record<string, string>> = {
  [Name in keyof T]: Name extends T[Name] ? T[Name] : never;
};

const validator = <
  Key extends string,
  Value extends string,
  Data extends Record<Key, Value>
>(
  data: Validate<Data>
) => data;

export const actionTypes = Object.freeze(
  validator({
    SET_COUNTY: "SET_COUNTY",
    RESET_COUNTY: "RESET_COUNTY",
    OPEN_COUNTY_DETAILS: "OPEN_COUNTY_DETAILS",
    CLOSE_COUNTY_DETAILS: "CLOSE_COUNTY_DETAILS",
  })
);

export type ActionType = keyof typeof actionTypes;

type IAction = {
  type: ActionType;
  payload?: any;
};

export const AppContext = createContext({
  state: initialState,
  dispatch: (() => {}) as React.Dispatch<IAction>,
});

const reducer = (
  state: typeof initialState,
  action: IAction
): typeof initialState => {
  switch (action.type) {
    case actionTypes.SET_COUNTY:
      return {
        ...state,
        county: {
          name: action.payload.name,
          id: action.payload.id,
        },
      };
    case actionTypes.RESET_COUNTY:
      return {
        ...state,
        county: initialState.county,
      };
    case actionTypes.OPEN_COUNTY_DETAILS:
      return {
        ...state,
        countyDetailsModal: {
          ...state.countyDetailsModal,
          isOpen: true,
        },
      };
    case actionTypes.CLOSE_COUNTY_DETAILS:
      return {
        ...state,
        countyDetailsModal: {
          ...state.countyDetailsModal,
          isOpen: false,
        },
      };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState as ReducerState<typeof reducer>
  );
  const contextState = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
