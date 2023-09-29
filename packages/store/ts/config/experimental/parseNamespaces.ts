import { ParseNamespaceInput, ParseNamespaceOutput, parseNamespace } from "./parseNamespace";

export type ParseNamespacesInput = { readonly [k: string]: ParseNamespaceInput };

export type ParseNamespacesOutput<input extends ParseNamespacesInput> = {
  readonly [namespace in keyof input]: ParseNamespaceOutput<namespace & string, input[namespace]>;
}[keyof input]["tables"];

// TODO: rename to parseNamespacedTables
export function parseNamespaces<input extends ParseNamespacesInput>(input: input): ParseNamespacesOutput<input> {
  return Object.fromEntries(
    Object.entries(input).flatMap(([namespace, namespaceInput]) => {
      const { tables } = parseNamespace(namespace, namespaceInput);
      return Object.entries(tables);
    })
  ) as ParseNamespacesOutput<input>;
}
