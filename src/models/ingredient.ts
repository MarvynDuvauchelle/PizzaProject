export class Ingredient {

  constructor(public _id: number, public name: String, public weight: String, public price: Number) {
    this._id = _id;
    this.name = name;
    this.weight = weight;
    this.price = price;
  }

}
