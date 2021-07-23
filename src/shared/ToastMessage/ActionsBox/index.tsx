import React, { FC } from "react";
import { DefinedIcons } from "../../../types/index";
import { ActionsBoxWrapper, ClickableCustomIcon } from "./elements";

type ActionsBoxProps = {
  listIcon: DefinedIcons;
  listAction?(): void;
  crossAction?(): void;
};

const ActionsBox: FC<ActionsBoxProps> = ({ listIcon, listAction, crossAction }) => {
  return (
    <ActionsBoxWrapper>
      {listAction ? (
        <ClickableCustomIcon
          onClick={listAction}
          icon={listIcon}
          iconColor="textOnDark"
          hoverColor="secondaryLight"
          width="20"
          height="20"
          margin="0 18px 0 0"
          opacity={0.7}
        />
      ) : null}
      {crossAction ? (
        <ClickableCustomIcon
          onClick={crossAction}
          icon="cross"
          iconColor="textOnDark"
          hoverColor="secondaryLight"
          width="20"
          height="20"
          margin="0"
          opacity={0.7}
        />
      ) : null}
    </ActionsBoxWrapper>
  );
};

export default ActionsBox;
