import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _createdRacesInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}