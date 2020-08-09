import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import ShopData from './shop.data';
class Shop extends Component {
  state = {
    collections: ShopData,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        {/* <CollectionPreview data={this.state.collections} /> */}
      </div>
    );
  }
}

export default Shop;
