from kivy.app import App
from kivy.uix.screenmanager import Screen

class UI(Screen): #หน้าจอต่างๆ เชื่อมโยงไปที่ .kv
    def add_item(self):
        self.ids.spin_lang.values.append(self.ids.txt_input.text)

class spinnerApp(App):
    def build(self):
        return UI()
    
if __name__=="__main__":
    spinnerApp().run()