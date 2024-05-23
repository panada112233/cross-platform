from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.app import MDApp


class UI(MDBoxLayout):
    pass

class DemoApp(MDApp):
    def build(self):
        return UI ()
    
if __name__=="__main__":
    DemoApp().run()