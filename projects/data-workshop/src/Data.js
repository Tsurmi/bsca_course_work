const DATA = {
  users: [
    {
      id: 1,
      name: 'Jane',
      accountActive: true,
    },
    {
      id: 2,
      name: 'Nancy',
      accountActive: true,
    },
    {
      id: 3,
      name: 'Jimbo',
      accountActive: false,
    },
    {
      id: 4,
      name: 'Cleetus',
      accountActive: false,
    },
    {
      id: 5,
      name: 'Hampster',
      accountActive: true,
    }
  ],
  products: [
    {
      id: 1,
      name: 'Amazing Book',
      price: 30
    },
    {
      id: 2,
      name: 'Worthless Junk',
      price: 20
    },
    {
      id: 3,
      name: 'Giant Microwave Oven',
      price: 15
    },
    {
      id: 4,
      name: 'Iron Chef Greatest Hits',
      price: 60
    },
    {
      id: 5,
      name: 'Man Wipes',
      price: 75
    },
  ],
  orders: [
    {
      id: 1,
      userId: 1,
      productId: 1
    },
    {
      id: 2,
      userId: 1,
      productId: 2
    },
    {
      id: 3,
      userId: 2,
      productId: 3
    },
    {
      id: 4,
      userId: 3,
      productId: 1
    },
    {
      id: 5,
      userId: 3,
      productId: 5
    },
    {
      id: 6,
      userId: 4,
      productId: 1
    },
    {
      id: 7,
      userId: 4,
      productId: 4
    },
    {
      id: 8,
      userId: 4,
      productId: 5
    },
    {
      id: 9,
      userId: 5,
      productId: 2
    },
    {
      id: 10,
      userId: 5,
      productId: 4
    },

  ]
}

export default DATA
