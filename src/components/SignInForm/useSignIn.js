import { useEffect } from "react";
import useAuthStore from "../../hooks/useAuthStore";

export default function useSignIn() {
  const [snapshot, authStore] = useAuthStore();

  const { loginSuccess, loginError } = snapshot;

  useEffect(() => {
    //로그인에 성공했을 때 이벤트 로직
    if (loginSuccess) {
      window.location.href = "/";
    }

    //로그인에 실페했을 때 이벤트 로직
    if (loginError) {
      alert("로그인에 실패하셨습니다.");
    }
  }, [loginSuccess, loginError]);

  return authStore;
}
