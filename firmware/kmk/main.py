from kmk.extensions.media_keys import MediaKeys
from kmk.keys import KC
from kmk.modules.sticky_keys import StickyKeys

from kb import ChouChou

keyboard = ChouChou()

# keyboard.debug_enabled = True


if __name__ == '__main__':
    keyboard.go()
