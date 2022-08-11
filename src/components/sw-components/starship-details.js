import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../../HOCs';

const StarshipDetails = (props) => (
  <ItemDetails { ...props } >
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="cost" />
  </ItemDetails>
);

const mapMethodsToProps = (api) => ({
  getData: api.getStarship,
  getImageUrl: api.getStarshipImage,
});

export default withApi(mapMethodsToProps)(StarshipDetails);
