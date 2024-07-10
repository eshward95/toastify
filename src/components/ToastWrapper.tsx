import Toast from "./Toast";

const ToastWrapper: React.FC<{
  toastList: any[];
  content: string;
  autoClose: number;
  handleClose: (id: number) => void;
}> = ({ content, autoClose, toastList, handleClose }) => {
  // console.log(toastList);

  return (
    <div>
      {toastList.length > 0 &&
        toastList.map((toast) => (
          <Toast toast={toast} handleClose={handleClose} />
        ))}
    </div>
  );
};

export default ToastWrapper;
