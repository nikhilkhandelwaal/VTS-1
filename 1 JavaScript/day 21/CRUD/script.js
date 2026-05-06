const tableBody = document.querySelector('#tableBody');
const allEmployeeData = [];

const submitForm = (event) => {
    event.preventDefault();

    const newRow = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        role: event.target.role.value,
        city: event.target.city.value,
        salary: event.target.salary.value,
        company: event.target.company.value,
    }
    allEmployeeData.push(newRow);
    event.target.reset();
    showEmployeeData();
}

const showEmployeeData = () => {
    tableBody.innerHTML = "";
    allEmployeeData.forEach((value, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${value.name}</td>
                        <td>${value.email}</td>
                        <td>${value.phone}</td>
                        <td>${value.role}</td>
                        <td>${value.city}</td>
                        <td>${value.salary}</td>
                        <td>${value.company}</td>
                        <td>
                            <button class="action-btn edit" onclick=editRow(${index})>Edit</button>
                            <button class="action-btn delete" onclick=deleteRow(${index})>Delete</button>
                        </td>
        `
        tableBody.appendChild(tr);
    })
}

showEmployeeData();


const deleteRow = (index) => {
    allEmployeeData.splice(index, 1); // Remove element which is availabla at index number
    showEmployeeData();
}

const editRow = (index) => {
    const form = document.querySelector('form');

}
