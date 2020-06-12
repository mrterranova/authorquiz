import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import AuthorQuiz from './AuthorQuiz';
Enzyme.configure({ adapter : new Adapter() });

const state = {
  turnData: {
    books:['Hamlet', 'Othello', 'MacBeth', '1984', 'Animal Farm', 'The Road to Wigan Pier', 'Pride and Prejudice', 'Sense and Sensibility', 'Emma', 'Atlas Shrugged', 'Fountainhead', 'Anthem', 'The Dome', 'IT', 'The Shining', 'David Copperfield', 'A Tale of Two Cities', 'Great Expectations', 'The Adventures of Huckleberry Finn', 'Tom Sawyer', 'Life on the Mississippi' ], 
    author : {
      name : 'Charles Dickens',
      imageUrl : 'image/authors/charlesdickens.jpg',
      imageSource : 'Wikimedia Commons',
      books : ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight : 'none'
}

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />, div);
  });

  describe("When no one has been selected", ()=>{
    let wrapper;
    beforeAll(()=> {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=> {}} />
      )});
      
      it("should have no background color", ()=> {
        expect(wrapper.find("div.now.turn").props().style.backgroundColor).toBe('');
      });
    });
});