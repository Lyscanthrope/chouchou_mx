from kmk.modules.combos import Combos, Chord

from french import FR
import json
from kmk.keys import Key, KC

file_path="./ressources/alpha_combos.json"
with open(file_path, 'r') as file:
    # Parse the JSON data into a dictionary
    alpha = json.load(file)



def create_alpha_combo(alpha,timeout=50)->list:
    my_list=[]
    for k,v in alpha.items():
        tuple_of_caps=(v.upper().split(" "))

        match=list(FR[c] for c in tuple_of_caps)
        caps_match=tuple(match+[FR["IT"]])
        if ((k.isalpha())&(len(k)==1)):
            #only for single letter alpna caracter
            my_list.append(Chord(caps_match, KC.LSFT(FR[k.upper()]),timeout=timeout))
        if len(match)>1:
            my_list.append(Chord(match, FR[k.upper()],timeout=timeout))
    return my_list

# def create_innerthumb_combo(timeout=50)->list:
#     special_characer_it={
#         "BACKSLASH":"a t i"
#     }
#     my_list=[]
#     for k,v in special_characer_it.items():
#         tuple_of_caps=(v.upper().split(" "))

#         match=list(FR[c] for c in tuple_of_caps)
#         caps_match=tuple(match+[FR["IT"]])
#         my_list.append(Chord(caps_match, FR[k.upper()],timeout=timeout))
#     print(my_list,"toto")
#     return my_list

# def create_special_combo(timeout=100):
#     special=[
#                 # Chord((FR["E"], FR["I"]), KC.SK(KC.LSFT,defer_release=True),timeout=timeout),
#                 # Chord((FR["S"], FR["T"]), KC.SK(KC.LCTL,defer_release=True),timeout=timeout),
#                 # Chord((FR["A"], FR["O"]), KC.SK(KC.LALT,defer_release=True),timeout=timeout),
#                 # Chord((FR["R"], FR["N"]), KC.SK(KC.LGUI,defer_release=True),timeout=timeout)
#             ]
#     return special