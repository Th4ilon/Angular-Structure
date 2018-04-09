/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Needed To import JSON files.
declare module "*.json" {
  const value: any;
  export default value;
}
