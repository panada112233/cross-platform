from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.clock import Clock

class UI(ScreenManager): #หน้าจอต่างๆ เชื่อมโยงไปที่ .kv
    pass

class Logo_page(Screen): # ui 
    def __init__(self, **kw):
        super().__init__(**kw)
        Clock.schedule_once(self.go_to_screen, 5)
        
    def go_to_screen(self, sec): # เปลี่ยนไปหน้า Main Screen
        self.manager.current = "Page1"

class Page1(Screen): # ui 
    count =0
    def __init__(self, **kw):
        super().__init__(**kw)
        Clock.schedule_interval(self.update_label, 1)

    def update_label(self,sec):
        self.count+=1
        self.ids.lbl_count.text = str(self.count)

class ClockApp(App):
    def build(self):
        return UI()
    
if __name__=="__main__":
    ClockApp().run()