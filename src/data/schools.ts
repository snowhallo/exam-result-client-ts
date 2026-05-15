import type { School } from "../types/school";
import {
  hustMajors,
  ptitMajors,
  hcmutMajors,
  uetMajors,
  uitMajors,
  hanuMajors,
  vnuMajors,
  uelMajors,
} from "./majors";

export const mockSchools: School[] = [
  {
    id: "1",
    code: "BKA",
    name: "Đại học Bách Khoa Hà Nội",
    province: "Hà Nội",
    type: "Công lập",
    majors: hustMajors,
  },
  {
    id: "2",
    code: "BVH",
    name: "Học viện Công nghệ Bưu chính Viễn thông",
    province: "Hà Nội",
    type: "Công lập",
    majors: ptitMajors,
  },
  {
    id: "3",
    code: "QSB",
    name: "Đại học Bách Khoa - ĐHQG TP.HCM",
    province: "TP.HCM",
    type: "Công lập",
    majors: hcmutMajors,
  },
  {
    id: "4",
    code: "QHI",
    name: "Đại học Công nghệ - ĐHQGHN",
    province: "Hà Nội",
    type: "Công lập",
    majors: uetMajors,
  },
  {
    id: "5",
    code: "QSC",
    name: "Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
    province: "TP.HCM",
    type: "Công lập",
    majors: uitMajors,
  },
  {
    id: "6",
    code: "NHF",
    name: "Đại học Hà Nội",
    province: "Hà Nội",
    type: "Công lập",
    majors: hanuMajors,
  },
  {
    id: "7",
    code: "QHE",
    name: "Đại học Kinh tế - ĐHQGHN",
    province: "Hà Nội",
    type: "Công lập",
    majors: vnuMajors,
  },
  {
    id: "8",
    code: "QSK",
    name: "Đại học Kinh tế - Luật - ĐHQG TP.HCM",
    province: "TP.HCM",
    type: "Công lập",
    majors: uelMajors,
  }
];