import { useState, createContext, ReactNode } from 'react'
import { Produto, ProductContextType } from '../services/productList'

export const ProductContext = createContext< ProductContextType | undefined >(undefined)

type ProductProviderProps = {
  children: ReactNode
}

export default function ProductProvider({ children }:ProductProviderProps) {
  const [prods, setProds] = useState<Produto[]>([])
  const [modalIsOpen, setModalISOpen] = useState<boolean>(false)
  const [modalUrl, setModalUrl] = useState<string>('')

  const ProductRegisteation = (list:Produto[]) => {
    setProds(list)
    let marketStorage = JSON.parse(localStorage.getItem('@elfa-market') || '[]')
    marketStorage = list
    localStorage.setItem('@elfa-market', JSON.stringify(marketStorage))
  }

  const ProductRemove = (item:Produto) => {
    const filteredList = prods.filter((listItem) => listItem.id !== item.id)
    setProds(filteredList)
    localStorage.setItem('@elfa-market', JSON.stringify(filteredList))
  }

  return (
    <ProductContext.Provider value={{ 
      prods, 
      setProds, 
      ProductRegisteation, 
      ProductRemove, 
      modalIsOpen, 
      setModalISOpen,
      modalUrl, 
      setModalUrl
    }}>
      {children}
    </ProductContext.Provider>
  )
}
