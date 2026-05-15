import './style.css';
import { mockSchools } from './data/schools';
import { searchByName, searchByProvince } from './utils/filter';
import { School } from './types/school';

let currentSchool: School[] = mockSchools;
let selectedSchoolName: string | null = null;

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const provinceFilter = document.getElementById("provinceFilter") as HTMLSelectElement;
const schoolListElement = document.getElementById("schoolList") as HTMLUListElement;
const schoolDetailElement = document.getElementById("schoolDetail") as HTMLDivElement;

const renderSchools = () => {
    schoolListElement.innerHTML = '';
    if (currentSchool.length === 0) {
        schoolListElement.innerHTML = '<li>Không tìm thấy trường nào</li>';
        return;
    }
    currentSchool.forEach(school => {
        const li = document.createElement('li');
        li.className = `school-item ${school.id === selectedSchoolName ? 'active' : ''}`
        li.onclick = () => {
            selectedSchoolName = school.id;
            renderSchoolDetail(school);
            renderSchools();
        }
        li.innerHTML = `
        <h3>${school.name} (${school.code})</h3>
        <p>${school.province} | ${school.type}</p>`
        schoolListElement.appendChild(li);
    });
};

const renderSchoolDetail = (school: School) => {
    const majorHTML = school.majors.map(major => `
        <tr>
            <td>${major.name}</td>
            <td>${major.code}</td>
            <td>${major.quota || '-'}</td>
            <td class="score-col">${major.score}</td>
        </tr>
    `).join('');
    schoolDetailElement.innerHTML = `
    <div class="detail-header">
        <h2>${school.name}</h2>
        <p><strong>Mã trường:</strong> ${school.code}</p>
        <p><strong>Khu vực:</strong> ${school.province}</p>
        <p><strong>Loại hình:</strong> ${school.type}</p>
    </div>

    <h3>Điểm chuẩn các ngành đào tạo năm 2025</h3>
    <br/>
    <table class="major-table">
        <thead>
        <tr>
            <th>Tên ngành</th>
            <th>Mã ngành</th>
            <th>Chỉ tiêu</th>
            <th>Điểm chuẩn 2025</th>
        </tr>
        </thead>
        <tbody>
        ${majorHTML}
        </tbody>
    </table>
    `;
};

const applyFilters = () => {
    const name = searchInput.value;
    const province = provinceFilter.value;

    let filtered = searchByName(mockSchools, name);
    filtered = searchByProvince(filtered, province);

    currentSchool = filtered;
    renderSchools();
};

searchInput.addEventListener('input', applyFilters);
provinceFilter.addEventListener('change', applyFilters);

renderSchools();