import { useContext } from 'react'
import { Produto } from '../../services/productList'
import { FaTrashAlt } from "react-icons/fa";
import { ProductContext } from '../../contexts/produtos'
import './style.scss'
import { toast } from 'react-toastify';

type ProdutosList = {
  produtos: Produto[]
}

const ProductList: React.FC<ProdutosList> = ({ produtos }) => {
  const context = useContext(ProductContext)
  if(!context) return
  const {ProductRemove, setModalUrl, setModalISOpen} = context

  function handleImageNodal(item:Produto) {
    if(item.image == '') {
      toast.warning('Desculpe! O produto não possui uma imagem cadastrado!')
      return
    }
    
    setModalUrl(item.image)
    setModalISOpen(true)
  }

  return (
    <table className='product_list'>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Marca</td>
          <td className='see_product'></td>
          <td className='trash'></td>
        </tr>
      </thead>
      <tbody>
        {produtos.map((item) => (
          <tr key={item.id}>
            <td>{ item.nome }</td>
            <td>{ item.preco }</td>
            <td>{ item.marca.nome}</td>
            <td className='see_product'><button onClick={() => handleImageNodal(item) }>Ver produto</button></td>
            <td className='trash' onClick={() => ProductRemove(item)}><FaTrashAlt /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductList