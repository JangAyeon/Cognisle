function unionTypeChecker<UnionType extends string | number>(
  ...values: UnionType[]
) {
  return function (value: unknown): UnionType | false {
    if (typeof value === "string" || typeof value === "number") {
      const result = values.includes(value as UnionType)
        ? (value as UnionType)
        : false

      // console.log(value, typeof value, result)

      return result
    } else {
      return false
    }
  }
}
export default unionTypeChecker
