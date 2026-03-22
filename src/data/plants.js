const plantsData = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: "air-snake-plant",
        name: "Snake Plant",
        image:
          "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        description: "Produces oxygen at night, improving air quality.",
        price: 15,
      },
      {
        id: "air-spider-plant",
        name: "Spider Plant",
        image:
          "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
        description: "Filters formaldehyde and xylene from the air.",
        price: 12,
      },
      {
        id: "air-peace-lily",
        name: "Peace Lily",
        image:
          "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        description: "Removes mold spores and purifies the air.",
        price: 18,
      },
      {
        id: "air-boston-fern",
        name: "Boston Fern",
        image:
          "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
        description: "Adds humidity to the air and removes toxins.",
        price: 20,
      },
      {
        id: "air-rubber-plant",
        name: "Rubber Plant",
        image:
          "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
        description: "Easy to care for and effective at removing toxins.",
        price: 17,
      },
      {
        id: "air-aloe-vera",
        name: "Aloe Vera",
        image:
          "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        description: "Purifies the air and has healing properties for skin.",
        price: 14,
      },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        id: "aroma-lavender",
        name: "Lavender",
        image:
          "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Calming scent, used in aromatherapy.",
        price: 20,
      },
      {
        id: "aroma-jasmine",
        name: "Jasmine",
        image:
          "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sweet fragrance, promotes relaxation.",
        price: 18,
      },
      {
        id: "aroma-rosemary",
        name: "Rosemary",
        image:
          "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
        description: "Invigorating scent, often used in cooking.",
        price: 15,
      },
      {
        id: "aroma-mint",
        name: "Mint",
        image:
          "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
        description: "Refreshing aroma, used in teas and cooking.",
        price: 12,
      },
      {
        id: "aroma-lemon-balm",
        name: "Lemon Balm",
        image:
          "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        description: "Citrusy scent, relieves stress and promotes sleep.",
        price: 14,
      },
      {
        id: "aroma-hyacinth",
        name: "Hyacinth",
        image:
          "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
        description:
          "Hyacinth is a beautiful flowering plant known for its fragrance.",
        price: 22,
      },
    ],
  },
  {
    category: "Insect Repellent Plants",
    plants: [
      {
        id: "repel-oregano",
        name: "Oregano",
        image:
          "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
        description:
          "Contains compounds that can deter certain insects naturally.",
        price: 10,
      },
      {
        id: "repel-marigold",
        name: "Marigold",
        image:
          "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
        description: "Natural insect repellent that also adds bright color.",
        price: 8,
      },
      {
        id: "repel-geraniums",
        name: "Geraniums",
        image:
          "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
        description: "Repels insects while adding a pleasant garden scent.",
        price: 20,
      },
      {
        id: "repel-basil",
        name: "Basil",
        image:
          "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
        description: "Repels flies and mosquitoes; also popular for cooking.",
        price: 9,
      },
      {
        id: "repel-lavender",
        name: "Lavender",
        image:
          "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Aromatic and calming with mild insect-repellent effects.",
        price: 20,
      },
      {
        id: "repel-catnip",
        name: "Catnip",
        image:
          "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
        description: "Repels mosquitoes and is beloved by cats.",
        price: 13,
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: "med-aloe-vera",
        name: "Aloe Vera",
        image:
          "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        description: "Soothing gel used for skin ailments.",
        price: 14,
      },
      {
        id: "med-echinacea",
        name: "Echinacea",
        image:
          "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
        description: "Traditionally used to support immune health.",
        price: 16,
      },
      {
        id: "med-peppermint",
        name: "Peppermint",
        image:
          "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
        description: "Refreshing leaves often used for tea and digestion.",
        price: 13,
      },
      {
        id: "med-lemon-balm",
        name: "Lemon Balm",
        image:
          "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        description: "Known for calming aroma and stress relief.",
        price: 14,
      },
      {
        id: "med-chamomile",
        name: "Chamomile",
        image:
          "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
        description: "Popular herbal plant for relaxation and sleep support.",
        price: 15,
      },
      {
        id: "med-calendula",
        name: "Calendula",
        image:
          "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
        description: "Used in traditional skin-soothing remedies.",
        price: 12,
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        id: "low-zz-plant",
        name: "ZZ Plant",
        image:
          "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Thrives in low light and needs little watering.",
        price: 25,
      },
      {
        id: "low-pothos",
        name: "Pothos",
        image:
          "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
        description: "Tolerates neglect and grows in many conditions.",
        price: 10,
      },
      {
        id: "low-snake-plant",
        name: "Snake Plant",
        image:
          "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        description: "Resilient and great for beginners.",
        price: 15,
      },
      {
        id: "low-cast-iron",
        name: "Cast Iron Plant",
        image:
          "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
        description: "Hardy plant that handles low light and neglect.",
        price: 20,
      },
      {
        id: "low-succulents",
        name: "Succulents",
        image:
          "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
        description: "Drought-tolerant with unique shapes and textures.",
        price: 18,
      },
      {
        id: "low-aglaonema",
        name: "Aglaonema",
        image:
          "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
        description: "Colorful, resilient, and easy to maintain indoors.",
        price: 22,
      },
    ],
  },
];

export default plantsData;
