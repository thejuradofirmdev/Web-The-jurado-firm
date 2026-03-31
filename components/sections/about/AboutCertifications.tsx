import Image from "next/image";

/**
 * 🏆 AboutCertifications — Logos de certificaciones en escala de grises
 */
export function AboutCertifications({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3UZ43QgRNCKUUryqQ4BotXQk_7-276OPsXrg-vR79HVRrnqBnp7wnvZowEr4ujc49c5P8r2wj3-L9Dy0N702kVb5l0UR3ikuQZCVRtByC-p2S_8POuQMrEuGrVpLJBioRYldOQ90SKO7D1Piw09DNRyHjU67IiaWGoXChNmHmX3dljBEWXC5bBG7UlK1IqpvRNnjMNdS-VeTrr9yTP1CFmKR6hYSck8qhsnVyz-zrnvBmor3WfGlFl220be7h3DiZVxlXr-IHExE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDyIZ7z-FDoxGaTIZZvA2P9Sf983y9MB4y-Zg6uhMB-62Mt6zUW2pqFCmEgQgMawrEM2zHvKGrnCXo3QYYTQR2d1DWbBk1JWkV65VH39A2GbeZkwfOzsW0YnmDCjD9Z3ontaB_8OKMTlcSezzJNIXOHfu1vMupPlyQyorb1OLCdynw502GOCdRA5agYyDXmuqODMU1yyuwCgEIvY9Qs7k8lAqPb6Yo7lokXCKS68jIU_qe83RpCAon3VEH-A41hspHLA332nWIBdpXd",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7_obYDM-n_g02VXCH9DX2V8spExryQKgJP5UYOW2oFY8Oc9cBAHIrkIta8PfA2jgPksB113KUtSRU0JGNHtmvH3k5VTH538LDaxUTop7_qFp9IS9w9vovXIp6AVPoKtxJcYHs38drzZsn8-varx3RQ1q5xpnIkW5OsnF0GuPDLQkTZ3zQQQOPvM-IWwVWYxINpZgbPhlkY0yKD4tqCi3LLgVZppaJJWXBdfBwJn_RD9F3rWTojNbaRs6jIAVOZ2PmdUuqAHaEszlA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCTXkT5mQYaQlG5zT4_nQu2_XPH9DRa6C46VrgjKs6lnQwcf3hep4SAmYvoV9iTh_cC6BzBx6uYk-FwSNBZeSTvauhCcNaP0zrGn2x2ReB7ewTmkhuRd3Y3h_h3Ca6-i45ozZu2N3SkG4RLOF7SmUKsGuBxYxR3MGwRlKwV-prgx3jdTkCZNtEvxWzrY8S4l2mPK5v9G7JOz1unTyQUDjyFc_o-0LQg4wiA9lX8aQyTI1AeodwJ-7tEzyXI_5x_NAY38F55Ew4pRRSU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAClBa-Jw3LmiTmBquSPgS_reNkJnk3WMcqWd9UKxLZr5nLyf7Ze-oyR7d7Nz0dTjHpWJ4mM7Qc_t3uP_gCqnVKIXBNtpaBQlPvmBHzcm6MY-1Xu6yyhOzqiy81Zq2rfkt1w78AaTv_Ng7aYrQOc63sRPQqOahlo8f4IxAshOTD-L1oG8wBGcVCkZm1RXlaQklEldXUBoLOChSX7dUsLBnrWOGm0JrrnnoxlDzd0rnm_hzSGtRsV-DxaoOA2j3c_wCR6ug4Zd9jYrLi",
  ];

  return (
    <section className="py-16 bg-white border-y border-[#e0e3e6]">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-center font-bold text-[#000d22]/40 uppercase tracking-[0.3em] text-sm mb-12">
          {isEs ? "Certificaciones y Membresías" : "Certifications and Memberships"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center opacity-70 grayscale">
          {logos.map((src, idx) => (
            <div key={idx} className="relative h-16 w-auto mx-auto aspect-video">
              <Image
                src={src}
                alt="Certification Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
