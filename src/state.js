import React, { Component, createContext } from "react";
import { uniqueId } from "lodash";

export const StateContext = createContext({});

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          id: 2,
          text: "Code, Sleep, Repeat",
          color: "yellow",
          date: 1,
          time: 32410,
          isDateEdit: true,
          isDaysEdit: true,
          image: null,
          hashtags: new Set([
            ["gold", "Code"],
            ["green", "Sleep"],
            ["pink", "Repeat"]
          ]),
          repeated: new Set(["mo", "tu", "we", "th", "fr", "sa", "su"])
        },
        1: {
          id: 1,
          text: "Finish learning TypeScript",
          color: "pink",
          date: null,
          time: null,
          isDateEdit: false,
          isDaysEdit: false,
          image: null,
          hashtags: new Set([
            ["magenta", "selfEducation"],
            ["red", "important"]
          ]),
          repeated: new Set([])
        },
        2: {
          id: 0,
          text: "Buy Milk",
          color: "green",
          date: null,
          time: null,
          isDateEdit: false,
          isDaysEdit: true,
          image: null,
          hashtags: new Set([["magenta", "Emc2"]]),
          repeated: new Set(["su"])
        }
      },
      cardsIds: ["0", "1", "2"],
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
      onDeleteCard: this.onDeleteCard,
      setImage: this.setImage
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
      text: "Type some text...",
      color: "black",
      date: null,
      time: null,
      image: null,
      isDateEdit: false,
      isDaysEdit: false,
      repeated: new Set([]),
      hashtags: new Set([])
    };

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

  setImage = (id, image) => {
    this.setState(state => {
      return {
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            image: image
          }
        }
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
