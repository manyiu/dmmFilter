// ==UserScript==
// @name         dmmFilter
// @namespace    https://vazue.com/
// @version      1.0.0
// @description
// @author       Man Yiu
// @match        https://www.dmm.co.jp/digital/videoa/-/list/*
// @grant        none
// ==/UserScript==
{
  ("use strict");

  const defaultFilter = ["presale", "latest"];

  const statusFilter = (filter) => {
    const list = document.getElementById("list").children;

    eachElement: for (const element of list) {
      const icoSpans = element.querySelector("div .status")?.children;
      if (icoSpans) {
        for (const status of icoSpans) {
          const statusClassName = status.className;
          for (const filterQuery of filter) {
            if (`ico-st-${filterQuery}` === statusClassName) {
              continue eachElement;
            }
          }
        }
      }
      element.style.display = "none";
    }
  };

  const button = document.createElement("div");
  button.style.position = "fixed";
  button.style.right = "20px";
  button.style.bottom = "20px";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.color = "white";
  button.style.backgroundColor = "red";
  button.style.cursor = "pointer";
  button.onclick = () => statusFilter(defaultFilter);
  const buttonText = document.createTextNode("Filter");
  button.appendChild(buttonText);

  document.body.appendChild(button);
}
