import * as React from "react";
import "./form.styl";

const Form: React.SFC<{}> = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div className="card-form">
      <div className="card card-form__header">
        <div className="card-content">
          <div className="tabs is-toggle">
            <ul>
              <li className={tabIndex == 0 ? "is-active" : ""}>
                <a onClick={() => setTabIndex(0)}>
                  <span>Background</span>
                </a>
              </li>
              <li className={tabIndex == 1 ? "is-active" : ""}>
                <a onClick={() => setTabIndex(1)}>
                  <span>+/- Object</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card card-form__content">
        <div className="card-content"></div>
      </div>
    </div>
  );
};

export default Form;
