import Image from "next/image"
import useBonetto from "../hooks/useBonetto"

const Categoria = ({categoria}) => {
    const { categoriaActual, handleClickCategoria } = useBonetto();
    const {nombre, icono, id} = categoria;

  return (
      <button
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        <div className={`${categoriaActual?.id === id ? "bg-yellow-100" : ""} flex items-center gap-20 w-full border p-5 hover:bg-yellow-100`}>

            <Image
                width={70}
                height={70}
                src={`/assets/img/icon_${icono}.svg`}
                className="mr-5"
                alt="icon"
            />
        </div>
    </button>
  )
}

export default Categoria
