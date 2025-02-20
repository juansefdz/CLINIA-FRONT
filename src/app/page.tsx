export const metadata = {
  title: "Página en Construcción",
  description: "Estamos trabajando en algo increíble. Vuelve pronto.",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">🚧 Página en Construcción 🚧</h1>
        <p className="text-gray-600 mt-2">Estamos trabajando en algo increíble. Vuelve pronto.</p>
      </div>
    </div>
  );
}
