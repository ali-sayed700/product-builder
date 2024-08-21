export const productValid = (product: {
  title: string;
  description: string;
  image: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    image: string;
    price: string;
  } = {
    title: "",
    description: "",
    image: "",
    price: "",
  };
  const validImg = /^(ftb|http|https):\/\/[^"]+$/.test(product.image);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "product title must be between 10 and 80 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description =
      "product description must be between 10 and 80 characters";
  }
  if (!product.image.trim() || !validImg) {
    errors.image = "valid image url is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "valid price is required ";
  }

  return errors;
};
