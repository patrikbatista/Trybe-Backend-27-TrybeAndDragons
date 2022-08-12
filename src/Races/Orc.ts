import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static _createdRacesInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}