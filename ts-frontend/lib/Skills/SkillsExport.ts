export type SkillsModuleType = typeof import("./Skills");

import { objectKeys } from '../ObjectKeys';
import * as SkillsModule from './Skills';
import { SkillItem } from './Types';

export const skills = Object.values(SkillsModule);

//get ids as a union type

type Values<T> = T[keyof T]
type SkillItemKey<T extends Record<string, SkillItem>> = {
    [Prop in keyof T]: keyof T[Prop]
  
  }
  type r = Values<SkillItemKey<SkillsModuleType>>;
const tt:r = 'name';
export type skillId = typeof SkillsModule[keyof typeof SkillsModule]['name'];

const listOfIds = objectKeys(SkillsModule).map( skillName => SkillsModule[skillName].name);

const tList = [
    "val1",
    'val2'
] as const;
type unTest = typeof  tList[any];

const ttt: unTest = 'val1';

const tLest  = [
    {id: 'val1'},
    {id: 'val2'}
] as const;
type unTest2 = typeof tLest[any]['id'];

const tObj = {
    item1:{id: 'val1'},
    item2:{id: 'val2'}
} as const;

type uuu = typeof tObj[keyof typeof tObj]['id'];
