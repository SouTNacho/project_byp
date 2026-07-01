import formTools from "/js/library.js"
const { registerValidator } = formTools

const form = document.querySelector("#employee_form")
const register = document.querySelector("#register")
const update = document.querySelector("#update")
const submit_btn = document.querySelector("#employee_register_btn")
const submit_btn_msg = document.querySelector("#employee_register_btn_msg")
const update_container = document.querySelector("#update_container")
const employee_id = document.querySelector("#employee_id")
const id_msg = document.querySelector("#employee_id_msg")
const title = document.querySelector(".form_title")

let btn_cheked
let employee_especiality
let especiality_msg
let license_category
let license_category_msg
let license_expired
let license_expired_msg
let employee_permissions
let permissions_msg

register.addEventListener('click', () => {

    form.action = "/php/employee_register.php"

    submit_btn.value = "Registrar Funcionario"
    update.classList.remove("cheked")
    register.classList.add("cheked")
    btn_cheked = "register"

    submit_btn.classList.remove("uncheked")
    submit_btn_msg.textContent = ""

    update_container.classList.add("hidden")
    employee_id.required = false
    employee_id.value = ""
    id_msg.textContent = ""
    employee_id.classList.remove("valid", "invalid")
    title.textContent = "Registro de funcionario"
})

update.addEventListener('click', () => {

    form.action = "/php/employee_update.php"

    submit_btn.value = "Actualizar Funcionario"
    update.classList.add("cheked")
    register.classList.remove("cheked")
    btn_cheked = "update"

    submit_btn.classList.remove("uncheked")
    submit_btn_msg.textContent = ""

    update_container.classList.remove("hidden")
    employee_id.required = true
    title.textContent = "Actualización de funcionario"
})

const employee_first_name = document.querySelector("#employee_first_name")
const employee_last_name = document.querySelector("#employee_last_name")
const employee_document = document.querySelector("#employee_document")
const employee_nationality = document.querySelector("#employee_nationality")
const employee_birthdate = document.querySelector("#employee_birthdate")
const employee_department = document.querySelector("#employee_department")
const employee_locality = document.querySelector("#employee_locality")
const other_locality = document.querySelector("#other_locality")
const employee_direction = document.querySelector("#employee_direction")
const employee_apartment = document.querySelector("#employee_apartment")
const employee_email = document.querySelector("#employee_email")
const employee_cellphone_code = document.querySelector("#employee_cellphone_code")
const employee_cellphone_number = document.querySelector("#employee_cellphone_number")
const employee_position = document.querySelector("#employee_position")
const specialst_information = document.querySelector("#specialst_information")
const employee_entry_date = document.querySelector("#employee_entry_date")
const employee_password = document.querySelector("#employee_password")
const confirm_password = document.querySelector("#confirm_password")
const other_locality_container = document.querySelector(".other_locality_container")

const first_name_msg = document.querySelector("#employee_first_name_msg")
const last_name_msg = document.querySelector("#employee_last_name_msg")
const document_msg = document.querySelector("#employee_document_msg")
const nationality_msg = document.querySelector("#employee_nationality_msg")
const birthdate_msg = document.querySelector("#employee_birthdate_msg")
const department_msg = document.querySelector("#employee_department_msg")
const locality_msg = document.querySelector("#employee_locality_msg")
const other_locality_msg = document.querySelector("#other_locality_msg")
const direction_msg = document.querySelector("#employee_direction_msg")
const apartment_msg = document.querySelector("#employee_apartment_msg")
const email_msg = document.querySelector("#employee_email_msg")
const cellphone_number_msg = document.querySelector("#employee_cellphone_number_msg")
const position_msg = document.querySelector("#employee_position_msg")
const entry_date_msg = document.querySelector("#employee_entry_date_msg")
const password_msg = document.querySelector("#employee_password_msg")
const confirm_password_msg = document.querySelector("#confirm_password_msg")

formTools.loadNationalitiesSelect(employee_nationality)
formTools.loadDepartmentsSelect(employee_department)
formTools.loadPhoneCodesSelect(employee_cellphone_code)

employee_department.addEventListener('change', () => {

    formTools.loadLocationsSelect(employee_locality, employee_department)
    registerValidator.selectsInput(employee_department, department_msg)
})

employee_locality.addEventListener('change', () => registerValidator.localitySelect(employee_locality, locality_msg, other_locality, other_locality_container))
employee_id.addEventListener("input", () => formTools.loginValidator.idEmployeeInput(employee_id, id_msg))
employee_first_name.addEventListener('input', () => registerValidator.stringsInput(employee_first_name, first_name_msg))
employee_last_name.addEventListener('input', () => registerValidator.stringsInput(employee_last_name, last_name_msg))
employee_document.addEventListener('input', () => registerValidator.documentIdInput(employee_document, document_msg))
employee_nationality.addEventListener('change', () => registerValidator.selectsInput(employee_nationality, nationality_msg))
employee_birthdate.addEventListener('input', () => registerValidator.dateInput(employee_birthdate, birthdate_msg))
employee_direction.addEventListener('input', () => registerValidator.stringsInput(employee_direction, direction_msg))
employee_apartment.addEventListener('input', () => registerValidator.doorNumberInput(employee_apartment, apartment_msg))
employee_email.addEventListener('input', () => registerValidator.emailInput(employee_email, email_msg))
employee_cellphone_code.addEventListener('change', () => registerValidator.selectsInput(employee_cellphone_code, cellphone_number_msg))
employee_cellphone_number.addEventListener('input', () => registerValidator.phoneNumberInput(employee_cellphone_number, cellphone_number_msg))
employee_entry_date.addEventListener('input', () => registerValidator.dateInput(employee_entry_date, entry_date_msg))
employee_password.addEventListener('input', () => registerValidator.passwordInput(employee_password, password_msg))
confirm_password.addEventListener('input', () => registerValidator.passwordMatch(confirm_password, confirm_password_msg, employee_password))
other_locality.addEventListener("input", () => registerValidator.stringsInput(other_locality, other_locality_msg))

