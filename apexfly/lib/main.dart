import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ClientesScreen extends StatefulWidget {
  @override
  _ClientesScreenState createState() => _ClientesScreenState();
}

class _ClientesScreenState extends State<ClientesScreen> {
  List<dynamic> clientes = [];

  Future<void> fetchClientes() async {
    final response = await http.get(Uri.parse('https://gc4529031ed9eb7-p3zpjccedme5d537.adb.sa-saopaulo-1.oraclecloudapps.com/ords/dev/apexfly/clientes'));
    if (response.statusCode == 200) {
      setState(() {
        clientes = json.decode(response.body);
      });
    } else {
      throw Exception('Failed to load data');
    }
  }

  @override
  void initState() {
    super.initState();
    fetchClientes();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Clientes')),
      body: ListView.builder(
        itemCount: clientes.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(clientes[index]['nombre']),
            subtitle: Text(clientes[index]['email']),
          );
        },
      ),
    );
  }
}
