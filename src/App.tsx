import "./App.css";
import Page from "./Page";
import { useToasts } from "./providers/ToastProvider";
enum ToastTypeEnums {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
}
function App() {
  const { showToast } = useToasts();

  return (
    <>
      <button onClick={() => showToast(ToastTypeEnums.SUCCESS, "toast 2")}>
        Success toast 1
      </button>
      <button onClick={() => showToast(ToastTypeEnums.SUCCESS, "toast 1")}>
        Success toast 2
      </button>
      <button onClick={() => showToast(ToastTypeEnums.ERROR)}>
        Error toast
      </button>
      <button
        onClick={() =>
          showToast(ToastTypeEnums.WARNING, "warning", "bottom-right")
        }
      >
        Warning toast
      </button>
      <Page />
    </>
  );
}

export default App;
