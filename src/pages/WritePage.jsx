import WriteForm from "../components/WriteForm/WriteForm";
import WriteInfo from "../components/WriteForm/WriteInfo";
import WriteLayout from "../layout/WriteLayout";

export default function WritePage() {
  return (
    <WriteLayout>
      <WriteInfo />
      <WriteForm />
    </WriteLayout>
  );
}
