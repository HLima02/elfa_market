import { useContext } from 'react'
import { Produto } from '../../services/productList'
import './style.scss'

type ProdutosList = {
  produtos: Produto[]
}

const ProductList: React.FC<ProdutosList> = ({ produtos }) => {

  return (
    <table className='product_list'>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Marca</td>
        </tr>
      </thead>
      <tbody>
        {produtos.map((item) => (
          <tr key={item.id}>
            <td>{ item.nome }</td>
            <td>{ item.preco }</td>
            <td>{ item.marca.nome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductList