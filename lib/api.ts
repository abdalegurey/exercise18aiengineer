export async function registerUsers(names: string[]) {
  const res = await fetch("/api/multistep", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: names }),
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}



export async function sendimails(emails: string[]) {
  const res = await fetch("/api/emailSender", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emails: emails }),
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
