import Gradient from "../gradient";
import DividerCurly from "../divider-curly";

export interface DecorationProps {
  top?: boolean;
  bottom?: boolean;
  color?: string;
}

export default function Decoration({ color, ...divider }: DecorationProps) {
  return (
    <>
      {!divider?.top && <Gradient position="top" />}
      {!divider?.bottom && <Gradient position="bottom" />}
      {divider?.top && <DividerCurly position="top" color={color} />}
      {divider?.bottom && <DividerCurly position="bottom" color={color} />}
    </>
  );
}
