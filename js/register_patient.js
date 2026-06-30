import formTools from "/js/library.js"
const { registerValidator } = formTools
const form = document.querySelector("#register_patient_form")

// Patient
const patient_document = document.querySelector("#patient_document")
const first_name = document.querySelector("#patient_first_name")
const last_name = document.querySelector("#patient_last_name")
const document_msg = document.querySelector("#patient_document_msg")
const first_name_msg = document.querySelector("#patient_first_name_msg")
const last_name_msg = document.querySelector("#patient_last_name_msg")

// Contact
const contact_document = document.querySelector("#contact_patient_document")
const contact_first_name = document.querySelector("#contact_patient_first_name")
const contact_last_name = document.querySelector("#contact_patient_last_name")
const contact_document_msg = document.querySelector("#contact_patient_document_msg")
const contact_first_name_msg = document.querySelector("#contact_patient_first_name_msg")
const contact_last_name_msg = document.querySelector("#contact_patient_last_name_msg")

patient_document.addEventListener('input', () => registerValidator.documentIdInput(patient_document, document_msg))
first_name.addEventListener('input', () => registerValidator.stringsInput(first_name, first_name_msg))
last_name.addEventListener('input', () => registerValidator.stringsInput(last_name, last_name_msg))
contact_document.addEventListener('input', () => registerValidator.optionalDocumentIdInput(contact_document, contact_document_msg))
contact_first_name.addEventListener('input', () => registerValidator.optionalInput(contact_first_name, contact_first_name_msg))
contact_last_name.addEventListener('input', () => registerValidator.optionalInput(contact_last_name, contact_last_name_msg))

form.addEventListener('submit', (event) => {

    if ( !registerValidator.documentIdInput(patient_document, document_msg) ||
        !registerValidator.stringsInput(first_name, first_name_msg) ||
        !registerValidator.stringsInput(last_name, last_name_msg) ||
        !registerValidator.optionalDocumentIdInput(contact_document, contact_document_msg) ||
        !registerValidator.optionalInput(contact_first_name, contact_first_name_msg) ||
        !registerValidator.optionalInput(contact_last_name, contact_last_name_msg) ) {

            event.preventDefault()
            alert("Debes completar correctamente los campos")
            return
        }
})