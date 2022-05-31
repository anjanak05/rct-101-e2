import React from "react";
import {Box, Heading, Stack, TagLabel, Image, Text, Tag, Img} from "@chakra-ui/react"
import  styles  from "../components/Products.module.css";
const Product = ({value}) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    // <Stack data-cy="product"   className={styles.boxDiv}>
    //   <Image data-cy="product-image"  src={value.imageSrc} />
    //   <Text data-cy="product-category" >{value.category}</Text>
    //   <Tag>
    //     <TagLabel data-cy="product-gender">{value.gender}</TagLabel>
    //   </Tag>
    //   <Heading data-cy="product-title" >{value.title}</Heading>
    //   <Box data-cy="product-price">{value.price}</Box>
    // </Stack>

//     <div >
//       <div className={styles.mainDiv}>
//         <div >
//   <Img src={value.imageSrc}/>
//   <div className={styles.boxDiv}>
// <p>{value.category}</p>
// <p>{value.gender}</p>
// </div>
// <h1>{value.title}</h1>
// <p>Rs{value.price}/Unit</p>
// </div>

// </div></div>
<div className={styles.mainDiv}>
  {value.map((value) =>(
    <div  key ={value.id} className={styles.boxDiv}>
      <Img src={value.imageSrc}/>
  <div className={styles.catDiv}>
 <p>{value.category}</p>
 <p>{value.gender}</p>
 </div>
 <h1>{value.title}</h1>
 <p>Rs{value.price}/Unit</p>
    </div>
  ))}
</div>



  );






};

export default Product;
