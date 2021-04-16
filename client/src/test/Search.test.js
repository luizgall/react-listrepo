import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";


import SearchBar from "../components/Search/Search";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("SearchBar Component Testing", () => {
  it("Should render 1 form with 1 input and 1 button", () => {   
    act(() => {
      ReactDOM.render(  <SearchBar updateList = "" startedSearch = ""/> , rootContainer);
    });
    const form = rootContainer.getElementsByTagName("form");
    expect(form.length).to.equal(1);
    const input = rootContainer.getElementsByTagName("input");
    expect(input.length).to.equal(1);
    const button = rootContainer.getElementsByTagName("button");
    expect(button.length).to.equal(1);
  });

  it("Should handle input change", () => {  
    let event = {
        target: {
            value: "luizgall"
        },
        preventDefault: () => {}
    };
    const wrapper = shallow(<SearchBar />);
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().user).to.equal("luizgall");
  });

  it("Should call searchRepo() on submit", () => {  
    let event = {
        preventDefault: () => {}
    };
    let called = false;
    const wrapper = shallow(<SearchBar />);
    wrapper.instance().searchRepo = () => {
        called = true;
    }
    wrapper.instance().handleSubmit(event);
    expect(called).to.equal(true);
  });

});