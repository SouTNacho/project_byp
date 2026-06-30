const buttonPaciente = document.querySelector("#patient")
const buttonFuncionario = document.querySelector("#employee")
const dinamicConter = document.querySelector("#dinamic_content")

buttonPaciente.addEventListener('click', async () => {

    try {
        
        const file = await fetch('/html/patientForm.html')
        const result = await file.text()
        dinamicConter.innerHTML = result

        const 


    } catch (error) {

        alert("Ha ocurrido un error, seleccione nuevamente")
    }
    
})

buttonFuncionario.addEventListener('click', async () => {
    try {

        const file = await fetch('/html/employeeForm.html')
        const result = await file.text()
        dinamicConter.innerHTML = result



    } catch (error) {

        alert("Ha ocurrido un error, seleccione nuevamente")
    }
})