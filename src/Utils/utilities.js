import toast from "react-hot-toast";

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
    toast.error("Already added to the Cart");
  } else {
    storedCart.push(id);
    const cartString = JSON.stringify(storedCart);
    localStorage.setItem("cart", cartString);
    toast.success("Succesfully added to the Cart");
  }
};
// remove cart

const removeCart = (id) => {
  const cart = getStoredCart();
  const remainingCart = cart.filter((productId) => productId != id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
  toast.success("Successfully Removed from Cart");
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
    toast.error("Already added to the Wish List");
  } else {
    storedWishlist.push(id);
    const wishListString = JSON.stringify(storedWishlist);
    localStorage.setItem("wishlist", wishListString);
    toast.success("Succesfully added to the Wish List");
  }
};

// remove wishlist

const removeWishList = (id) => {
  const wishList = getStoredWishlist();
  const remainingWishList = wishList.filter((productId) => productId !== id);
  localStorage.setItem("wishlist", JSON.stringify(remainingWishList));
  toast.success("Successfully removed from Wishlist");
};

export {
  addCartToLocalStorage,
  addWishlistToLocalStorage,
  getStoredCart,
  getStoredWishlist,
  removeCart,
  removeWishList,
};
