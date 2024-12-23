import 'package:flutter/material.dart'; //para crear interfaces de usuario.
import 'package:http/http.dart' as http; //para realizar solicitudes HTTP.
import 'dart:convert'; //para convertir datos entre JSON y los objetos de Dart.

// Definimos un widget con estado para la pantalla de clientes.
class ClientesScreen extends StatefulWidget {
  @override
  _ClientesScreenState createState() => _ClientesScreenState();
}

// creamos una clase para manejar el estado del widget ClientesScreen.
class _ClientesScreenState extends State<ClientesScreen> {
  // array para almacenar los datos en la request
  List<dynamic> clientes = [];

  // Función asincrónica para obtener los datos de los clientes desde la API.
  Future<void> fetchClientes() async {
    // Realizamos una solicitud HTTP con el metodo GET.
    // pueden cambiar la url de la api por otra que les paresca
    //https://ed.team/blog/las-mejores-apis-publicas-para-practicar en esta pagina pueden encontrar
    //apis gratis para probar
    final response = await http.get(Uri.parse('https://gc4529031ed9eb7-p3zpjccedme5d537.adb.sa-saopaulo-1.oraclecloudapps.com/ords/dev/apexfly/clientes'));
    
    // Verifica si la solicitud fue exitosa (código 200).
    if (response.statusCode == 200) {
      setState(() {
        // Decodifica la respuesta JSON y lo almacena en el array clientes.
        clientes = json.decode(response.body);
      });
    } else {
      // captura en una excepción si la solicitud falla.
      throw Exception('Failed to load data');
    }
  }

  @override
  void initState() {
    super.initState();
    // Llamamos a la función fetchClientes() al inicializar el estado.
    fetchClientes();
  }

  @override
  Widget build(BuildContext context) {
    // Definimos la estructura principal de la pantalla.
    return Scaffold(
      appBar: AppBar(title: Text('Clientes')), // Barra superior con título.
      body: ListView.builder(
        // Definimos cuántos elementos tiene la lista.
        itemCount: clientes.length,
        // Construimos cada elemento de la lista.
        itemBuilder: (context, index) {
          return ListTile(
            // Mostramos el nombre del cliente en el título del elemento.
            title: Text(clientes[index]['nombre']),
            // Mostramos el email del cliente en el subtítulo del elemento.
            subtitle: Text(clientes[index]['email']),
          );
        },
      ),
    );
  }
}
