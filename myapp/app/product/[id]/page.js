

const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {cache: "no-store"})

    if(!res.ok){
        throw new Error("Failed")
    }
    return res.json();
}

const ProductDetail = async ({params}) => {
//   const [product, setProduct] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { id } = router.query;

//         if (!id) {
//           return;
//         }

//         const response = await fetch(`/api/product/${id}`);
//         if (response.ok) {
//           const productData = await response.json();
//           setProduct(productData);
//         } else {
//           console.error('Failed to fetch product');
//         }
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [router.query]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }
const {id}= params;
const product = await getData(id);

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <img src={product.img} alt={product.name} />
      <p>Price: ${product.price}</p>
    </section>
  );
};

export default ProductDetail;
