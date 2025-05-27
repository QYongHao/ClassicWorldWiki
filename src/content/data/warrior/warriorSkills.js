import improvedHpRecovery from '/src/assets/skills/Improved HP Recovery.png';
import improvedMaxhpIncrease from '/src/assets/skills/Improved MaxHP Increase.png';
import endure from '/src/assets/skills/Endure.png';
import ironBody from '/src/assets/skills/Iron Body.png';
import powerStrike from '/src/assets/skills/Power Strike.png';
import slashBlast from '/src/assets/skills/Slash Blast.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Improved HP Recovery",
      "src": improvedHpRecovery
    },
    "Skill Name": "Improved HP Recovery",
    "Master Level": 16,
    "Description": "Recover additional HP every 5 seconds while standing still.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Recover additional HP +3"
      },
      {
        "Levels": 2,
        "Effect": "Recover additional HP +6"
      },
      {
        "Levels": 3,
        "Effect": "Recover additional HP +9"
      },
      {
        "Levels": 4,
        "Effect": "Recover additional HP +12"
      },
      {
        "Levels": 5,
        "Effect": "Recover additional HP +15"
      },
      {
        "Levels": 6,
        "Effect": "Recover additional HP +18"
      },
      {
        "Levels": 7,
        "Effect": "Recover additional HP +21"
      },
      {
        "Levels": 8,
        "Effect": "Recover additional HP +24"
      },
      {
        "Levels": 9,
        "Effect": "Recover additional HP +27"
      },
      {
        "Levels": 10,
        "Effect": "Recover additional HP +30"
      },
      {
        "Levels": 11,
        "Effect": "Recover additional HP +33"
      },
      {
        "Levels": 12,
        "Effect": "Recover additional HP +36"
      },
      {
        "Levels": 13,
        "Effect": "Recover additional HP +39"
      },
      {
        "Levels": 14,
        "Effect": "Recover additional HP +42"
      },
      {
        "Levels": 15,
        "Effect": "Recover additional HP +45"
      },
      {
        "Levels": 16,
        "Effect": "Recover additional HP +50"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Improved MaxHP Increase",
      "src": improvedMaxhpIncrease
    },
    "Skill Name": "Improved MaxHP Increase",
    "Master Level": 10,
    "Description": "Passive skill",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "If Level UP, +4 more; if AP applied, +3 more on top on MaxHP"
      },
      {
        "Levels": 2,
        "Effect": "If Level UP, +8 more; if AP applied, +6 more on top on MaxHP"
      },
      {
        "Levels": 3,
        "Effect": "If Level UP, +12 more; if AP applied, +9 more on top on MaxHP"
      },
      {
        "Levels": 4,
        "Effect": "If Level UP, +16 more; if AP applied, +12 more on top on MaxHP"
      },
      {
        "Levels": 5,
        "Effect": "If Level UP, +20 more; if AP applied, +15 more on top on MaxHP"
      },
      {
        "Levels": 6,
        "Effect": "If Level UP, +24 more; if AP applied, +18 more on top on MaxHP"
      },
      {
        "Levels": 7,
        "Effect": "If Level UP, +28 more; if AP applied, +21 more on top on MaxHP"
      },
      {
        "Levels": 8,
        "Effect": "If Level UP, +32 more; if AP applied, +24 more on top on MaxHP"
      },
      {
        "Levels": 9,
        "Effect": "If Level UP, +36 more; if AP applied, +27 more on top on MaxHP"
      },
      {
        "Levels": 10,
        "Effect": "If Level UP, +40 more; if AP applied, +30 more on top on MaxHP"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Endure",
      "src": endure
    },
    "Skill Name": "Endure",
    "Master Level": 8,
    "Description": "Even when hanging on the rope or on a ladder, you'll be able to recover some HP after a certain amount of time.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Recover HP every 31 seconds"
      },
      {
        "Levels": 2,
        "Effect": "Recover HP every 28 seconds"
      },
      {
        "Levels": 3,
        "Effect": "Recover HP every 25 seconds"
      },
      {
        "Levels": 4,
        "Effect": "Recover HP every 22 seconds"
      },
      {
        "Levels": 5,
        "Effect": "Recover HP every 19 seconds"
      },
      {
        "Levels": 6,
        "Effect": "Recover HP every 16 seconds"
      },
      {
        "Levels": 7,
        "Effect": "Recover HP every 13 seconds"
      },
      {
        "Levels": 8,
        "Effect": "Recover HP every 10 seconds"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Iron Body",
      "src": ironBody
    },
    "Skill Name": "Iron Body",
    "Master Level": 20,
    "Description": "Temporarily increases your weapon defense.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -8; Weapon def. +3 for 75 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -8; Weapon def. +6 for 85 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -8; Weapon def. +9 for 95 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -8; Weapon def. +12 for 105 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -9; Weapon def. +15 for 120 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -9; Weapon def. +18 for 130 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -9; Weapon def. +21 for 140 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -10; Weapon def. +24 for 155 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -10; Weapon def. +27 for 165 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -10; Weapon def. +30 for 175 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -11; Weapon def. +33 for 190 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -11; Weapon def. +36 for 200 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -12; Weapon def. +39 for 215 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -12; Weapon def. +42 for 225 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -13; Weapon def. +45 for 240 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -13; Weapon def. +48 for 250 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -14; Weapon def. +51 for 265 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -14; Weapon def. +54 for 275 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -15; Weapon def. +57 for 290 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -15; Weapon def. +60 for 300 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Power Strike",
      "src": powerStrike
    },
    "Skill Name": "Power Strike",
    "Master Level": 20,
    "Description": "Use MP to deliver a killer blow on a monster with a weapon.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -4; Damage 114%"
      },
      {
        "Levels": 2,
        "Effect": "MP -4; Damage 120%"
      },
      {
        "Levels": 3,
        "Effect": "MP -4; Damage 126%"
      },
      {
        "Levels": 4,
        "Effect": "MP -4; Damage 132%"
      },
      {
        "Levels": 5,
        "Effect": "MP -5; Damage 142%"
      },
      {
        "Levels": 6,
        "Effect": "MP -5; Damage 148%"
      },
      {
        "Levels": 7,
        "Effect": "MP -5; Damage 154%"
      },
      {
        "Levels": 8,
        "Effect": "MP -6; Damage 164%"
      },
      {
        "Levels": 9,
        "Effect": "MP -6; Damage 170%"
      },
      {
        "Levels": 10,
        "Effect": "MP -7; Damage 180%"
      },
      {
        "Levels": 11,
        "Effect": "MP -7; Damage 186%"
      },
      {
        "Levels": 12,
        "Effect": "MP -8; Damage 196%"
      },
      {
        "Levels": 13,
        "Effect": "MP -8; Damage 202%"
      },
      {
        "Levels": 14,
        "Effect": "MP -9; Damage 212%"
      },
      {
        "Levels": 15,
        "Effect": "MP -9; Damage 218%"
      },
      {
        "Levels": 16,
        "Effect": "MP -10; Damage 228%"
      },
      {
        "Levels": 17,
        "Effect": "MP -10; Damage 234%"
      },
      {
        "Levels": 18,
        "Effect": "MP -11; Damage 244%"
      },
      {
        "Levels": 19,
        "Effect": "MP -11; Damage 250%"
      },
      {
        "Levels": 20,
        "Effect": "MP -12; Damage 260%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Slash Blast",
      "src": slashBlast
    },
    "Skill Name": "Slash Blast",
    "Master Level": 20,
    "Description": "Use HP and MP to attack up to 6 monsters around you with a sword.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -8, MP -6; Damage 57%"
      },
      {
        "Levels": 2,
        "Effect": "HP -8, MP -6; Damage 60%"
      },
      {
        "Levels": 3,
        "Effect": "HP -8, MP -6; Damage 63%"
      },
      {
        "Levels": 4,
        "Effect": "HP -8, MP -7; Damage 66%"
      },
      {
        "Levels": 5,
        "Effect": "HP -9, MP -7; Damage 71%"
      },
      {
        "Levels": 6,
        "Effect": "HP -9, MP -7; Damage 74%"
      },
      {
        "Levels": 7,
        "Effect": "HP -9, MP -7; Damage 77%"
      },
      {
        "Levels": 8,
        "Effect": "HP -10, MP -8; Damage 82%"
      },
      {
        "Levels": 9,
        "Effect": "HP -10, MP -8; Damage 85%"
      },
      {
        "Levels": 10,
        "Effect": "HP -11, MP -9; Damage 90%"
      },
      {
        "Levels": 11,
        "Effect": "HP -11, MP -9; Damage 93%"
      },
      {
        "Levels": 12,
        "Effect": "HP -12, MP -10; Damage 98%"
      },
      {
        "Levels": 13,
        "Effect": "HP -12, MP -10; Damage 101%"
      },
      {
        "Levels": 14,
        "Effect": "HP -13, MP -11; Damage 106%"
      },
      {
        "Levels": 15,
        "Effect": "HP -13, MP -11; Damage 109%"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -12; Damage 114%"
      },
      {
        "Levels": 17,
        "Effect": "HP -14, MP -12; Damage 117%"
      },
      {
        "Levels": 18,
        "Effect": "HP -15, MP -13; Damage 122%"
      },
      {
        "Levels": 19,
        "Effect": "HP -15, MP -13; Damage 125%"
      },
      {
        "Levels": 20,
        "Effect": "HP -16, MP -14; Damage 130%"
      }
    ],
    "Type": "Active"
  }
];