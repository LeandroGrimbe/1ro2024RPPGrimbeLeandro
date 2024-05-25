class Vehiculo
{
    id;
    modelo;
    anoFabricacion;
    velMax;

    constructor(id, modelo, anoFabricacion, velMax)
    {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velMax = velMax;
    }
}

class Auto extends Vehiculo
{
    cantidadPuertas;
    asientos;
    
    constructor(cantidadPuertas, asientos, id, modelo, anoFabricacion, velMax)
    {
        super(id, modelo, anoFabricacion, velMax);
        this.cantidadPuertas = cantidadPuertas;
        this.asientos = asientos;
    }
}

class Camion extends Vehiculo
{
    carga;
    autonomia;

    constructor(carga, autonomia, id, modelo, anoFabricacion, velMax)
    {
        super(id, modelo, anoFabricacion, velMax);
        this.carga = carga;
        this.autonomia = autonomia;
    }
}

function MostrarColumnas() {
    const columnas = 
    [
        { check: "checkID", col: "columnaID" },
        { check: "checkModelo", col: "columnaModelo" },
        { check: "checkAnioFabricacion", col: "columnaAnioFabricacion" },
        { check: "checkVelMax", col: "columnaVelMax" },
        { check: "checkCantPuertas", col: "columnaCantPuertas" },
        { check: "checkAsientos", col: "columnaAsientos" },
        { check: "checkCarga", col: "columnaCarga" },
        { check: "checkAutonomia", col: "columnaAutonomia" }
    ];

    columnas.forEach(({ check, col }) => {
        const checkBox = document.getElementById(check);
        const columna = document.getElementById(col);
        columna.style.display = "none";
        checkBox.addEventListener("change", function () {
            columna.style.display = checkBox.checked ? "table-cell" : "none";
        });
    });
}

function CargarDatosTabla()
{
    document.getElementById("ResultadoPromedio").value = "";

    var tabla = document.getElementById("salida-datos");
    tabla.innerHTML="";
    
    //var indiceFila = 1;
    switch(filtro.value)
    {
        case "Todos":
            listaVehiculos.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();

                var colum1 = filaDatos.insertCell();
                colum1.innerHTML = vehiculo.id;

                var colum2 = filaDatos.insertCell();
                colum2.innerHTML = vehiculo.modelo;

                var colum3 = filaDatos.insertCell();
                colum3.innerHTML = vehiculo.anoFabricacion;

                var colum4 = filaDatos.insertCell();
                colum4.innerHTML = vehiculo.velMax;

                var colum5 = filaDatos.insertCell();
                if(vehiculo.cantidadPuertas == null)
                {
                    colum5.innerHTML = "NC";
                }
                else
                {
                    colum5.innerHTML = vehiculo.cantidadPuertas;
                }

                var colum6 = filaDatos.insertCell();
                if(vehiculo.asientos == null)
                {
                    colum6.innerHTML = "NC";
                }
                else
                {
                    colum6.innerHTML = vehiculo.asientos;
                }

                var colum7 = filaDatos.insertCell();
                if(vehiculo.carga == null)
                {
                    colum7.innerHTML = "NC";
                }
                else
                {
                    colum7.innerHTML = vehiculo.carga;
                }

                var colum8 = filaDatos.insertCell();
                if(vehiculo.autonomia == null)
                {
                    colum8.innerHTML = "NC";
                }
                else
                {
                    colum8.innerHTML = vehiculo.autonomia;
                }
            });
            break;

        case "Autos":
            listaAutos.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();

                var colum1 = filaDatos.insertCell();
                colum1.innerHTML = vehiculo.id;

                var colum2 = filaDatos.insertCell();
                colum2.innerHTML = vehiculo.modelo;

                var colum3 = filaDatos.insertCell();
                colum3.innerHTML = vehiculo.anoFabricacion;

                var colum4 = filaDatos.insertCell();
                colum4.innerHTML = vehiculo.velMax;

                var colum5 = filaDatos.insertCell();
                colum5.innerHTML = vehiculo.cantidadPuertas;

                var colum6 = filaDatos.insertCell();
                colum6.innerHTML = vehiculo.asientos;

                var colum7 = filaDatos.insertCell();
                colum7.innerHTML = "NC";

                var colum8 = filaDatos.insertCell();
                colum8.innerHTML = "NC";
            });
            break;
        
        case "Camiones":
            listaCamiones.forEach(vehiculo => {
                var filaDatos = tabla.insertRow();

                var colum1 = filaDatos.insertCell();
                colum1.innerHTML = vehiculo.id;

                var colum2 = filaDatos.insertCell();
                colum2.innerHTML = vehiculo.modelo;

                var colum3 = filaDatos.insertCell();
                colum3.innerHTML = vehiculo.anoFabricacion;

                var colum4 = filaDatos.insertCell();
                colum4.innerHTML = vehiculo.velMax;

                var colum5 = filaDatos.insertCell();
                colum5.innerHTML = "NC"

                var colum6 = filaDatos.insertCell();
                colum6.innerHTML = "NC"

                var colum7 = filaDatos.insertCell();
                colum7.innerHTML = vehiculo.carga;

                var colum8 = filaDatos.insertCell();
                colum8.innerHTML = vehiculo.autonomia;
            });
            break;
    }
}

