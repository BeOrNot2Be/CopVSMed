// import actions

const initState = {
  user: {},
  cart: {
    items: [],
    sum: 0,
  },
  token: 'some token gen',
  postsElement: {},
  newsElement: {},
  bannersElement: {},
  reviewsElement: {},
  productsElement: {},
};


const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case '':
      return state;

    default:
      return state;
  }
};

export default generalReducer;
