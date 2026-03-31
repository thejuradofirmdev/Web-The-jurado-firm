export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="font-serif font-bold text-6xl text-navy mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        La página que buscas no existe.
      </p>
      <a
        href="/es"
        className="bg-gold text-white font-bold px-6 py-3 rounded-lg hover:bg-gold-dark transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}
