import ActionDescription from "./ActionDescription";
import ActionHeader from "./ActionHeader";
import ActionIcon from "./ActionIcon";

interface ActionInfoProps {
  body: string;
  header: string;
  icon: string;
}

const ActionInfo = (props: ActionInfoProps) => {
  return (
    <div className="w-full">
      <ActionIcon icon={props.icon} />
      <div className="h-[29px]" />
      <ActionHeader text={props.header} />
      <div className="h-[8px]" />
      <ActionDescription text={props.body} />
    </div>
  );
};

export default ActionInfo;
