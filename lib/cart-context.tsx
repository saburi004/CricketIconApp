"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  image: string
  quantity: number
  teamName: string
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<
  | {
      state: CartState
      dispatch: React.Dispatch<CartAction>
    }
  | undefined
>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
          total: state.total + action.payload.price * action.payload.quantity,
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price * action.payload.quantity,
      }
    }
    case "REMOVE_ITEM":
      const itemToRemove = state.items.find((item) => item.id === action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0),
      }
    case "UPDATE_QUANTITY": {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (!item) return state

      const quantityDiff = action.payload.quantity - item.quantity

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
        total: state.total + item.price * quantityDiff,
      }
    }
    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  })

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

