import { sendimails } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export function useSendemails(){
    return useMutation
    ({
    mutationFn: (emails: string[]) => sendimails(emails),
  });
}