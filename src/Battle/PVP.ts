import Battle from './Battle';
import { Fighter } from '../Fighter';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) { 
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}