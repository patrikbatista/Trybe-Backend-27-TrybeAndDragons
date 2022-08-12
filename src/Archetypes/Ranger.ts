import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {  
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    return Ranger._createdArchetypeInstances;
  }
}