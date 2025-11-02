import React from "react";

import Bell from "/public/static/bell.svg?react";
import Calendar from "/public/static/calendar-dots.svg?react";
import CheckCircle from "/public/static/check-circle.svg?react";
import Circle from "/public/static/circle.svg?react";
import Gear from "/public/static/gear.svg?react";
import NotePad from "/public/static/notepad.svg?react";
import PlusCircle from "/public/static/plus-circle.svg?react";
import Trash from "/public/static/trash.svg?react";
import Filter from "/public/static/filter.svg?react";
import Dots from "/public/static/dots-three.svg?react";
import Verify from "/public/static/verify.svg?react";

const Icones = {
  bell: Bell,
  calendar: Calendar,
  checkCircle: CheckCircle,
  circle: Circle,
  gear: Gear,
  notepad: NotePad,
  circuloAdd: PlusCircle,
  trash: Trash,
  filter: Filter,
  dots: Dots,
  verify: Verify,
};

const IconeDinamico = ({ nome, tamanho = 27, cor, ...rest }) => {
  const ComponenteSVG = Icones[nome];
  if (!ComponenteSVG) {
    console.log("Nome de icone não encontrado");
    return null;
  }

  return (
    <ComponenteSVG width={tamanho} height={tamanho} fill={cor} {...rest} />
  );
};

export default IconeDinamico;
