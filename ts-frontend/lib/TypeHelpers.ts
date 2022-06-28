import { objectKeys } from "./ObjectKeys";

export type PropsFrom<ReactComponent> = ReactComponent extends React.FC<infer Props> 
? Props 
: ReactComponent extends React.Component<infer Props>
? Props
: never;


export function assertIsType<T>(val: any) : asserts val is T{}

export function isKeyOf<Obj extends Object>(obj: Obj, key: unknown): boolean{
    if (objectKeys(obj).includes(key as keyof Obj)){
        return true;
    }else {
        return false;
    }
}