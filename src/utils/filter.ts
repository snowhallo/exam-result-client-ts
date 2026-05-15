import type { School } from "../types/school";

export const searchByName = (schools: School[], name: string) => {
    if (!name.trim()) return schools;
    return schools.filter((school) => school.name.toLowerCase().includes(name.toLowerCase()) || school.code.toLowerCase().includes(name.toLowerCase()));
}

export const searchByProvince = (schools: School[], province: string) => {
    if (!province.trim() || province.trim() === "All") return schools;
    return schools.filter((school) => school.province.toLowerCase().includes(province.toLowerCase()));
}