import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../../contexts/produtos'
import { toast } from 'react-toastify';
import { v4 as uuidv4} from 'uuid'
import './style.scss'

export default function FormProductRegistration() {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)
  const [brand, setBrand] = useState<string>('')

  const context = useContext(ProductContext)
  if(!context) { return }
  const { prods, ProductRegisteation } = context

  function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    if(e.target.files) {
      setImage(e.target.files[0])
    }
  }
  function genereteUID(){
    const uid = uuidv4()
    return uid
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(name != '' && price != null && brand != ''){
      if(price > 0) {
        let uidProd = genereteUID()
        let uidBrand = genereteUID()
  
        let prodList = prods
        prodList.push({
          id: uidProd,
          nome: name,
          preco: price,
          descricao: description,
          marca: {
            id: uidBrand,
            nome: brand
          }
        })
  
        ProductRegisteation(prodList)
        toast.success('Produto cadastrado com sucesso')
        setName('')
        setPrice(undefined)
        setDescription('')
        setBrand('')
      } else {
        toast.warning('O preço deve ser um valor positivo, maior que zero.')
        return
      }
    } else {
      toast.warning('Por favor, preencha todos os campos')
      return
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Produto' />
      <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" placeholder='Preço' />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descrição' ></textarea>
      <input type='file'accept='image/*' onChange={handleFile} />
      <input placeholder='Marca' type="text" value={brand}  onChange={(e) => setBrand(e.target.value)}/>
      <button type='submit'>Cadastrar</button>
    </form>
  )
}
