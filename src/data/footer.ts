import image from "@/assets/images/general/icon.png"

export const footerData = {
  brand: {
    description: "Hubungi Saya",
    contact: {
      email: "mochrizqihermawan615@gmail.com",
      address: "Jl. Raya Nagreg No.330",
      city: "Bandung",
    },
  },
  sections: [
    {
      id: "categories",
      title: "Kategori Tulisan",
      items: [
        {
          label: "Programming",
          target: "_blank",
          href: `https://www.google.com/search?q=Programming`,
        },
        {
          label: "Teknologi",
          target: "_blank",
          href: `https://www.google.com/search?q=Teknologi`,
        },
        {
          label: "Gaya Hidup",
          target: "_blank",
          href: `https://www.google.com/search?q=GayaHidup`,
        },
        {
          label: "Anime",
          target: "_blank",
          href: `https://www.google.com/search?q=Anime`,
        },
      ],
    },
    {
      id: "links",
      title: "Tautan",
      items: [
        { label: "Beranda", target: "", href: "#home" },
        { label: "Tentang Saya", target: "", href: "#about" },
        { label: "Portfolio", target: "", href: "#portfolio" },
        { label: "Clients", target: "", href: "#clients" },
        { label: "Blogs", target: "", href: "#blogs" },
        { label: "Contact", target: "", href: "#contact" },
      ],
    },
  ],
};
