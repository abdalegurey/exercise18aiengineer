import { useMutation } from "@tanstack/react-query";
import { registerUsers, sendimails } from "@/lib/api";

export function useRegisterUsers() {
  return useMutation({
    mutationFn: (names: string[]) => registerUsers(names),
  });
}





