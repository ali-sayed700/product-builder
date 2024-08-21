import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/UI/button";
import Modal from "./components/UI/modal";
import { categories, colors, formInputList, productApi } from "./data/data";
import Input from "./components/UI/input";
import { productValid } from "./validate";
import ErrorMsg from "./components/UI/errorMsg";
import CircleColors from "./components/UI/circleColors";
import { IProds, productsProps } from "./interface";
import { v4 as uuid } from "uuid";
import Selected from "./components/UI/select";
import toast, { Toaster } from "react-hot-toast";

function App() {
  /*ــــــــــــــــــــــــ state ـــــــــــــــــــــــــــــ*/

  const DefaultProd = {
    title: "",
    description: "",
    image: "",
    price: "",
    colors: [],
    category: {
      name: "",
      image: "",
    },
  };
  const [products, setProducts] = useState<IProds[]>(productApi);
  const [product, setProduct] = useState<IProds>(DefaultProd);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenRemove, setIsOpeRemove] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  const [temp, setTemp] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [editProduct, setEditProduct] = useState<IProds>(DefaultProd);
  const [editIndx, setEditIndx] = useState<number>(0);

  /*ــــــــــــــــــــــــ Handler  ـــــــــــــــــــــــــــــ*/

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, price, image } = product;

    const errors = productValid({
      title,
      description,
      image,
      price,
    });
    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasError) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: temp, category: selectedCategory },
      ...prev,
    ]);
    setProduct(DefaultProd);
    setTemp([]);
    closeModal();
  };

  const openModal = () => setIsOpen(true);
  const openEditModal = () => setIsOpenEdit(true);
  const openRrModal = () => setIsOpeRemove(true);

  const closeModal = () => setIsOpen(false);
  const closeEditModal = () => setIsOpenEdit(false);
  const closeRrModal = () => setIsOpeRemove(false);

  const handleCancel = () => {
    setProduct(DefaultProd);
    closeModal();
  };

  const handleEditCancel = () => {
    setEditProduct(DefaultProd);
    closeEditModal();
  };

  const rmProd = () => {
    const filtered = products.filter((prod) => prod.id !== editProduct.id);
    setProducts(filtered);
    closeRrModal();
    toast("production removed successfully");
  };

  const handleRmClose = () => {
    closeRrModal();
  };
  /*ــــــــــــــــــــــــ Handler  Edit  ـــــــــــــــــــــــــــــ*/
  const handleEditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, price, image } = editProduct;
    const errors = productValid({
      title,
      description,
      image,
      price,
    });
    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasError) {
      setErrors(errors);
      return;
    }

    const updateProd = [...products];
    updateProd[editIndx] = {
      ...editProduct,
      colors: temp.concat(editProduct.colors),
    };
    setProducts(updateProd);

    setEditProduct(DefaultProd);
    setTemp([]);
    closeEditModal();
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  /*ــــــــــــــــــــــــ Render component ـــــــــــــــــــــــــــــ*/
  const renderProd = products.map((prod, indx) => (
    <ProductCard
      key={prod.id}
      product={prod}
      setEditProduct={setEditProduct}
      openEditModal={openEditModal}
      setEditIndx={setEditIndx}
      editIndx={indx}
      openRrModal={openRrModal}
    />
  ));

  const renderForm = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        name={input.name}
        id={input.id}
        onChange={onChangeHandler}
        value={product[input.name]}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  const renderColor = colors.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        if (temp.includes(color)) {
          setTemp((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (editProduct.colors.includes(color)) {
          setTemp((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTemp((prev) => [...prev, color]);
      }}
    />
  ));

  const renderEditProd = (id: string, label: string, name: productsProps) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <Input
          type="text"
          name={name}
          id={id}
          onChange={onChangeEditHandler}
          value={editProduct[name]}
        />

        <ErrorMsg msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        add
      </Button>
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 p-2  ">
        {renderProd}
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="ADD A NEW PRODUCT "
        >
          <form className="space-y-3" onSubmit={handleSubmit}>
            {renderForm}
            <Selected
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex items-center my-4 space-x-2 flex-wrap ">
              {renderColor}
            </div>

            <div className="flex items-center my-4 space-x-2 flex-wrap ">
              {temp.map((color) => (
                <span
                  key={color}
                  className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1">
              <Button className="bg-indigo-700 hover:bg-indigo-800 ">
                Submit
              </Button>

              <Button
                type="button"
                className="bg-gray-400 hover:bg-gray-500"
                onClick={handleCancel}
              >
                cancel
              </Button>
            </div>
          </form>
        </Modal>
        {/* ـــــــــــــــــــــــــــــــــــــــــــــ edit modal ــــــــــــــــــــــــــــ   */}
        <Modal
          isOpen={isOpenEdit}
          closeModal={closeEditModal}
          title="EDIT  PRODUCT "
        >
          <form className="space-y-3" onSubmit={handleEditSubmit}>
            {renderEditProd("title", "product title", "title")}
            {renderEditProd(
              "description",
              "product description",
              "description"
            )}
            {renderEditProd("image", "product image", "image")}
            {renderEditProd("price", "product price", "price")}

            <Selected
              selected={editProduct.category}
              setSelected={(value) =>
                setEditProduct({ ...editProduct, category: value })
              }
            />
            <div className="flex items-center my-4 space-x-2 flex-wrap ">
              {renderColor}
            </div>

            <div className="flex items-center my-4 space-x-2 flex-wrap ">
              {temp.concat(editProduct.colors).map((color) => (
                <span
                  key={color}
                  className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1">
              <Button className="bg-indigo-700 hover:bg-indigo-800 ">
                Submit
              </Button>

              <Button
                type="button"
                className="bg-gray-400 hover:bg-gray-500"
                onClick={handleEditCancel}
              >
                cancel
              </Button>
            </div>
          </form>
        </Modal>

        <Modal
          isOpen={isOpenRemove}
          closeModal={closeRrModal}
          title="are you sure to remove this  product "
        >
          <div className="flex items-center space-x-1">
            <Button
              className="bg-indigo-700 hover:bg-indigo-800"
              onClick={rmProd}
            >
              remove
            </Button>

            <Button
              onClick={handleRmClose}
              type="button"
              className="bg-gray-400 hover:bg-gray-500"
            >
              cancel
            </Button>
          </div>
        </Modal>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
