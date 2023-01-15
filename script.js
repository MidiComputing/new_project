import React, { useState, useMemo } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Slide({ slide, previous }) {
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "slide",
      style: {
        "--stats": slide.stats.length },

      "data-previous": previous || undefined }, /*#__PURE__*/

    React.createElement("div", { className: "slide-name" }, slide.name), /*#__PURE__*/
    React.createElement("img", { className: "slide-image", src: slide.image }),
    slide.quote && /*#__PURE__*/React.createElement("div", { className: "slide-quote" }, slide.quote),
    slide.stats.map((stat, i) => {
      return /*#__PURE__*/(
        React.createElement("div", {
          className: "slide-stat",
          key: i,
          style: {
            "--i": i } }, /*#__PURE__*/


        React.createElement("div", { className: "stat-label" }, stat.label), /*#__PURE__*/
        React.createElement("div", { className: "stat-value" }, stat.value)));


    })));


}

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);
  const activeSlide = useMemo(() => slides[slideIndex], [slideIndex]);
  const prevSlide = useMemo(() => slides[prevSlideIndex], [prevSlideIndex]);

  function nextSlide() {
    setPrevSlideIndex(slideIndex);
    setSlideIndex((slideIndex + 1) % slides.length);
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "app" }, /*#__PURE__*/
    React.createElement("svg", {
      viewBox: "0 0 100 100",
      className: "dashes",
      fill: "none",
      stroke: "var(--color-purple)",
      "stroke-dasharray": "2 4 4 3 2 3 8 2 3 5" }, /*#__PURE__*/

    React.createElement("circle", { r: "45", cx: "50", cy: "50" })), /*#__PURE__*/

    React.createElement(Slide, { slide: activeSlide, key: slideIndex }),
    prevSlide && /*#__PURE__*/
    React.createElement(Slide, { slide: prevSlide, key: prevSlideIndex + "prev", previous: true }), /*#__PURE__*/

    React.createElement("button", {
      className: "button -next",
      onClick: () => {
        nextSlide();
      } }, "Next", /*#__PURE__*/


    React.createElement("br", null), "Story")));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));