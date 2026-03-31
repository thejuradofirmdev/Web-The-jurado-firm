import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * 👥 TeamSection — Sección del equipo legal
 * Grid de 4 perfiles con foto que hace zoom on hover
 */
export function TeamSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Senior Paralegal",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF8UodGAgy5mPW68wA3sowP3D6N5yK2cnX0p6qU3Z4hxjTGyVvMw-HQLBUai8xY0skjZP1FYeluGnGDxGYgH1b3tT-U2w32og8aBYbm8np1PFcP-BQ5IP0o1EmGjugoX-dZN81gMHhg-VVbChK2gGPYJDNTKQNZ3zEatcrEWucu89J6-D4-AXbMdlvzn6euGJ5PZJpRBkTz84jzJYSIzsxI5PcDfq1MWtUjSV77gZyDjga3yJdjsOhX98GnEb6ZjHwjd2iXYLSPeBT",
    },
    {
      name: "Marco Antonio Solis",
      role: "Legal Assistant",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWYMoj5RXV18GVm_P5AIX7yiAs3KmG4R7AiIn-dejkoo6MV_aEPdj-0vr47WJ2v7MUSgLv0b_7-w2ZEdZ6jIDVNEqILr9WojluHKNxpOEVJgBioEZK-GJZMl5uTV7kJp33o-cN6IO7Ih8qJYKz87lfaImsXSWnFe9CqNLwyN6lHHa-4MFcFIVe3o7qytglLxLm8LGKGPk4eg_H-Ke6S4trsSH1d1Ownrz_Isf33vxPUFNSCDb7N14Osr_autfP7AZ7ljKLDjxwsRrV",
    },
    {
      name: "Sofia Mendez",
      role: "Case Manager",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5_6DtjZO6M-Ka03k2Z4sbfd72C1xJBNZchbxPDjHdxxGaOx5kP4sI9uFIbFVClt4kS6pUobu2iZFd1AD10Eyp-xl6NLXb1Vw8c_jhOS1rmHkq1-kWUibVlCGmHxENEOKCZ_DnceJOfriJoMGzkyh93KaDPXU06Oc_fABWCJAzWrRO4CM50XH8oTgiMX4uTGOt4fWkItpwZlmDN2zVz6-5KgsPl6cUErcG2Xb7ivjNbIC8OnfYTAiUQWuSplyDyXtImpHXLyTb8H2s",
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu0S9jPZ-S7SVqtlb_MivHV3pz1qFBPX7y5P5muftazkNQ0uQ7erHOR4ULOQngkUJ7M0wECM-u-pW_jPuyLy7b7-x8URYDfnWrhkeJtPjifmXmWjA21BoZNS6kzwgu7AH-1rUW2JeUa7GsFF1K8gh866WOoaQL_SyQixl2jyLtO8v2YbGtMnlhKnixUMozTI7rvQjbj1QMjrL3LGDr6jyUWTd_tXUAROb9gWCDub9H3A81hQN7HtxSPM0qnQXo2Swvr3tKy714eJyD",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl text-[#000d22] mb-4">
            {isEs ? "El Corazón de la Firma" : "The Heart of the Firm"}
          </h2>
          <p className="text-gray-500 text-lg">
            {isEs
              ? "Un equipo diverso de profesionales legales apasionados por la justicia migratoria."
              : "A diverse team of legal professionals passionate about immigration justice."}
          </p>
        </div>
        <button className="text-[#000d22] font-bold border-b-2 border-[#7b5800] flex items-center gap-2 hover:gap-4 transition-all pb-1">
          {isEs ? "Ver todos los roles" : "See all roles"} <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 relative">
              <Image
                src={member.img}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
            <h4 className="font-bold text-xl text-[#000d22]">{member.name}</h4>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
