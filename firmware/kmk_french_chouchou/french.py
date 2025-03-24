"""French binding for KMK."""

from kmk.keys import KC
from kmk.extensions.international import International
International()

FR = {
    "²": KC.GRV,   # ²
    "&": KC.N1,     # &
    "é": KC.N2,     # é
    "DQUO": KC.N3,     # "
    "QUOT": KC.N4,     # "
    "(": KC.N5,     # (
    "-": KC.N6,     # -
    "è": KC.N7,   # è
    "_": KC.N8,     # _
    "ç": KC.N9,     # ç
    "à": KC.N0,     # à
    ")": KC.MINS,  # )
    "=":  KC.EQL,   # =
    "A":    KC.Q,     # A
    "Z":    KC.W,     # Z
    "E":    KC.E,     # E
    "R":    KC.R,     # R
    "T":    KC.T,     # T
    "Y":    KC.Y,     # Y
    "U":    KC.U,     # U
    "I":    KC.I,     # I
    "O":    KC.O,     # O
    "P":    KC.P,     # P
    "CIRC": KC.LBRC,  # ^ (dead)
    "$":  KC.RBRC,  # $
    "Q":    KC.A,     # Q
    "S":    KC.S,     # S
    "D":    KC.D,     # D
    "F":    KC.F,     # F
    "G":    KC.G,     # G
    "H":    KC.H,     # H
    "J":    KC.J,     # J
    "K":    KC.K,     # K
    "L":    KC.L,     # L
    "M":    KC.SCLN,  # M
    "ù": KC.QUOT,  # ù
    "*": KC.NUHS,  # *
    "<": KC.NUBS,  # <
    "W":    KC.Z,     # W
    "X":    KC.X,     # X
    "C":    KC.C,     # C
    "V":    KC.V,     # V
    "B":    KC.B,     # B
    "N":    KC.N,     # N
    ",": KC.M,     # ,
    ";": KC.COMM,  # ;
    ":": KC.DOT,   # :
    "!": KC.SLSH,  # !
    "IT":KC.BSPC,
    "OT":KC.SPC
}


FR_advanced = {
    "1":    KC.LSFT(FR["&"]), # 1
    "2":    KC.LSFT(FR["é"]), # 2
    "3":    KC.LSFT(FR["DQUO"]), # 3
    "4":    KC.LSFT(FR["QUOT"]), # 4
    "5":    KC.LSFT(FR["("]), # 5
    "6":    KC.LSFT(FR["-"]), # 6
    "7":    KC.LSFT(FR["è"]), # 7
    "8":    KC.LSFT(FR["_"]), # 8
    "9":    KC.LSFT(FR["ç"]), # 9
    "10":    KC.LSFT(FR["à"]), # 0
    "°":  KC.LSFT(FR[")"]), # °
    "+": KC.LSFT(FR["="]),  # +
    "DIAE": KC.LSFT(FR["CIRC"]), # ¨ (dead)
    "£":  KC.LSFT(FR["$"]),  # £
    "%": KC.LSFT(FR["ù"]), # %
    "µ": KC.LSFT(FR["*"]), # µ
    ">": KC.LSFT(FR["<"]), # >
    "?": KC.LSFT(FR[","]), # ?
    ".":  KC.LSFT(FR[";"]), # .
    "/": KC.LSFT(FR[":"]), # /
    "§": KC.LSFT(FR["!"]), # §
    "TILD": KC.RALT(FR["é"]), # ~ (dead)
    "HASH": KC.RALT(FR["DQUO"]), # #
    "{": KC.RALT(FR["QUOT"]), # {
    "[": KC.RALT(FR["("]), # [
    "|": KC.RALT(FR["-"]), # |
    "GRV":  KC.RALT(FR["è"]), # ` (dead)
    "BACKSLASH": KC.RALT(FR["_"]), # (backslash)
    "@":   KC.RALT(FR["à"]), # @
    "]": KC.RALT(FR[")"]), # ]
    "}": KC.RALT(FR["="]),  # }
    "€": KC.RALT(KC.E),    # €
    "¤": KC.RALT(FR["$"])   # ¤
}

FR.update(FR_advanced)

