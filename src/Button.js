export function Button(props) {
  return (
    <button
      className={props.customclass}
      onClick={() => {
        props.handler(props.id);
      }}
    >
      {props.children}
    </button>
  );
}
