import React from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

const SoundsFilter = () => {
  return (
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li className="uk-active" data-uk-filter-control>
          <a href="/">All</a>
        </li>
        <li data-uk-filter-control="[data-color='hot']">
          <a href="/">Hot</a>
        </li>
        <li data-uk-filter-control="[data-color='new']">
          <a href="/">New</a>
        </li>
        <li data-uk-filter-control="[data-color='loved']">
          <a href="/">Loved</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        uk-grid>
        <li data-color="hot">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="new">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="hot">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="hot">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="loved">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="loved">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="new">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="loved">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="new">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="hot">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="new">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="loved">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
      </ul>
    </div>
  );
};

export default SoundsFilter;