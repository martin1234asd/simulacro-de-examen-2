const lista = []

const agregarProductos = (event) =>{
    event.preventDefault()
    let nombre = document.getElementById("nombre")
    let cantidad = document.getElementById("cantidad")

    let registros = {
        nombre: nombre.value,
        cantidad: cantidad.valueAsNumber,
        estado: `<input type="checkbox">`
    }
    lista.push(registros)
    nombre.value = ""
    cantidad.value = ""

    mostrarLista()
}
const mostrarLista = () =>{
   let salida = document.getElementById("salida")
   salida.innerHTML = ""
   lista.map((registros)=>{
    salida.innerHTML +=`
    <tr>
        <th>${registros.nombre} </th>
        <th>${registros.cantidad} </th>
        <th>${registros.estado} </th>
    </tr>
    `

   })
}