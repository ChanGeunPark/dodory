//react component고 function과 state를 return 할것이다.

import { privateDecrypt } from "crypto";
import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type UsemutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UsemutationResult<T> {
  //useMutation의 argument는 url이 될거다.
  //typescript를 사용하고 있다면 useMutation의 return type을 설정해줘야 한다.

  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data }))) //(json) => setData(json) 줄일수도 있다.
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  } // 백엔드로 보낸 data를 받게 될거다.

  return [mutation, { ...state }];
}
