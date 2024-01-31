interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [id, size, color] = params.data
  const objeto = { id, size, color }
  return (
    <>
      <h1>Hello World on Product</h1>
      {Object.entries(objeto).map(([key, value]) => (
        <p key={key}>{`${key} : ${value}`}</p>
      ))}
    </>
  )
}
