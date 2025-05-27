import spearMastery from '/src/assets/skills/Spear Mastery.png';
import poleArmMastery from '/src/assets/skills/Pole Arm Mastery.png';
import finalAttack_Spear from '/src/assets/skills/Final Attack.png';
import finalAttack_PoleArm from '/src/assets/skills/Final Attack.png';
import spearBooster from '/src/assets/skills/Spear Booster.png';
import poleArmBooster from '/src/assets/skills/Pole Arm Booster.png';
import ironWill from '/src/assets/skills/Iron Will.png';
import hyperBody from '/src/assets/skills/Hyper Body.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Spear Mastery",
      "src": spearMastery
    },
    "Skill Name": "Spear Mastery",
    "Master Level": 20,
    "Description": "Increases the spear mastery and accuracy. It only applies when a spear is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Spear mastery +15%, accuracy +1"
      },
      {
        "Levels": 2,
        "Effect": "Spear mastery +15%, accuracy +2"
      },
      {
        "Levels": 3,
        "Effect": "Spear mastery +20%, accuracy +3"
      },
      {
        "Levels": 4,
        "Effect": "Spear mastery +20%, accuracy +4"
      },
      {
        "Levels": 5,
        "Effect": "Spear mastery +25%, accuracy +5"
      },
      {
        "Levels": 6,
        "Effect": "Spear mastery +25%, accuracy +6"
      },
      {
        "Levels": 7,
        "Effect": "Spear mastery +30%, accuracy +7"
      },
      {
        "Levels": 8,
        "Effect": "Spear mastery +30%, accuracy +8"
      },
      {
        "Levels": 9,
        "Effect": "Spear mastery +35%, accuracy +9"
      },
      {
        "Levels": 10,
        "Effect": "Spear mastery +35%, accuracy +10"
      },
      {
        "Levels": 11,
        "Effect": "Spear mastery +40%, accuracy +11"
      },
      {
        "Levels": 12,
        "Effect": "Spear mastery +40%, accuracy +12"
      },
      {
        "Levels": 13,
        "Effect": "Spear mastery +45%, accuracy +13"
      },
      {
        "Levels": 14,
        "Effect": "Spear mastery +45%, accuracy +14"
      },
      {
        "Levels": 15,
        "Effect": "Spear mastery +50%, accuracy +15"
      },
      {
        "Levels": 16,
        "Effect": "Spear mastery +50%, accuracy +16"
      },
      {
        "Levels": 17,
        "Effect": "Spear mastery +55%, accuracy +17"
      },
      {
        "Levels": 18,
        "Effect": "Spear mastery +55%, accuracy +18"
      },
      {
        "Levels": 19,
        "Effect": "Spear mastery +60%, accuracy +19"
      },
      {
        "Levels": 20,
        "Effect": "Spear mastery +60%, accuracy +20"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Pole Arm Mastery",
      "src": poleArmMastery
    },
    "Skill Name": "Pole Arm Mastery",
    "Master Level": 20,
    "Description": "Increases the mastery of pole arms and accuracy. It only applies when a pole arm is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Pole arm mastery +15%, accuracy +1"
      },
      {
        "Levels": 2,
        "Effect": "Pole arm mastery +15%, accuracy +2"
      },
      {
        "Levels": 3,
        "Effect": "Pole arm mastery +20%, accuracy +3"
      },
      {
        "Levels": 4,
        "Effect": "Pole arm mastery +20%, accuracy +4"
      },
      {
        "Levels": 5,
        "Effect": "Pole arm mastery +25%, accuracy +5"
      },
      {
        "Levels": 6,
        "Effect": "Pole arm mastery +25%, accuracy +6"
      },
      {
        "Levels": 7,
        "Effect": "Pole arm mastery +30%, accuracy +7"
      },
      {
        "Levels": 8,
        "Effect": "Pole arm mastery +30%, accuracy +8"
      },
      {
        "Levels": 9,
        "Effect": "Pole arm mastery +35%, accuracy +9"
      },
      {
        "Levels": 10,
        "Effect": "Pole arm mastery +35%, accuracy +10"
      },
      {
        "Levels": 11,
        "Effect": "Pole arm mastery +40%, accuracy +11"
      },
      {
        "Levels": 12,
        "Effect": "Pole arm mastery +40%, accuracy +12"
      },
      {
        "Levels": 13,
        "Effect": "Pole arm mastery +45%, accuracy +13"
      },
      {
        "Levels": 14,
        "Effect": "Pole arm mastery +45%, accuracy +14"
      },
      {
        "Levels": 15,
        "Effect": "Pole arm mastery +50%, accuracy +15"
      },
      {
        "Levels": 16,
        "Effect": "Pole arm mastery +50%, accuracy +16"
      },
      {
        "Levels": 17,
        "Effect": "Pole arm mastery +55%, accuracy +17"
      },
      {
        "Levels": 18,
        "Effect": "Pole arm mastery +55%, accuracy +18"
      },
      {
        "Levels": 19,
        "Effect": "Pole arm mastery +60%, accuracy +19"
      },
      {
        "Levels": 20,
        "Effect": "Pole arm mastery +60%, accuracy +20"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Final Attack : Spear",
      "src": finalAttack_Spear
    },
    "Skill Name": "Final Attack : Spear",
    "Master Level": 30,
    "Description": "Strikes an another, far deadlier blow following the initial attack with a given success rate. It works only when holding a pole arm.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Success rate 2%, final attack with spear damage 105%"
      },
      {
        "Levels": 2,
        "Effect": "Success rate 4%, final attack with spear damage 110%"
      },
      {
        "Levels": 3,
        "Effect": "Success rate 6%, final attack with spear damage 115%"
      },
      {
        "Levels": 4,
        "Effect": "Success rate 8%, final attack with spear damage 120%"
      },
      {
        "Levels": 5,
        "Effect": "Success rate 10%, final attack with spear damage 125%"
      },
      {
        "Levels": 6,
        "Effect": "Success rate 12%, final attack with spear damage 130%"
      },
      {
        "Levels": 7,
        "Effect": "Success rate 14%, final attack with spear damage 135%"
      },
      {
        "Levels": 8,
        "Effect": "Success rate 16%, final attack with spear damage 140%"
      },
      {
        "Levels": 9,
        "Effect": "Success rate 18%, final attack with spear damage 145%"
      },
      {
        "Levels": 10,
        "Effect": "Success rate 20%, final attack with spear damage 150%"
      },
      {
        "Levels": 11,
        "Effect": "Success rate 22%, final attack with spear damage 155%"
      },
      {
        "Levels": 12,
        "Effect": "Success rate 24%, final attack with spear damage 160%"
      },
      {
        "Levels": 13,
        "Effect": "Success rate 26%, final attack with spear damage 165%"
      },
      {
        "Levels": 14,
        "Effect": "Success rate 28%, final attack with spear damage 170%"
      },
      {
        "Levels": 15,
        "Effect": "Success rate 30%, final attack with spear damage 175%"
      },
      {
        "Levels": 16,
        "Effect": "Success rate 32%, final attack with spear damage 180%"
      },
      {
        "Levels": 17,
        "Effect": "Success rate 34%, final attack with spear damage 185%"
      },
      {
        "Levels": 18,
        "Effect": "Success rate 36%, final attack with spear damage 190%"
      },
      {
        "Levels": 19,
        "Effect": "Success rate 38%, final attack with spear damage 195%"
      },
      {
        "Levels": 20,
        "Effect": "Success rate 40%, final attack with spear damage 200%"
      },
      {
        "Levels": 21,
        "Effect": "Success rate 42%, final attack with spear damage 205%"
      },
      {
        "Levels": 22,
        "Effect": "Success rate 44%, final attack with spear damage 210%"
      },
      {
        "Levels": 23,
        "Effect": "Success rate 46%, final attack with spear damage 215%"
      },
      {
        "Levels": 24,
        "Effect": "Success rate 48%, final attack with spear damage 220%"
      },
      {
        "Levels": 25,
        "Effect": "Success rate 50%, final attack with spear damage 225%"
      },
      {
        "Levels": 26,
        "Effect": "Success rate 52%, final attack with spear damage 230%"
      },
      {
        "Levels": 27,
        "Effect": "Success rate 54%, final attack with spear damage 235%"
      },
      {
        "Levels": 28,
        "Effect": "Success rate 56%, final attack with spear damage 240%"
      },
      {
        "Levels": 29,
        "Effect": "Success rate 58%, final attack with spear damage 245%"
      },
      {
        "Levels": 30,
        "Effect": "Success rate 60%, final attack with spear damage 250%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Final Attack : Pole Arm",
      "src": finalAttack_PoleArm
    },
    "Skill Name": "Final Attack : Pole Arm",
    "Master Level": 30,
    "Description": "Strikes an another, far deadlier blow following the initial attack with a given success rate. It works only when holding a one-hand or two-hand pole arm.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Success rate 2%, final attack with pole arm damage 105%"
      },
      {
        "Levels": 2,
        "Effect": "Success rate 4%, final attack with pole arm damage 110%"
      },
      {
        "Levels": 3,
        "Effect": "Success rate 6%, final attack with pole arm damage 115%"
      },
      {
        "Levels": 4,
        "Effect": "Success rate 8%, final attack with pole arm damage 120%"
      },
      {
        "Levels": 5,
        "Effect": "Success rate 10%, final attack with pole arm damage 125%"
      },
      {
        "Levels": 6,
        "Effect": "Success rate 12%, final attack with pole arm damage 130%"
      },
      {
        "Levels": 7,
        "Effect": "Success rate 14%, final attack with pole arm damage 135%"
      },
      {
        "Levels": 8,
        "Effect": "Success rate 16%, final attack with pole arm damage 140%"
      },
      {
        "Levels": 9,
        "Effect": "Success rate 18%, final attack with pole arm damage 145%"
      },
      {
        "Levels": 10,
        "Effect": "Success rate 20%, final attack with pole arm damage 150%"
      },
      {
        "Levels": 11,
        "Effect": "Success rate 22%, final attack with pole arm damage 155%"
      },
      {
        "Levels": 12,
        "Effect": "Success rate 24%, final attack with pole arm damage 160%"
      },
      {
        "Levels": 13,
        "Effect": "Success rate 26%, final attack with pole arm damage 165%"
      },
      {
        "Levels": 14,
        "Effect": "Success rate 28%, final attack with pole arm damage 170%"
      },
      {
        "Levels": 15,
        "Effect": "Success rate 30%, final attack with pole arm damage 175%"
      },
      {
        "Levels": 16,
        "Effect": "Success rate 32%, final attack with pole arm damage 180%"
      },
      {
        "Levels": 17,
        "Effect": "Success rate 34%, final attack with pole arm damage 185%"
      },
      {
        "Levels": 18,
        "Effect": "Success rate 36%, final attack with pole arm damage 190%"
      },
      {
        "Levels": 19,
        "Effect": "Success rate 38%, final attack with pole arm damage 195%"
      },
      {
        "Levels": 20,
        "Effect": "Success rate 40%, final attack with pole arm damage 200%"
      },
      {
        "Levels": 21,
        "Effect": "Success rate 42%, final attack with pole arm damage 205%"
      },
      {
        "Levels": 22,
        "Effect": "Success rate 44%, final attack with pole arm damage 210%"
      },
      {
        "Levels": 23,
        "Effect": "Success rate 46%, final attack with pole arm damage 215%"
      },
      {
        "Levels": 24,
        "Effect": "Success rate 48%, final attack with pole arm damage 220%"
      },
      {
        "Levels": 25,
        "Effect": "Success rate 50%, final attack with pole arm damage 225%"
      },
      {
        "Levels": 26,
        "Effect": "Success rate 52%, final attack with pole arm damage 230%"
      },
      {
        "Levels": 27,
        "Effect": "Success rate 54%, final attack with pole arm damage 235%"
      },
      {
        "Levels": 28,
        "Effect": "Success rate 56%, final attack with pole arm damage 240%"
      },
      {
        "Levels": 29,
        "Effect": "Success rate 58%, final attack with pole arm damage 245%"
      },
      {
        "Levels": 30,
        "Effect": "Success rate 60%, final attack with pole arm damage 250%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Spear Booster",
      "src": spearBooster
    },
    "Skill Name": "Spear Booster",
    "Master Level": 20,
    "Description": "Uses HP and MP to temporarily boost up the attacking speed of the equipped spear. It only applies when a spear is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -29, MP -29; Increase in spear speed for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "HP -28, MP -28; Increase in spear speed for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "HP -27, MP -27; Increase in spear speed for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "HP -26, MP -26; Increase in spear speed for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "HP -25, MP -25; Increase in spear speed for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "HP -24, MP -24; Increase in spear speed for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "HP -23, MP -23; Increase in spear speed for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "HP -22, MP -22; Increase in spear speed for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "HP -21, MP -21; Increase in spear speed for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "HP -20, MP -20; Increase in spear speed for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "HP -19, MP -19; Increase in spear speed for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "HP -18, MP -18; Increase in spear speed for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "HP -17, MP -17; Increase in spear speed for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "HP -16, MP -16; Increase in spear speed for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "HP -15, MP -15; Increase in spear speed for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -14; Increase in spear speed for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "HP -13, MP -13; Increase in spear speed for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "HP -12, MP -12; Increase in spear speed for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "HP -11, MP -11; Increase in spear speed for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "HP -10, MP -10; Increase in spear speed for 200 seconds"
      }
    ],
    "Type": "Supportive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Pole Arm Booster",
      "src": poleArmBooster
    },
    "Skill Name": "Pole Arm Booster",
    "Master Level": 20,
    "Description": "Uses HP and MP to temporarily boost up the attacking speed of the equipped pole arm. It only applies when a pole arm is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -29, MP -29; Increase in pole arm speed for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "HP -28, MP -28; Increase in pole arm speed for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "HP -27, MP -27; Increase in pole arm speed for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "HP -26, MP -26; Increase in pole arm speed for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "HP -25, MP -25; Increase in pole arm speed for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "HP -24, MP -24; Increase in pole arm speed for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "HP -23, MP -23; Increase in pole arm speed for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "HP -22, MP -22; Increase in pole arm speed for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "HP -21, MP -21; Increase in pole arm speed for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "HP -20, MP -20; Increase in pole arm speed for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "HP -19, MP -19; Increase in pole arm speed for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "HP -18, MP -18; Increase in pole arm speed for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "HP -17, MP -17; Increase in pole arm speed for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "HP -16, MP -16; Increase in pole arm speed for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "HP -15, MP -15; Increase in pole arm speed for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -14; Increase in pole arm speed for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "HP -13, MP -13; Increase in pole arm speed for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "HP -12, MP -12; Increase in pole arm speed for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "HP -11, MP -11; Increase in pole arm speed for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "HP -10, MP -10; Increase in pole arm speed for 200 seconds"
      }
    ],
    "Type": "Supportive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Iron Will",
      "src": ironWill
    },
    "Skill Name": "Iron Will",
    "Master Level": 20,
    "Description": "Temporarily increases the level of weapon and magic defense on every member of the party around the area.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -12; Weapon def. +2, magic def. +2 for 15 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -12; Weapon def. +4, magic def. +4 for 30 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -12; Weapon def. +6, magic def. +6 for 45 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -12; Weapon def. +8, magic def. +8 for 60 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -12; Weapon def. +10, magic def. +10 for 75 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -12; Weapon def. +12, magic def. +12 for 90 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -12; Weapon def. +14, magic def. +14 for 105 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -12; Weapon def. +16, magic def. +16 for 120 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -12; Weapon def. +18, magic def. +18 for 135 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -12; Weapon def. +20, magic def. +20 for 150 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -24; Weapon def. +22, magic def. +22 for 165 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -24; Weapon def. +24, magic def. +24 for 180 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -24; Weapon def. +26, magic def. +26 for 195 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -24; Weapon def. +28, magic def. +28 for 210 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -24; Weapon def. +30, magic def. +30 for 225 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -24; Weapon def. +32, magic def. +32 for 240 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -24; Weapon def. +34, magic def. +34 for 255 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -24; Weapon def. +36, magic def. +36 for 270 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -24; Weapon def. +38, magic def. +38 for 285 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -24; Weapon def. +40, magic def. +40 for 300 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Hyper Body",
      "src": hyperBody
    },
    "Skill Name": "Hyper Body",
    "Master Level": 30,
    "Description": "Temporarily increases the Max HP and Max MP of all members of the party around the area.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -25; Increase the Max HP and Max MP by 2% for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -25; Increase the Max HP and Max MP by 4% for 15 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -25; Increase the Max HP and Max MP by 6% for 20 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -25; Increase the Max HP and Max MP by 8% for 25 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -25; Increase the Max HP and Max MP by 10% for 30 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -25; Increase the Max HP and Max MP by 12% for 35 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -25; Increase the Max HP and Max MP by 14% for 40 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -25; Increase the Max HP and Max MP by 16% for 45 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -25; Increase the Max HP and Max MP by 18% for 50 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -25; Increase the Max HP and Max MP by 20% for 55 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -25; Increase the Max HP and Max MP by 22% for 60 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -25; Increase the Max HP and Max MP by 24% for 65 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -25; Increase the Max HP and Max MP by 26% for 70 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -25; Increase the Max HP and Max MP by 28% for 75 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -25; Increase the Max HP and Max MP by 30% for 80 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -50; Increase the Max HP and Max MP by 32% for 85 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -50; Increase the Max HP and Max MP by 34% for 90 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -50; Increase the Max HP and Max MP by 36% for 95 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -50; Increase the Max HP and Max MP by 38% for 100 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -50; Increase the Max HP and Max MP by 40% for 105 seconds"
      },
      {
        "Levels": 21,
        "Effect": "MP -50; Increase the Max HP and Max MP by 42% for 110 seconds"
      },
      {
        "Levels": 22,
        "Effect": "MP -50; Increase the Max HP and Max MP by 44% for 115 seconds"
      },
      {
        "Levels": 23,
        "Effect": "MP -50; Increase the Max HP and Max MP by 46% for 120 seconds"
      },
      {
        "Levels": 24,
        "Effect": "MP -50; Increase the Max HP and Max MP by 48% for 125 seconds"
      },
      {
        "Levels": 25,
        "Effect": "MP -50; Increase the Max HP and Max MP by 50% for 130 seconds"
      },
      {
        "Levels": 26,
        "Effect": "MP -50; Increase the Max HP and Max MP by 52% for 135 seconds"
      },
      {
        "Levels": 27,
        "Effect": "MP -50; Increase the Max HP and Max MP by 54% for 140 seconds"
      },
      {
        "Levels": 28,
        "Effect": "MP -50; Increase the Max HP and Max MP by 56% for 145 seconds"
      },
      {
        "Levels": 29,
        "Effect": "MP -50; Increase the Max HP and Max MP by 58% for 150 seconds"
      },
      {
        "Levels": 30,
        "Effect": "MP -50; Increase the Max HP and Max MP by 60% for 155 seconds"
      }
    ],
    "Type": "Active"
  }
];