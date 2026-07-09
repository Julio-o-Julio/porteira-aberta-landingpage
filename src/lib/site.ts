// Configuração central do site — ajuste aqui os dados reais.
export const site = {
  name: "Porteira Aberta",
  fullName: "Porteira Aberta — Projetos Agropecuários",
  tagline: "Soluções inteligentes para o produtor rural",
  // formato: 55 + DDD + número
  whatsappNumber: "5567996583378",
  whatsappMessage:
    "Olá! Vim pelo site e quero saber mais sobre crédito para o agro.",
  instagram: "https://instagram.com/porteiraabertaprojetosagrop",
  email: "contato@porteiraaberta.com.br", // TODO: e-mail real
  address:
    "Av. José Ferreira da Costa, 2171, Sala A — Vila Santana, Costa Rica/MS, 79550-000",
  cnpj: "00.000.000/0001-00", // TODO: CNPJ real
  partners: ["Sicredi", "Cresol"],
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
};

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
