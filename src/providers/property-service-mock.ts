import {Injectable} from '@angular/core';
import properties from './mock-carehomes';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  findAll() {
    return Promise.resolve(properties);
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByLocId(searchKey: string) {
      let key: string = searchKey;
      console.log("search key is "+key);
      properties.forEach( (element) => {
          if (element.Location_ID == key){
              console.log("Element ID= "+element.Location_ID+" key = "+key);
              console.log("Element = "+element);
              return Promise.resolve(element)
          }
      });

      return Promise.resolve(properties.filter((property: any) =>
          (property.Location_ID + ' ' + property.name +  ' ' +property.postalAddressLine1 +  ' ' + property.postalAddressTownCity + ' ' + property.region).toUpperCase().indexOf(key) > -1));
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.name +  ' ' +property.postalAddressLine1 +  ' ' + property.postalAddressTownCity + ' ' + property.region).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
      return Promise.resolve(this.favorites);
  }


  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }
}
