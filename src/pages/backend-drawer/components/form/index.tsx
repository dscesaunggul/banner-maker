import * as React from "react";
import "./form.styl";

type Props = {
  editable?: boolean;
};

const Form: React.SFC<Props> = (props: Props) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const onChangeTabIndex = React.useCallback(() => {
    switch (tabIndex) {
      case 0:
        return setTabIndex(1);
      default:
        return setTabIndex(0);
    }
  }, [tabIndex]);

  return (
    <div className="card-form">
      <div className="card card-form__header">
        <div className="card-content">
          <div className="tabs is-centered">
            <ul>
              <li className={tabIndex == 0 ? "is-active" : ""}>
                <a onClick={onChangeTabIndex}>
                  <span>Object</span>
                </a>
              </li>
              <li className={tabIndex == 1 ? "is-active" : ""}>
                <a onClick={props.editable ? onChangeTabIndex : undefined}>
                  <span>Selected Object</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card card-form__content">
        <div className="card-content">
          {(() => {
            switch (tabIndex) {
              case 1:
                return null;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Form;
