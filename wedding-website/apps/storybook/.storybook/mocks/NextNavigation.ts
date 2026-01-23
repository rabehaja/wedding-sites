export function usePathname(): string {
  return "/";
}

export function useRouter() {
  return {
    push: (url: string) => console.log("push", url),
    replace: (url: string) => console.log("replace", url),
    back: () => console.log("back"),
    forward: () => console.log("forward"),
  };
}

export function useSearchParams() {
  return new URLSearchParams();
}
