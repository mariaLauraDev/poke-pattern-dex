export default class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];

  constructor(id: number, name: string, height: number, weight: number, types: { type: { name: string } }[]) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
  }
}
