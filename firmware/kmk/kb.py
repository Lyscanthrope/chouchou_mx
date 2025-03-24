import board
from kmk.kmk_keyboard import KMKKeyboard
from kmk.scanners.keypad import KeysScanner
from kmk.extensions.media_keys import MediaKeys
from kmk.keys import KC
from kmk.modules.sticky_keys import StickyKeys

from taipo import Taipo

class ChouChou(KMKKeyboard):

    def __init__(self):
        super().__init__()
        self.matrix = KeysScanner([
            board.GP26, board.GP27, board.GP28, board.GP29,   board.GP0, board.GP1, board.GP2, board.GP3,
            board.GP12, board.GP13, board.GP14, board.GP15,   board.GP4, board.GP5, board.GP6, board.GP7,
                                    board.GP11, board.GP10,   board.GP9, board.GP8,
        ], value_when_pressed=False,
            pull=True)
        self.extensions.append(MediaKeys())
        self.modules.append(StickyKeys())
        self.modules.append(Taipo())

        self.keymap = [
            [  KC.TP_TLP,    KC.TP_TLR,    KC.TP_TLM,       KC.TP_TLI,          KC.TP_TRI,     KC.TP_TRM,     KC.TP_TRR,     KC.TP_TRP,
            KC.TP_BLP,    KC.TP_BLR,    KC.TP_BLM,       KC.TP_BLI,          KC.TP_BRI,     KC.TP_BRM,     KC.TP_BRR,     KC.TP_BRP,
                                        KC.TP_LIT,       KC.TP_LOT,          KC.TP_ROT,     KC.TP_RIT,
        ]]

