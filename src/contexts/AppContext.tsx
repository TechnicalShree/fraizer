import {
  ReactNode,
  ReducerState,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

// Define interfaces for your state
interface County {
  name: string;
  id: string;
}

interface CountyDetailsModal {
  isOpen: boolean;
}

interface TagFilter {
  isApplied: boolean;
  appliedOption: string;
  appliedCounties: string[];
}

interface AppState {
  county: County;
  countyDetailsModal: CountyDetailsModal;
  tagFilter: TagFilter;
}

export const initialState: AppState = {
  county: {
    name: "",
    id: "",
  },
  countyDetailsModal: {
    isOpen: false,
  },
  tagFilter: {
    isApplied: false,
    appliedOption: "",
    appliedCounties: [],
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
    APPLY_TAG_FILTER: "APPLY_TAG_FILTER",
    REMOVE_TAG_FILTER: "REMOVE_TAG_FILTER",
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

    case actionTypes.APPLY_TAG_FILTER:
      return {
        ...state,
        tagFilter: {
          ...state.tagFilter,
          isApplied: true,
          appliedOption: action.payload.appliedOption,
          appliedCounties: action.payload.appliedCounties,
        },
      };
    case actionTypes.REMOVE_TAG_FILTER:
      return {
        ...state,
        tagFilter: {
          ...state.tagFilter,
          isApplied: false,
          appliedOption: "",
          appliedCounties: [],
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
