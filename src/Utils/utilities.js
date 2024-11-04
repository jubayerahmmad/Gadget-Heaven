// add Cart to local storage
const getStoredCart = () => {
  const storedCartItem = localStorage.getItem("cart");
  if (storedCartItem) {
    const storedCart = JSON.parse(storedCartItem);
    return storedCart;
  } else {
    return [];
  }
};

const addCartToLocalStorage = (id) => {
  const storedCart = getStoredCart();
  if (storedCart.includes(id)) {
    alert("Already Added");
  } else {
    storedCart.push(id);
    const cartString = JSON.stringify(storedCart);
    localStorage.setItem("cart", cartString);
  }
};

// add to wishlist

const getStoredWishlist = () => {
  const storedWishlistItem = localStorage.getItem("wishlist");
  if (storedWishlistItem) {
    const storedWishlist = JSON.parse(storedWishlistItem);
    return storedWishlist;
  } else {
    return [];
  }
};

const addWishlistToLocalStorage = (id) => {
  const storedWishlist = getStoredWishlist();
  if (storedWishlist.includes(id)) {
    alert("Already Added");
  } else {
    storedWishlist.push(id);
    const wishListString = JSON.stringify(storedWishlist);
    localStorage.setItem("wishlist", wishListString);
  }
};

export { addCartToLocalStorage, addWishlistToLocalStorage };
