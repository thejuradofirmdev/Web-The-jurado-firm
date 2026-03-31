import Image from "next/image";

/**
 * 🏛️ TrustBadges — Logos de organizaciones de respaldo
 * Diseño del HTML de referencia: logos en bg blanco, grayscale con hover a color
 */
export function TrustBadges({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const logos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3UZ43QgRNCKUUryqQ4BotXQk_7-276OPsXrg-vR79HVRrnqBnp7wnvZowEr4ujc49c5P8r2wj3-L9Dy0N702kVb5l0UR3ikuQZCVRtByC-p2S_8POuQMrEuGrVpLJBioRYldOQ90SKO7D1Piw09DNRyHjU67IiaWGoXChNmHmX3dljBEWXC5bBG7UlK1IqpvRNnjMNdS-VeTrr9yTP1CFmKR6hYSck8qhsnVyz-zrnvBmor3WfGlFl220be7h3DiZVxlXr-IHExE",
      alt: "State Bar of California",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyIZ7z-FDoxGaTIZZvA2P9Sf983y9MB4y-Zg6uhMB-62Mt6zUW2pqFCmEgQgMawrEM2zHvKGrnCXo3QYYTQR2d1DWbBk1JWkV65VH39A2GbeZkwfOzsW0YnmDCjD9Z3ontaB_8OKMTlcSezzJNIXOHfu1vMupPlyQyorb1OLCdynw502GOCdRA5agYyDXmuqODMU1yyuwCgEIvY9Qs7k8lAqPb6Yo7lokXCKS68jIU_qe83RpCAon3VEH-A41hspHLA332nWIBdpXd",
      alt: "AILA",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7_obYDM-n_g02VXCH9DX2V8spExryQKgJP5UYOW2oFY8Oc9cBAHIrkIta8PfA2jgPksB113KUtSRU0JGNHtmvH3k5VTH538LDaxUTop7_qFp9IS9w9vovXIp6AVPoKtxJcYHs38drzZsn8-varx3RQ1q5xpnIkW5OsnF0GuPDLQkTZ3zQQQOPvM-IWwVWYxINpZgbPhlkY0yKD4tqCi3LLgVZppaJJWXBdfBwJn_RD9F3rWTojNbaRs6jIAVOZ2PmdUuqAHaEszlA",
      alt: "ABA",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-[#000d22] font-bold text-lg mb-12 text-center">
            {isEs
              ? "Avalados por las organizaciones más prestigiosas"
              : "Endorsed by the most prestigious organizations"}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32 w-full">
            {logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-16 md:h-24 w-auto object-contain opacity-60 grayscale mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