function CalcularPromedioVel()
{
    var cantidadVehiculos = 0;
    var totalVelMax = 0;
    switch(filtro.value)
    {
        case "Todos":
            listaVehiculos.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;

        case "Autos":
            listaAutos.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;

        case "Camiones":
            listaCamiones.forEach(vehiculo => {
                totalVelMax += vehiculo.velMax;
                cantidadVehiculos++;
            });
            break;
    }

    var promedioVel = totalVelMax / cantidadVehiculos;
    var textPromedio = document.getElementById("ResultadoPromedio");
    textPromedio.value = promedioVel;
}

function MostrarABM()
{
    var formListado = document.getElementById("FormListado");
    formListado.style.display = "none";

    var formABM = document.getElementById("FormABM");
    formABM.style.display = "block";
}

function VolverAlListado()
{
    var formListado = document.getElementById("FormListado");
    formListado.style.display = "block";

    var formABM = document.getElementById("FormABM");
    formABM.style.display = "none";
    
    document.getElementById("idABM").value = "";
    document.getElementById("modeloABM").value = "";
    document.getElementById("anioFabricacionABM").value = "";
    document.getElementById("velMaxABM").value = "";
    document.getElementById("TiposABM").value = "-";
    document.getElementById("cantPuertasABM").value = "";
    document.getElementById("asientosABM").value = "";
    document.getElementById("cargaABM").value = "";
    document.getElementById("autonomiaABM").value = "";
}

function CrearVehiculo()
{
    var modelo = document.getElementById("modeloABM").value;
    var anioFabricacion = document.getElementById("anioFabricacionABM").value;
    var velMax = document.getElementById("velMaxABM").value;
    var tipoVehiculo = document.getElementById("TiposVehiculoABM").value;
    var cantPuertas = document.getElementById("cantPuertasABM").value;
    var asientos = document.getElementById("asientosABM").value;
    var carga = document.getElementById("cargaABM").value;
    var autonomia = document.getElementById("autonomiaABM").value;

    var error = true;
    if(modelo != null && anioFabricacion > 1985 && velMax > 0)
    {
        switch(tipoVehiculo)
        {
            case "Auto":
                if(cantPuertas > 2 && asientos > 2)
                {
                    var id = CalcularID();
                    var nuevoAuto = new Auto(cantPuertas, asientos, id, modelo, anioFabricacion, velMax);

                    listaAutos.push(nuevoAuto);
                    listaVehiculos.push(nuevoAuto);
                    error = false;
                }
                break;

            case "Camion":
                if(carga > 0 && autonomia > 0)
                {
                    var id = CalcularID();
                    var nuevoCamion = new Camion(carga, autonomia, id, modelo, anioFabricacion, velMax)

                    listaCamiones.push(nuevoCamion);
                    listaVehiculos.push(nuevoCamion);
                    error = false;
                }
                break;
        }
    }

    if(error)
    {
        alert("Datos erroneos, reintente..");
    }
    else
    {
        alert("Datos cargados correctamente, volviendo al listado...");
        VolverAlListado();
        CargarDatosTabla();
    }
}

function CalcularID()
{
    idMax = 0;
    listaVehiculos.forEach(vehiculo => {
        if(vehiculo.id > idMax)
        {
            idMax = vehiculo.id;
        }
    });

    return idMax + 1;
}

