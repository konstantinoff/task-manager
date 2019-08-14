import React, { Component, createContext } from "react";
import { uniqueId } from "lodash";

export const StateContext = createContext({});

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          id: 0,
          text: "Текст1",
          color: "black",
          date: null,
          time: null,
          isDateEdit: false,
          isDaysEdit: true,
          hashtags: new Set([
            ["magenta", "repeat"],
            ["red", "cinema"],
            ["geekblue", "entertainment"]
          ]),
          repeated: new Set(["mo", "su"])
        },
        1: {
          id: 1,
          text: "Текст2",
          color: "pink",
          isDateEdit: false,
          isDaysEdit: false,
          hashtags: new Set([
            ["magenta", "repeat"],
            ["red", "cinema"],
            ["geekblue", "entertainment"]
          ]),
          repeated: new Set([])
        },
        2: {
          id: 2,
          text: "Текст3",
          color: "green",
          date: null,
          time: null,
          isDateEdit: false,
          isDaysEdit: false,
          hashtags: new Set([
            ["magenta", "repeat"],
            ["red", "cinema"],
            ["geekblue", "entertainment"]
          ]),
          repeated: new Set([])
        },
        3: {
          id: 2,
          text: "Текст3",
          color: "green",
          date: null,
          time: null,
          isDateEdit: false,
          isDaysEdit: false,
          hashtags: new Set([
            ["magenta", "repeat"],
            ["red", "cinema"],
            ["geekblue", "entertainment"]
          ]),
          repeated: new Set([])
        }
      },
      cardsIds: ["0", "1", "2", "3"],
      editingCard: "0",
      changeEdit: this.changeEdit,
      addNewCard: this.addNewCard,
      isDateEditToggler: this.isDateEditToggler,
      setDate: this.setDate,
      setTime: this.setTime,
      setText: this.setText,
      isDayEditToggler: this.isDayEditToggler,
      editDayToggler: this.editDayToggler,
      inputHasTagHandler: this.inputHasTagHandler,
      onDeleteTagHandler: this.onDeleteTagHandler,
      setColor: this.setColor,
      onDeleteCard: this.onDeleteCard
    };
  }

  changeEdit = cardId => {
    this.setState({ editingCard: cardId });
  };

  addNewCard = () => {
    const newId = uniqueId("card_");
    console.log(newId);
    const { cardsIds } = this.state;
    const newCardIds = [...cardsIds, newId];

    const defaultCardState = {
      id: newId,
      text: "Введите текст",
      color: "black",
      date: null,
      time: null,
      isDateEdit: false,
      isDaysEdit: false,
      repeated: new Set([]),
      hashtags: new Set([])
    };
    // 0: {
    //   id: 0,
    //     text: "Текст1",
    //     color: "black",
    //     date: null,
    //     time: null,
    //     isDateEdit: false,
    //     isDaysEdit: true,
    //     hashtags: new Set([
    //     ["magenta", "repeat"],
    //     ["red", "cinema"],
    //     ["geekblue", "entertainment"]
    //   ]),
    //     repeated: new Set(["mo", "su"])
    // },

    this.setState(state => ({
      cards: {
        ...state.cards,
        [newId]: defaultCardState
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
          date: null,
          time: null,
          isDateEdit: !state.cards[id].isDateEdit
        }
      }
    }));
  };

  isDayEditToggler = id => {
    this.setState(state => {
      const newRepeated = new Set(state.cards[id].repeated);
      newRepeated.clear();
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            repeated: newRepeated,
            isDaysEdit: !state.cards[id].isDaysEdit
          }
        }
      };
    });
  };

  editDayToggler = (id, day) => {
    this.setState(state => {
      const newRepeated = new Set(state.cards[id].repeated);
      newRepeated.has(day) ? newRepeated.delete(day) : newRepeated.add(day);
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            repeated: newRepeated
          }
        }
      };
    });
  };

  setDate = (id, date) => {
    this.setState(state => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          date: date ? date.unix() : null
        }
      }
    }));
  };

  setTime = (id, time) => {
    this.setState(state => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          time: time ? time.unix() : null
        }
      }
    }));
  };

  setText = (id, value) => {
    this.setState(state => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          text: value
        }
      }
    }));
  };

  inputHasTagHandler = (id, value) => {
    const colors = [
      "magenta",
      "red",
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState(state => {
      const newHashtags = new Set(state.cards[id].hashtags);
      newHashtags.add([randomColor, value]);
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            hashtags: newHashtags
          }
        }
      };
    });
  };

  onDeleteTagHandler = (id, tag) => {
    this.setState(state => {
      const newHashtags = new Set(state.cards[id].hashtags);
      newHashtags.delete(tag);
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            hashtags: newHashtags
          }
        }
      };
    });
  };

  setColor = (id, color) => {
    this.setState(state => {
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            color: color
          }
        }
      };
    });
  };

  onDeleteCard = id => {
    this.setState(state => {
      const { cards, cardsIds } = state;
      const updatedCards = cardsIds.filter(item => item !== id);
      delete cards[id];
      return {
        cards: cards,
        cardsIds: updatedCards
      };
    });
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
