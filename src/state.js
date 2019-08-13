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
      setColor: this.setColor
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
    console.log(color);
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

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
