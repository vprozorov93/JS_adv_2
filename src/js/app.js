import result from '../data.txt'
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game'

const element = document.querySelector('p')
element.textContent = result

const game = new Game();
game.start();