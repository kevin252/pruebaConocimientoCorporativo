import { Country } from './country.class';
import { Image } from './image.class';
export class Product {
    $key: string;
    id: string;
    name: string;
    features: string;
    date: string;
    mailManufacturer: string;
    country: Country;
    price: number;
    unitsAvailables: number;
    soldUnits: number;
    image: string;
}
