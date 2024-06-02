const data = {
  state: 'game',
  gameId: '',
  gameData: {
    players: [
      {
        name: 'Guest 1',
        cards: [
          randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard()
        ],
        id: 0
      },
      {
        name: 'Guest 2',
        cards: [
          randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard()
        ],
        id: 1
      },
      {
        name: 'Guest 3',
        cards: [
          randomCard(), randomCard()
        ],
        id: 2
      },
      {
        name: 'Guest 4',
        cards: [
          randomCard(), randomCard()
        ],
        id: 3
      },
      {
        name: 'Guest 4',
        cards: [
          randomCard(), randomCard()
        ],
        id: 4
      },
      {
        name: 'Guest 4',
        cards: [
          randomCard(), randomCard()
        ],
        id: 5
      },
      {
        name: 'Guest 4',
        cards: [
          randomCard(), randomCard()
        ],
        id: 6
      },
      {
        name: 'Guest 4',
        cards: [
          randomCard(), randomCard()
        ],
        id: 7
      }
    ],
    cardStack: 2,
    currentCard: {
      name: '+4',
      color: 'red',
      number: -1
    },
    currentPlayer: 0,
    turnOrder: 1
  },
  host: false,
  playerId: 0,
  isPickingColor: false,
  canSkip: true,
  unoDeclared: false
}