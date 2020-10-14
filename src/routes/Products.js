import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList'

const Products = ({dispatch,products }) => {//products为modal里面定义的modal为products的state值
  const handleDelete=(id)=>{
    dispatch({
      type:'products/delete',
      payload:id
    })

  }
  return (
    <div>
      <h2>DvaJS demo</h2>
      <ProductList  onDelete={handleDelete} products={products}/>
    </div>
  )
};

export default connect(({ products }) => ({
  products,
}))(Products);