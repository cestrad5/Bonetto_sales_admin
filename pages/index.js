import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import Producto from '../components/Producto'
import useBonetto from '../hooks/useBonetto'

export default function Home() {
    const { categoriaActual } = useBonetto();


    return (
    <Layout pagina={`${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black mt-5 mb-5">{categoriaActual?.nombre}</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>        
    </Layout>
  );
}

