from enum import Enum
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium import webdriver


class GeneradorDriver():
    def Generar(self,tipo_browser):
        if tipo_browser == TipoBrowser.CHROME:            
            # self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
            ###########################################################################################
            # service=Service(ChromeDriverManager().install())
            # service = Service(executable_path=r"D:\WebDrivers\chromedriver-win32\chromedriver.exe")
            # options = webdriver.ChromeOptions()
            # self.driver = webdriver.Chrome(service=service, options=options)
            ###########################################################################################
            self.driver = webdriver.Chrome(service=Service(executable_path=r".\utils\chromedriver.exe"))
            self.driver.maximize_window()
            return self.driver

class GeneradorDriverHeadLess():
    def Generar(self,tipo_browser):
        if tipo_browser == TipoBrowser.CHROME:
            # Config para ejecución headless chrome
            chrome_options = Options()
            chrome_options.add_argument("enable-logging")
            chrome_options.add_argument("headless")
            chrome_options.add_argument("disable-gpu")
            service = Service(executable_path=r".\utils\chromedriver116.exe")
            # service = Service(ChromeDriverManager().install())
            self.driver = webdriver.Chrome(service=service, options=chrome_options)
            self.driver.maximize_window()
            return self.driver


class TipoBrowser(str,Enum):
    CHROME = "chrome"
    FIREFOX = "firefox"
