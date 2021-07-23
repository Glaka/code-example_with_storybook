import React, { FC } from "react";
import { ListItem, ListOfPointsWrapper } from "./elements";

type ListOfPointsProps = {
  list: string[];
};

const ListOfPoints: FC<ListOfPointsProps> = ({ list }) => {
  return (
    <ListOfPointsWrapper>
      {list.map((li, index) => (
        <ListItem key={index}>{li}</ListItem>
      ))}
    </ListOfPointsWrapper>
  );
};

export default ListOfPoints;
