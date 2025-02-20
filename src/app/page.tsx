import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página en Construcción</title>
        <meta name="description" content="Estamos trabajando en algo increíble. Vuelve pronto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800">🚧 Página en Construcción 🚧</h1>
          <p className="text-gray-600 mt-2">Estamos trabajando en algo increíble. Vuelve pronto.</p>
        </div>
      </div>
    </>
  );
}
