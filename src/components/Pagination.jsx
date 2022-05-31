import React, { useState } from "react";
import {Button, ButtonGroup, Select} from "@chakra-ui/react"
import styles from "../components/Pagination.module.css"

const Pagination = ({page,setPage, settotalcount, setLimit, totalcount }) => {
  // TODO: Remove below const and instead import them from chakra
 

  return (
    <ButtonGroup className={styles.incDec
    }>
      <Button data-cy="pagination-first-button" onClick={()=>{
        setPage(1)
      }} >First</Button>
      <Button data-cy="pagination-previous-button" disabled={page<=1}  onClick={()=>{
if(page>1){
  setPage(page - 1)
}
      }}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e) => setLimit(Number(e.target.value))} >
        <option data-cy="pagination-limit-3" value={3}  >3</option>
        <option data-cy="pagination-limit-6"  value={6} >6</option>
        <option data-cy="pagination-limit-9"  value={9} >9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={totalcount < page*3} onClick={()=>{
         setPage(page + 1)
      }} >Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>{
        setPage(totalcount)
      }}>Last</Button>
    </ButtonGroup>



  )
};

export default Pagination;
