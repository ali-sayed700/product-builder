import { IProds } from "../interface";
import Image from "./Image";
import Button from "./UI/button";
import CircleColors from "./UI/circleColors";
interface IProps {
  product: IProds;
  setEditProduct: (product: IProds) => void;
  openEditModal: () => void;
  setEditIndx: (val: number) => void;
  editIndx: number;
  openRrModal: () => void;
}
const ProductCard = ({
  product,
  setEditProduct,
  openEditModal,
  setEditIndx,
  editIndx,
  openRrModal,
}: IProps) => {
  const { title, image, description, colors, price, category } = product;

  const renderColor = colors?.map((color) => (
    <CircleColors key={color} color={color} />
  ));

  const onEdit = () => {
    setEditProduct(product);
    openEditModal();
    setEditIndx(editIndx);
  };
  const onRemove = () => {
    setEditProduct(product);
    openRrModal();
  };
  return (
    <div className="border max-w-sm mx-auto md:max-w-lg md:mx-0 rounded-md p-2 flex flex-col">
      <Image imgURL={image} alt={title} />
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="flex items-center my-4 space-x-1 flex-wrap ">
        {renderColor}
      </div>

      <div className="flex items-center justify-between">
        <span>{price}$</span>

        <Image
          imgURL={category.image}
          alt={category.name}
          className="h-10 w-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button onClick={onEdit} className="bg-indigo-700">
          edit
        </Button>
        <Button className="bg-red-700" onClick={onRemove}>
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
