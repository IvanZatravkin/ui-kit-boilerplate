type Props<T extends React.ComponentType<any> | React.ElementType> = T extends React.ComponentType<infer P>
  ? P
  : unknown;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type StyleArgs<K extends { [n: number]: any }> = UnionToIntersection<
  { [N in keyof K]: K[N] extends (x: infer P) => any ? P : never }[number]
>;

type FixStyled<Base extends React.ComponentType<any> | React.ElementType, Styles extends any[]> = React.ComponentType<
  Omit<Props<Base> & StyleArgs<Styles>, "theme">
>;

type StyledFixed = <C extends React.ComponentType<any> | React.ElementType>(
  Component: C
) => <CSS extends any[]>(...css: CSS) => FixStyled<C, CSS>;

declare module "@emotion/styled" {
  declare const styled: StyledFixed;
  export default styled;
}
