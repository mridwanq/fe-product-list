import { Center, Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ModalInputProduct } from './modal';
export const ProductCard = ({ product, fetchProducts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center
        flexDir={'column'}
        maxWidth={'233px'}
        maxH={'239px'}
        padding={'20px 0px'}
        fontSize='14px'
        onClick={onOpen}
      >
        <Box maxW={'216px'} maxH={'154px'} padding={'0px 15px 0px 0px'}>
          <img src={product.url} alt='' />
        </Box>
        <Box
          fontWeight='500'
          w={'100%'}
          maxWidth={'273px'}
          padding={'0px 20px'}
        >
          <Box marginBottom={'8px'}>
            <h2 style={{ marginBottom: '8px' }}>{product.name}</h2>
          </Box>

          <span style={{ color: '#159953' }}>
            IDR {Number(product.price)?.toLocaleString()}
          </span>
        </Box>
      </Center>
      <ModalInputProduct
        isOpen={isOpen}
        onClose={onClose}
        // setProducts={setProducts}
        // products={products}
        // product={product}
        fetchProducts={fetchProducts}
        id={product.id}
      />
    </>
  );
};

export const ProductList = ({ products = [], fetchProducts }) => {
  // const [filtered, setFiltered] = useState(products);
  //filter = products
  //filter isinya bisa lebih sedilkit dari products

  return (
    <Grid className='grid-cols-2 sm:grid-cols-4'>
      {products?.map((product, idx) => (
        <GridItem key={idx}>
          <a>
            <ProductCard
              product={product} //satuan
              fetchProducts={fetchProducts}
              // products={products} //semua products
              // setProducts={setProducts} // function untuk mengubah product
            />
          </a>
        </GridItem>
      ))}
    </Grid>
  );
};
