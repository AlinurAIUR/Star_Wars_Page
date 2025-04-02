import { withData } from '../hoc-helpers';
import ItemList from '../item-list/item-list';
import { withSwapiService } from '../hoc-helpers';

const PersonList = withSwapiService(
    withData(ItemList),
    (swapiService) => ({
        getData: swapiService.getAllPeople
    })
);

const PlanetList = withSwapiService(
    withData(ItemList),
    (swapiService) => ({
        getData: swapiService.getAllPlanets
    })
);

const StarshipList = withSwapiService(
    withData(ItemList),
    (swapiService) => ({
        getData: swapiService.getAllStarships
    })
);

export { PersonList, PlanetList, StarshipList };
