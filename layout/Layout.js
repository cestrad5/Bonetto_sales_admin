import Head from "next/head"
import Sidebar from "../components/Sidebar"

export default function Layout({children, pagina}) {
        
    return (
    <>
        <Head>
            <title>{pagina} - Bonetto</title>
             <link rel="icon" type="image/svg+xml" href="../bonetto.svg" />
            <meta name="description" content="Catalogo Bonetto"/>
        </Head>

        <div className="md:flex">
            <aside className="md:w-1/10 xl:w-1/8 2xl:w-1/10">
                <Sidebar />
            </aside>

            <main className="md:w-9/10 xl:w-7/8 2xl:w-9/ h-screen overflow-y-scroll">
                <div className="text-center">
                  {children}  
                </div>
                
            </main>
        </div>
    </>
  )
}
