type Marca = {
  id: string,
  nome: string
}

export type Produto = {
  id: string,
  nome: string,
  preco: number,
  descricao?: string,
  image: string,
  marca : Marca
}

export type ProductContextType = {
  prods: Produto[],
  setProds: React.Dispatch<React.SetStateAction<Produto[]>>,
  ProductRegisteation?: any,
  ProductRemove?: any
}