export class Pizza {

  constructor(public _id: number, public name: String, public desc: String, public picture: String, public price: Number, public ingredients: Array<any>) {
    this._id = _id;
    this.name = name;
    this.desc = desc;
    this.picture = picture;
    this.price = price;
    this.ingredients = ingredients;
  }

}
