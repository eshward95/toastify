const Toast: React.FC<{
  type: string;
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const getColorBasedType = (type: string) => {
    if (type === "SUCCESS") {
      return "lightgreen";
    } else if (type === "ERROR") {
      return "salmon";
    } else if (type == "WARNING") {
      return "yellow";
    }
  };

  return (
    <div
      style={{
        background: getColorBasedType(type),
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
      }}
    >
      {message}
      <button
        onClick={() => onClose()}
        style={{ float: "right", cursor: "pointer", background: "none" }}
      >
        X
      </button>
    </div>
  );
};

export default Toast;
