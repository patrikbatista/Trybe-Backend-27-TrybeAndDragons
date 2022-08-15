import { Archetype, Mage } from './Archetypes';
import Energy from './Energy';
import { Fighter, SimpleFighter } from './Fighter';
import { Elf, Race } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._archetype = new Mage(this._name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10) };
  }

  public get race(): Race {
    return this._race; 
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  attack(enemy: SimpleFighter): number {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);

    if (this._energy) {
      this._energy.amount = 10;
    }

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    }
    if (this._lifePoints < 0) {
      return -1;
    }
    return this._lifePoints;
  }
}