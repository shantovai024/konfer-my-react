declare module "*.jsx" {
  import type { FC } from "react";
  const component: FC<Record<string, unknown>>;
  export default component;
}


// types/json.d.ts
declare module "*.json" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