employee_position.addEventListener('change', async () => {

    registerValidator.selectsInput(employee_position, position_msg)
    const value = employee_position.value.trim()

    if (value === "") specialst_information.innerHTML = ""

    if (value === "FA") {

        try {

            const file = await fetch("/html/administrator_specialist.html")
            specialst_information.innerHTML = await file.text()

            employee_permissions = document.querySelector("#employee_permissions")
            permissions_msg = document.querySelector("#employee_permissions_msg")
            employee_permissions.addEventListener('change', () => registerValidator.selectsInput(employee_permissions, permissions_msg))
        } catch(error) {

            console.error("Error:", error.message)
        }
    }

    if (value === "DR") {

        try {

            const file = await fetch("/html/driver_specialist.html")
            specialst_information.innerHTML = await file.text()

            license_expired = document.querySelector("#employee_license_expired")
            license_expired_msg = document.querySelector("#employee_license_expired_msg")

            license_category = document.querySelector("#employee_license_category")
            license_category_msg = document.querySelector("#employee_license_category_msg")

            license_expired.addEventListener('input', () => registerValidator.dateInput(license_expired, license_expired_msg))
            license_category.addEventListener('change', () => registerValidator.selectsInput(license_category, license_category_msg))
        } catch(error) {

            console.error("Error:", error.message)
        }
    }
    
    if (value === "CO") {

        try {

            const file = await fetch("/html/copilot_specialist.html")
            specialst_information.innerHTML = await file.text()

            employee_especiality = document.querySelector("#employee_especiality")
            especiality_msg = document.querySelector("#employee_especiality_msg")
            employee_especiality.addEventListener('change', () => registerValidator.selectsInput(employee_especiality, especiality_msg))
        } catch(error) {

            console.error("Error:", error.message)
        }
    }

})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (btn_cheked === "update") {

        if (!formTools.loginValidator.idEmployeeInput(employee_id, id_msg)) {

            alert("Debe completar el código de funcionario")
            return
        }
    }
    else if (btn_cheked === "register") {

        console.log("Se realizo un registro de funcionario")
    }
    else {
        
        alert("Debe selecionar una opcion del CRUD")
        return
    }

    if (employee_position.value === "FA") {

        if (!registerValidator.selectsInput(employee_permissions, permissions_msg)) {

            alert("Debe completar todos los campos")
            return
        }
    }
    else if (employee_position.value === "DR") {

        if (!registerValidator.dateInput(license_expired, license_expired_msg) ||
            !registerValidator.selectsInput(license_category, license_category_msg)) {

            alert("Debe completar todos los campos")
            return
        }
    }
    else if (employee_position.value === "CO") {
        
        if (!registerValidator.selectsInput(employee_especiality, especiality_msg)) {

            alert("Debe completar todos los campos")
            return
        }
    }
    else {

        alert("Debe seleccionar un cargo valido")
        return
    }

    if (other_locality.required && !registerValidator.stringsInput(other_locality, other_locality_msg)) {

        alert("Debe completar todos los campos")
        return
    }

    if (!registerValidator.fullPhoneNumber(employee_cellphone_code, employee_cellphone_number)) {

        alert("El celular ingresado no es correcto")
        return
    }

    if (!registerValidator.stringsInput(employee_first_name, first_name_msg) ||
        !registerValidator.stringsInput(employee_last_name, last_name_msg) ||
        !registerValidator.documentIdInput(employee_document, document_msg) ||
        !registerValidator.selectsInput(employee_nationality, nationality_msg) ||
        !registerValidator.dateInput(employee_birthdate, birthdate_msg) ||
        !registerValidator.stringsInput(employee_direction, direction_msg) ||
        !registerValidator.doorNumberInput(employee_apartment, apartment_msg) ||
        !registerValidator.emailInput(employee_email, email_msg) ||
        !registerValidator.selectsInput(employee_cellphone_code, cellphone_number_msg) ||
        !registerValidator.dateInput(employee_entry_date, entry_date_msg) ||
        !registerValidator.passwordInput(employee_password, password_msg) || 
        !registerValidator.passwordMatch(confirm_password, confirm_password_msg, employee_password) ||
        !registerValidator.localitySelect(employee_locality, locality_msg, other_locality, other_locality_container) ||
        !registerValidator.selectsInput(employee_department, department_msg)) {

            alert("Debe completar todos los campos")
            return
        }

        form.submit()
})


