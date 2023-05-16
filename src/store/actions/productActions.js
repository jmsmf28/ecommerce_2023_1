export const searchProduct = (searchValue) => {
    return {
      type: 'SEARCH_PRODUCT',
      payload: searchValue,
    };
  };