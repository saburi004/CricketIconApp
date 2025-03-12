"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
  size: string
  image: string
  teamName: string
}

interface WishlistState {
  items: WishlistItem[]
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_WISHLIST" }

const initialState: WishlistState = {
  items: [],
}

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
}>({
  state: initialState,
  dispatch: () => null,
})

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "ADD_ITEM": {
      // Check if item already exists
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      if (existingItemIndex >= 0) {
        return state
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }
    case "CLEAR_WISHLIST": {
      return {
        ...state,
        items: [],
      }
    }
    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState)

  return <WishlistContext.Provider value={{ state, dispatch }}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => useContext(WishlistContext)

