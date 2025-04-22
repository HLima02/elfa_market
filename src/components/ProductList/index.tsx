import { useContext } from 'react'
import { Produto } from '../../services/productList'
import { FaTrashAlt } from "react-icons/fa";
import { ProductContext } from '../../contexts/produtos'
import './style.scss'

type ProdutosList = {
  produtos: Produto[]
}

const ProductList: React.FC<ProdutosList> = ({ produtos }) => {
  const context = useContext(ProductContext)
  if(!context) return
  const {ProductRemove} = context

  return (
    <table className='product_list'>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Marca</td>
          <td className='trash'></td>
        </tr>
      </thead>
      <tbody>
        {produtos.map((item) => (
          <tr key={item.id}>
            <td>{ item.nome }</td>
            <td>{ item.preco }</td>
            <td>{ item.marca.nome}</td>
            <td className='trash' onClick={() => ProductRemove(item)}><FaTrashAlt /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductList