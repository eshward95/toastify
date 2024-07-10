import { useToasts } from "./providers/ToastProvider";

const Page = () => {
  const { showToast } = useToasts();
  return (
    <div>
      <button onClick={() => showToast("ERROR", "page content")}>
        new Toast
      </button>
    </div>
  );
};

export default Page;
