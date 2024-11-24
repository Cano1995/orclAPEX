import unittest, time
import HtmlTestRunner
from utils.drivers import GeneradorDriver, TipoBrowser
from paginas.loginAPEX import LoginApex

class TestDWShop(unittest.TestCase):
    def setUp(self):
        self.orden_log = 1              
        self.driver = GeneradorDriver().Generar(TipoBrowser.CHROME)
        self.pagina_dws = LoginApex(self.driver)
        self.login = "criscan" # TEST 5
        self.clave_login = "criscan" # TEST 5
        self.tiempo = 3
    
    # Test 1 cargar pagina
    #def test1(self):
     #   self.pagina_dws.cargar_pagina()
       # time.sleep(3)
    # Test 2 ingresar datos
    def test2(self):
        log = "cargando pagina..."
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        self.pagina_dws.cargar_pagina()
        log = "Digitando usuario..."
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        self.pagina_dws.ingresar_usuario_login(self.login)
        log = "Digitando password..."
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        self.pagina_dws.ingresar_password_login(self.clave_login)
        log = "Haciendo Click..."
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        self.pagina_dws.botonLogin()

        log = "Corroborando resultado del registro de usuario..."
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        resultado = self.pagina_dws.texto_usuario_login()

        log = "Acceso exitoso con: <b>" + resultado + "</b>"
        print(str(self.orden_log) + ' - ' + log + '<br>')
        self.orden_log += 1
        
        
        time.sleep(5)
       
def tearDown(self):
        # Se cierra la ventana del navegador web
        self.driver.quit()

if __name__ == '__main__':
	
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output=r'.\Reportes'))
