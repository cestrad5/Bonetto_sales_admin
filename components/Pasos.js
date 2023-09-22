import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Catálogo", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();


  return (
    <>
      <div className="flex flex-col mb-1">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
            }}
            className="font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>


    </>
  );
};

export default Pasos;