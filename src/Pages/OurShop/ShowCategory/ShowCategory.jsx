import ItemCard from "../../../Shared/ItemCard/ItemCard";
import useMenu from "../../../hooks/useMenu";


const ShowCategory = ({ category }) => {
    
    const [menu] = useMenu(category)
    return (
        <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 py-2 md:py-4">
            {menu && menu.map((item, idx) => (
                <ItemCard item={item} key={idx}></ItemCard>
            ))}
        </section>
    );
};

export default ShowCategory;