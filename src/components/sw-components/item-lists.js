import React from 'react';

import { ItemList } from '../item-list';
import {
  withData,
  withApi,
  withChildFunction,
  compose
} from '../hoc-halper';

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndYear = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderNameAndCost = ({ name, costInCredits }) => <span>{name} ({costInCredits})</span>;

const mapPersonMethodsToProps = (api) => ({
  getData: api.getAllPeople,
});

const mapPlanetMethodsToProps = (api) => ({
  getData: api.getAllPlanets,
});

const mapStarshipMethodsToProps = (api) => ({
  getData: api.getAllStarships,
});

export const PersonList = compose(
  withApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderNameAndYear)
)(ItemList);

export const PlanetList = compose(
  withApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const StarshipList = compose(
  withApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndCost)
)(ItemList);
