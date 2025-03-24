import board
from kmk.kmk_keyboard import KMKKeyboard
from kmk.scanners.keypad import KeysScanner
from kmk.extensions.media_keys import MediaKeys
from kmk.extensions.international import International
from kmk.keys import KC
from kmk.modules.sticky_keys import StickyKeys
# from taipo import Taipo
from kmk.keys import Key, KC, make_key,KeyboardKey
from kmk.modules.combos import Combos, Chord, Sequence
import combos

# class ChouChou(KMKKeyboard):
#     def __init__(self):
#         super().__init__()
#         self.matrix = KeysScanner([
#             board.GP26, board.GP27, board.GP28, board.GP29,   board.GP0, board.GP1, board.GP2, board.GP3,
#             board.GP12, board.GP13, board.GP14, board.GP15,   board.GP4, board.GP5, board.GP6, board.GP7,
#                                     board.GP11, board.GP10,   board.GP9, board.GP8,
#         ], value_when_pressed=False,
#             pull=True)
#         self.extensions.append(MediaKeys())
#         self.modules.append(StickyKeys())
#         # self.modules.append(Taipo())

#         self.keymap = [
#             [  KC.TP_TLP,    KC.TP_TLR,    KC.TP_TLM,       KC.TP_TLI,          KC.TP_TRI,     KC.TP_TRM,     KC.TP_TRR,     KC.TP_TRP,
#             KC.TP_BLP,    KC.TP_BLR,    KC.TP_BLM,       KC.TP_BLI,          KC.TP_BRI,     KC.TP_BRM,     KC.TP_BRR,     KC.TP_BRP,
#                                         KC.TP_LIT,       KC.TP_LOT,          KC.TP_ROT,     KC.TP_RIT,
#         ]]

class French_Chouchou(KMKKeyboard):
    def __init__(self):
        # create and register the scanner
        super().__init__()
        self.combo_timeout=50
        self.matrix = KeysScanner(
            # require argument:
            pins=[
            board.GP26, board.GP27, board.GP28, board.GP29,   board.GP0, board.GP1, board.GP2, board.GP3,
            board.GP12, board.GP13, board.GP14, board.GP15,   board.GP4, board.GP5, board.GP6, board.GP7,
                                    board.GP11, board.GP10,   board.GP9, board.GP8,
        ],             value_when_pressed=False,
            pull=True,
            interval=0.02,  # Debounce time in floating point seconds
            max_events=64
        )
        self.extensions.append(International())
        self.extensions.append(MediaKeys())
        self.combos = Combos()
        self.modules.append(self.combos) 
        self.modules.append(StickyKeys())
        from french import FR
        FR_special={
            "SHIFT": KC.SK(KC.LSFT,defer_release=True),
            "CTRL": KC.SK(KC.LCTL,defer_release=True),
            "ALT": KC.SK(KC.LALT,defer_release=True),
            "GUI": KC.SK(KC.LGUI,defer_release=True),
            "LEFT": KC.LEFT,
            "DOWN": KC.DOWN,
            "UP": KC.UP,
            "RIGHT": KC.RIGHT,
            "PGDOWN": KC.PGDOWN,
            "END": KC.END,
            "HOME":KC.HOME,
            "PGUP":KC.PGUP,
            "TAB":KC.TAB,
            "ENTER":KC.ENTER,
            "DEL":KC.DEL,
            "ESC":KC.ESC,    
            #tab enter
            "FN":KC.SPC,#FIXME: not working for function
            "ALTGR":KC.SK(KC.RALT,defer_release=True), 
        }
        FR.update(FR_special)


        self.keymap = [
            [FR["R"],    FR["O"],    FR["S"],       FR["I"],          FR["I"],     FR["S"],     FR["O"],     FR["R"],
            FR["N"],    FR["A"],    FR["T"],       FR["E"],           FR["E"],    FR["T"],    FR["A"],       FR["N"],
                                    FR["IT"],      FR["OT"],         FR["OT"],     FR["IT"],
        ]]

        self.combos.combos=combos.create_alpha_combo(combos.alpha,timeout=self.combo_timeout)
        # self.combos.combos+=combos.create_special_combo(timeout=self.combo_timeout)
        # self.combos.combos+=combos.create_innerthumb_combo(timeout=self.combo_timeout)
        # print(self.combos.combos)