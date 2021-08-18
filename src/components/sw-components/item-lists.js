import React from 'react';
import ItemList from '../item-list';
import { withData, withApi } from '../hoc-halper';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndYear = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderNameAndCost = ({ name, costInCredits }) => <span>{name} ({costInCredits})</span>;

const mapPersonMethodsToProps = (api) => {
  return {
    getData: api.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (api) => {
  return {
    getData: api.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (api) => {
  return {
    getData: api.getAllStarships,
  };
};

const PersonList = withApi(
  withData(
    withChildFunction(ItemList, renderNameAndYear)
  ),
  mapPersonMethodsToProps
);

const PlanetList = withApi(
  withData(
    withChildFunction(ItemList, renderName)
  ),
  mapPlanetMethodsToProps
);

const StarshipList = withApi(
  withData(
    withChildFunction(ItemList, renderNameAndCost)
  ),
  mapStarshipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
}
