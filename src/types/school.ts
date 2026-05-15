
import type { Major } from "./major";

export type schoolType = 'Công lập' | 'Dân lập' | 'Quốc tế';

export interface School {
    id: string;
    name: string;
    code: string;
    province: string;
    type: schoolType;
    majors: Major[];
}