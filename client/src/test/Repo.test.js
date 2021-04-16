import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

import Repo from "../components/Repo/Repo";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});
let mockInfo = {
      hideUser: false,
      repos: [
          {
            name: "repo",
            description: "lorem ipsum",
            cloneUrl: "",
            sshUrl: "",
            language: "javascript",
            creationDate: "",
            lastUpdate: ""
          }
      ]
}

describe("Repo Component Testing", () => {
  it("Renders repository structure", () => {   
    act(() => {
      ReactDOM.render(<Repo repos = { mockInfo.repos } updateStar = { mockInfo.updateStar } />, rootContainer);
    });
    const ul = rootContainer.getElementsByTagName("ul");
    expect(ul.length).to.equal(1);
    const hr = rootContainer.getElementsByTagName("hr");
    expect(hr.length).to.equal(1);
    const li = rootContainer.getElementsByTagName("li");
    expect(li.length).to.equal(mockInfo.repos.length);
    const h1 = rootContainer.getElementsByTagName("h1");
    expect(h1.length).to.equal(1);
    const p = rootContainer.getElementsByTagName("p");
    expect(p.length).to.equal(6);
  });

  it("Renders dynamic repo info", () => {   
    act(() => {
      ReactDOM.render(<Repo repos = { mockInfo.repos } updateStar = { mockInfo.updateStar } />, rootContainer);
    });
    const p = rootContainer.getElementsByTagName("p");
    const h1 = rootContainer.getElementsByTagName("h1");
    expect(h1[0].innerHTML).to.include(mockInfo.repos[0].name);
    expect(p[0].innerHTML).to.include(mockInfo.repos[0].description);
    expect(p[1].innerHTML).to.include(mockInfo.repos[0].cloneUrl);
    expect(p[2].innerHTML).to.include(mockInfo.repos[0].sshUrl);
    expect(p[3].innerHTML).to.include(mockInfo.repos[0].language);
    expect(p[4].innerHTML).to.include(mockInfo.repos[0].creationDate);
    expect(p[5].innerHTML).to.include(mockInfo.repos[0].lastUpdate);

  });

//   it("Should hide user info", () => {  
//     mockInfo.hideUser = false; 
//     act(() => {
//       ReactDOM.render(<Repo hideUser = { true } info = { mockInfo.info } />, rootContainer);
//     });
//     const className = rootContainer.querySelector(".user-info").className;
//     expect(className).to.include("hidden");
//   });

});