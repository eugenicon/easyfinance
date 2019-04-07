export function distinct<T>(accessor: string | ((t: T) => any)): (thing: T, i: number, arr: T[]) => boolean {
  if (accessor && typeof accessor === "string") {
    return (thing, i, arr) => {
      return arr.findIndex(t => t[accessor] === thing[accessor]) === i;
    }
  } else {
    return (thing, i, arr) => {
      // @ts-ignore
      return arr.findIndex(t => accessor(t) === accessor(thing)) === i;
    }
  }
}
