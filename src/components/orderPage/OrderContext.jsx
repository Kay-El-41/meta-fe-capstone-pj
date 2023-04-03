import { createContext, useContext, useReducer } from 'react'
import { onlineMenu } from '../../onlineData'

const OrderContext = createContext()

export const OrderContextProvider = ({ children }) => {
  const initialState = {
    meals: [onlineMenu],
    orderedMeals: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        const isExisted = state.orderedMeals.find(
          (item) => item.id === action.payload.id
        )
        if (isExisted) {
          return state
        } else {
          return {
            ...state,
            orderedMeals: [...state.orderedMeals, { ...action.payload }],
          }
        }
      case 'REMOVE_ORDER':
        return {
          ...state,
          orderedMeals: state.orderedMeals.filter(
            (item) => item.id !== action.payload
          ),
        }
      case 'CLEAR_ORDERS':
        return { ...state, orderedMeals: (state.orderedMeals = []) }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const data = { state, dispatch }

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>
}

export const OrderContextCustom = () => useContext(OrderContext)
