import '@umijs/max/typings';
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const url: string;
  export default url;
}

// 声明define中注入的环境变量，全部用“REACT_APP_”作为前缀
declare const REACT_APP_ENV: string;

interface IRetList<T = any> {
  list: T[] | null;
  total: number;
}
