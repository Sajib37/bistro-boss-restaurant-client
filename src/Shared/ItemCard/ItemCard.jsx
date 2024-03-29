import { Card } from "flowbite-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const ItemCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;

    return (
        <div className="px-1">
            <Card
                className="max-w-sm md:max-w-sm rounded-xl  lg:max-w-md bg-[#F3F3F3] mx-auto"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <div className="space-y-4 flex flex-col items-center pb-4">
                    <h1 className="text-2xl font-semibold text-center">
                        {name}
                    </h1>
                    <div>
                        <p className="text-center">{recipe.slice(0, 80)}</p>
                        <p className="text-[#D1A054] text-center font-bold">
                            Price: {price}$
                        </p>
                    </div>
                    {/* <span onClick={()=>handleAddToCart(item)}><AwesomeButton className='w-32' type="facebook">Add to Cart</AwesomeButton></span> */}
                    <span>
                        <AwesomeButton className="w-36" type="facebook">
                            Add to Cart
                        </AwesomeButton>
                    </span>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;
