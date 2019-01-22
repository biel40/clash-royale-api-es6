export function Player(tag, name, wins, losses, cards) {
    this.tag = tag || 'No hem trobat Resultats!';
    this.name = name || 'No hem trobat Resultats!';
    this.wins = wins || 'No hem trobat Resultats!';
    this.losses = losses || 'No hem trobat Resultats!';
    this.cards = cards || 'No hem trobat Resultats!';
}