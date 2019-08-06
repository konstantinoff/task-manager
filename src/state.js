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
          repeat: "repeat",
          hashtags: ["тег7", "тег8", "тег9"]
        },
        3: {
          id: 2,
          text: "Текст3",
          color: "green",
          repeat: "repeat",
          hashtags: ["тег9", "тег10", "тег11"]
        }
      },
      cardsIds: ["0", "1", "2", "3"],
      editingCard: "0",
      changeEdit: this.changeEdit
    };
  }

  changeEdit = cardId => {
    this.setState({ editingCard: cardId });
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
