import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static _createdRacesInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}