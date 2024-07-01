import PopularProductsCard from '../components/PopularProductsCard';
import { products } from '../constants';
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      {/* ENCABEZADO Y TEXTO */}
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Curated selection of items that stand out for their high demand and exceptional quality. These products have been chosen for their popularity among consumers and their ability to meet various needs. They offer a unique combination of innovation, functionality, and style, ensuring a satisfying shopping experience. Discover why these products are favorites among so many customers!</p>
      </div>
      {/* TARJETAS */}
      <div className="mt-16 grid lg:grid-cols-4 md:cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
