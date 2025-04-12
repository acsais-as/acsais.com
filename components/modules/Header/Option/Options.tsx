import LocaleSwitcher from "./LangSwitch/LangSwitch";

export default function Options() {
  return (
    <div className="flex flex-row items-center justify-between w-30">
      <div></div>
      <div className="ml-2">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
