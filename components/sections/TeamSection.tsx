export function TeamSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const staff = [
    {
      name: "Mariana L.",
      role: isEs ? "Gerente de Casos Senior" : "Senior Case Manager",
      desc: isEs ? "Especialista bilingüe en preparación de paquetes I-130." : "Bilingual specialist in I-130 packet preparation."
    },
    {
      name: "Daniela C.",
      role: isEs ? "Asistente Paralegal" : "Paralegal Assistant",
      desc: isEs ? "Enlace directo con clientes y recolección de evidencia." : "Direct liaison with clients and evidence collection."
    },
    {
      name: "Roberto V.",
      role: isEs ? "Coordinador de Corte" : "Court Coordinator",
      desc: isEs ? "Gestión de calendarios, citas biométricas y USCIS." : "Management of calendars, biometrics appointments and USCIS."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold mb-6 uppercase tracking-widest">
            {isEs ? "Nuestro Staff" : "Our Staff"}
          </div>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl mb-6">
            {isEs ? "Un equipo de apoyo detrás de tu caso" : "A support team behind your case"}
          </h2>
          <p className="text-gray-600 font-sans text-lg">
            {isEs 
              ? "Para asegurar un servicio élite, Carlos Jurado cuenta con un equipo paralegal 100% bilingüe dedicado a la recolección y perfeccionamiento de tu expediente."
              : "To ensure elite service, Carlos Jurado has a 100% bilingual paralegal team dedicated to the collection and perfection of your file."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-center p-8 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full bg-navy/5 text-navy font-bold flex items-center justify-center text-3xl mb-6 border-2 border-gold/20">
                {member.name[0]}
              </div>
              <h3 className="font-bold text-navy text-xl mb-1">{member.name}</h3>
              <p className="text-gold font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