function BorrarVehiculo()
{
    var idABorrar = document.getElementById("idABM").value;
    if(idABorrar != null && idABorrar > 0)
    {
        for(var i=0; i<listaVehiculos.length; i++)
        {
            if(idABorrar == listaVehiculos[i].id)
            {
                listaVehiculos.splice(i, 1);

                VolverAlListado();
                ActualizarListas();
                CargarDatosTabla();
                break;
            }
        }
    }
    else
        alert("No hay datos cargados para borrar");
}

function ActualizarListas()
{
    listaCamiones = [];
    listaAutos = [];

    listaVehiculos.forEach(vehiculo => {
        if(vehiculo.cantidadPuertas == null)
        {
            var vehiculoAux = new Camion(vehiculo.carga, vehiculo.autonomia, vehiculo.id, vehiculo.modelo, vehiculo.anoFabricacion, vehiculo.velMax);
            listaCamiones.push(vehiculoAux);
        }
        else
        {
            var vehiculoAux = new Auto(vehiculo.cantidadPuertas, vehiculo.asientos, vehiculo.id, vehiculo.modelo, vehiculo.anoFabricacion, vehiculo.velMax);
            listaAutos.push(vehiculoAux);
        }
    });
}

var botonABM = document.getElementById("Agregar");
botonABM.addEventListener("click", MostrarABM);

var botonCancelar = document.getElementById("Cancelar");
botonCancelar.addEventListener("click", VolverAlListado);

var filtro = document.getElementById("FiltrosCbo");
filtro.addEventListener("change", CargarDatosTabla);

var botonCalculo = document.getElementById("BotonCalculo");
botonCalculo.addEventListener("click", CalcularPromedioVel);

var tiposABM = document.getElementById("TiposVehiculoABM");
tiposABM.addEventListener("change", function () {
    switch(tiposABM.value)
    {
        case "Auto":
            document.getElementById("lblCargaABM").style.display="none";
            document.getElementById("cargaABM").style.display="none";
            document.getElementById("lblAutonomiaABM").style.display="none";
            document.getElementById("autonomiaABM").style.display="none";

            document.getElementById("lblCantPuertasABM").style.display="inline";
            document.getElementById("cantPuertasABM").style.display="inline";
            document.getElementById("lblAsientosABM").style.display="inline";
            document.getElementById("asientosABM").style.display="inline";
            break
        
        case "Camion":
            document.getElementById("lblCargaABM").style.display="inline";
            document.getElementById("cargaABM").style.display="inline";
            document.getElementById("lblAutonomiaABM").style.display="inline";
            document.getElementById("autonomiaABM").style.display="inline";

            document.getElementById("lblCantPuertasABM").style.display="none";
            document.getElementById("cantPuertasABM").style.display="none";
            document.getElementById("lblAsientosABM").style.display="none";
            document.getElementById("asientosABM").style.display="none";
            break;

        case "Neutro":
            document.getElementById("lblCargaABM").style.display="none";
            document.getElementById("cargaABM").style.display="none";
            document.getElementById("lblAutonomiaABM").style.display="none";
            document.getElementById("autonomiaABM").style.display="none";

            document.getElementById("lblCantPuertasABM").style.display="none";
            document.getElementById("cantPuertasABM").style.display="none";
            document.getElementById("lblAsientosABM").style.display="none";
            document.getElementById("asientosABM").style.display="none";
            break;
    }
});

var botonCrear = document.getElementById("Crear");
botonCrear.addEventListener("click", CrearVehiculo);

var botonEliminar = document.getElementById("Eliminar");
botonEliminar.addEventListener("click", BorrarVehiculo);

var jsonVehiculos = '[{"id":1,"modelo":"Fiat 100","anoFabricacion":1987,"velMax":60,"cantidadPuertas":4,"asientos":4},{"id":2,"modelo":"Ford Mustang","anoFabricacion":1960,"velMax":100,"cantidadPuertas":2,"asientos":2},{"id":3,"modelo":"Ferrary F100","anoFabricacion":1999,"velMax":200,"cantidadPuertas":2,"asientos":2},{"id":4,"modelo":"Escania","anoFabricacion":1987,"velMax":60,"carga":5550,"autonomia":300},{"id":5,"modelo":"Dodge Ram","anoFabricacion":1970,"velMax":100,"carga":2333,"autonomia":400},{"id":6,"modelo":"Chevy Silverado","anoFabricacion":1994,"velMax":80,"carga":1000,"autonomia":450}]'
let listaVehiculos = JSON.parse(jsonVehiculos);

let listaAutos = [];
let listaCamiones = [];

CargarDatosTabla();
MostrarColumnas();








