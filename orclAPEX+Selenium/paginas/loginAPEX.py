import random
import string
from utils.drivers import GeneradorDriver, TipoBrowser
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys

class LoginApex():
    boton_login          = (By.XPATH, "//*[@id='B11409857260876630']")  #XPATH del boton login cambiar por el tuyo
    login = (By.XPATH, "//*[@id='P9999_USERNAME']") #XPATH del item user cambiar por el tuyo
    clave_login = (By.XPATH, "//*[@id='P9999_PASSWORD']")#XPATH del item password cambiar por el tuyo
    usuario_login           = (By.XPATH, "//*//*[@id='L11525360857973883']") # XPATH del user ya logueado, que aparece arriba cambiar por el tuyo

    url = "tuweb.com/login"

    def __init__(self,driver):
        self.driver = driver

    def cargar_pagina(self):
        self.driver.get(self.url)
    def ingresar_usuario_login(self, login):
        WebDriverWait(self.driver,10).until(lambda d : d.find_element(*self.login)).send_keys(login)
    def ingresar_password_login(self, clave_login):
        WebDriverWait(self.driver,10).until(lambda d : d.find_element(*self.clave_login)).send_keys(clave_login)
    def texto_usuario_login(self):
        return WebDriverWait(self.driver,20).until(lambda d : d.find_element(*self.usuario_login)).text
        
    def botonLogin(self):
        WebDriverWait(self.driver,10).until(lambda d : d.find_element(*self.boton_login)).click()
		
	
