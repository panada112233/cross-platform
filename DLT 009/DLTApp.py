from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen

class UI(ScreenManager): #หน้าจอต่างๆ เชื่อมโยงไปที่ .kv
    pass

class MainScreen(Screen): # ui 1
    pass

class RegisterScreen(Screen): #
    def check_data(self):
        id_card = self.ids.id_card_input.text
        phone_number = self.ids.phone_number_input.text

        if len(id_card) != 13 or len(phone_number) != 10:
            self.ids.btn_regis.text = "ไม่พร้อมบันทึกข้อมูล"
        else:
            self.ids.btn_regis.text = "พร้อมบันทึกข้อมูล"
            
class DLTApp(App):
    def build(self):
        return UI()
    
if __name__=="__main__":
    DLTApp().run()