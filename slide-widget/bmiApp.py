from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen


class UI(ScreenManager): #หน้าจอต่างๆ เชื่อมโยงไปที่ .kv
    pass

class Scr_bmi(Screen): # ui 1
    def cal_bmi(self): # ค่า bmi = น้ำหนัก กก / ( ส่วนสูง เมตร * ส่วนสูง )
        weight = float( self.ids.txt_weight.text)
        height = int( self.ids.txt_height.text)
        height = height/100
        bmi = weight/(height*height)
        self.ids.lbl_bmi.text=str(bmi)
        if bmi > 35:
            self.ids.lbl_bmi.color ="#FF0000" # สีแดง
            self.ids.img_bmi.source= "pic/5.PNG"
        elif bmi > 30:
            self.ids.lbl_bmi.color= "#FF6600" # สีส้ม
            self.ids.img_bmi.source= "pic/4.PNG"
        elif bmi > 25:
            self.ids.lbl_bmi.color= "#FFFF00" # สีเหลือง
            self.ids.img_bmi.source= "pic/3.PNG"
        elif bmi > 18:
            self.ids.lbl_bmi.color= "#33FF00" # สีเขียว
            self.ids.img_bmi.source= "pic/2.PNG"
        else:
            self.ids.lbl_bmi.color= "#33FFFF" # สีฟ้า
            self.ids.img_bmi.source= "pic/1.PNG"
class Scr_knowledge(Screen): #
    pass
           
class bmiApp(App):
    def build(self):
        return UI()
    
if __name__=="__main__":
    bmiApp().run()