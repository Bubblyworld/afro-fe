export const types = Object.freeze({
  CREATE: "create",
});

export function create() {
  return {
    type: CREATE,
  };
}
