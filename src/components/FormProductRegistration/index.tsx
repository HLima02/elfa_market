import React, { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../../contexts/produtos'
import { toast } from 'react-toastify';
import { v4 as uuidv4} from 'uuid'
import './style.scss'

export default function FormProductRegistration() {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<string >('')
  const [brand, setBrand] = useState<string>('')
  const [preview, setPreview] = useState<string>('')

  const context = useContext(ProductContext)
  if(!context) { return }
  const { prods, ProductRegisteation } = context

  const uploadImage = async (file: File):Promise<string | null> => {
    const url = `https://api.cloudinary.com/v1_1/di0016rzq/image/upload`
    const formatData = new FormData()

    formatData.append('file', file)
    formatData.append('upload_preset', 'elfa_unsigned')

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formatData
      })

      const data = await res.json()
      return data.secure_url 
    } catch (err) {
      console.log("Erro ao subir a imagem", err)
      return null
    }
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(!file) return

    const imageUrl = await uploadImage(file)
    if(imageUrl) {
      setImage(imageUrl)
    }

    //Gera uma URL Temporaria para preview
    const preview = URL.createObjectURL(file)
    setPreview(preview)
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
          image: image,
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
        setPreview('')
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
      {preview && (
        <div className='img_preview'>
          <img src={preview} alt='preview imagem' />
        </div>
      )}
      <input placeholder='Marca' type="text" value={brand}  onChange={(e) => setBrand(e.target.value)}/>
      <button type='submit'>Cadastrar</button>
    </form>
  )
}
