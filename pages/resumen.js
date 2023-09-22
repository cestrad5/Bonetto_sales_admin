import useBonetto from '../hooks/useBonetto'
import ResumenProducto from '../components/ResumenProducto'
import Layout from '../layout/Layout'
 
export default function Resumen() {
  const { pedido } = useBonetto()
  return (
    <Layout pagina={'resumen'}>
      <div pagina='Resumen'>
        <div className='flex flex-col h-screen'>
          {' '}
          {/* Use flex to make the content fill the screen */}
          <h1 className='text-4xl font-black text-center'>Confirmar Pedido</h1>
          {pedido.length === 0 ? (
            <p className='text-center text-4xl text-red-800'>No hay artículos en el pedido</p>
          ) : (
            <div className='flex-grow overflow-y-auto'>
              {' '}
              {/* Use flex-grow and overflow-y-auto to make the content scrollable */}
              {pedido.map((producto) => (
                <ResumenProducto key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}