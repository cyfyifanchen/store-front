import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery'
import Info from '@/components/info'
import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Container from '@/components/ui/container'

export const revalidate = 0

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)
  // const suggestedProducts = await getProducts({
  //   categoryId: product?.category?.id,
  // })

  if (!product) {
    return null
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="p-10 h-80%">
          <div className="">
            <Gallery images={product.images} />
          </div>

          {/* <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div> */}
          {/* <hr className="my-10" /> */}
          {/* <ProductList
            title="Related Items"
            items={suggestedProducts}
          /> */}
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
