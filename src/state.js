import React, { Component, createContext } from "react";

export const StateContext = createContext({});

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          id: 0,
          text: "Текст1",
          color: null,
          date: "Choise Date",
          time: "Choise Time",
          isDateEdit: true,
          repeat: null,
          hashtags: ["тег1", "тег2", "тег3"]
        },
        1: {
          id: 1,
          text: "Текст2",
          color: "pink",
          repeat: null,
          hashtags: ["тег4", "тег5", "тег6"]
        },
        2: {
          id: 2,
          text: "Текст3",
          color: "green",
          date: "Choise Date",
          time: "Choise Time",
          isDateEdit: false,
          repeat: "repeat",
          hashtags: ["тег7", "тег8", "тег9"]
        },
        3: {
          id: 2,
          text: "Текст3",
          color: "green",
          date: "Choise Date",
          time: "Choise Time",
          isDateEdit: false,
          repeat: "repeat",
          hashtags: ["тег9", "тег10", "тег11"]
        }
      },
      cardsIds: ["0", "1", "2", "3"],
      editingCard: "0",
      changeEdit: this.changeEdit,
      addNewCard: this.addNewCard,
      isDateEditToggler: this.isDateEditToggler
    };
  }

  changeEdit = cardId => {
    this.setState({ editingCard: cardId });
  };

  addNewCard = () => {
    const defaultCardState = {
      id: 0,
      text: "Введите текст",
      color: null,
      date: null,
      time: null,
      repeat: null,
      hashtags: []
    };

    const { cardsIds } = this.state;

    const nextCardIndex = cardsIds.length.toString();

    let newCardIds = [...cardsIds, nextCardIndex];

    this.setState(state => ({
      cards: {
        ...state.cards,
        [nextCardIndex]: defaultCardState
      },
      cardsIds: newCardIds
    }));
  };

  isDateEditToggler = id => {
    this.setState(state => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          date: "Choise Date",
          time: "Choise Time",
          isDateEdit: !state.cards[id].isDateEdit
        }
      }
    }));
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
