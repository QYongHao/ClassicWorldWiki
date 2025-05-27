import daggerMastery from '/src/assets/skills/Dagger Mastery.png';
import endure from '/src/assets/skills/Endure.png';
import daggerBooster from '/src/assets/skills/Dagger Booster.png';
import haste from '/src/assets/skills/Haste.png';
import steal from '/src/assets/skills/Steal.png';
import savageBlow from '/src/assets/skills/Savage Blow.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Dagger Mastery",
      "src": daggerMastery
    },
    "Skill Name": "Dagger Mastery",
    "Master Level": 0,
    "Description": "Increases the dagger mastery and accuracy. It only applies when the character has a dagger in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Dagger mastery +15%, accuracy +1"
      },
      {
        "Levels": 2,
        "Effect": "Dagger mastery +15%, accuracy +2"
      },
      {
        "Levels": 3,
        "Effect": "Dagger mastery +20%, accuracy +3"
      },
      {
        "Levels": 4,
        "Effect": "Dagger mastery +20%, accuracy +4"
      },
      {
        "Levels": 5,
        "Effect": "Dagger mastery +25%, accuracy +5"
      },
      {
        "Levels": 6,
        "Effect": "Dagger mastery +25%, accuracy +6"
      },
      {
        "Levels": 7,
        "Effect": "Dagger mastery +30%, accuracy +7"
      },
      {
        "Levels": 8,
        "Effect": "Dagger mastery +30%, accuracy +8"
      },
      {
        "Levels": 9,
        "Effect": "Dagger mastery +35%, accuracy +9"
      },
      {
        "Levels": 10,
        "Effect": "Dagger mastery +35%, accuracy +10"
      },
      {
        "Levels": 11,
        "Effect": "Dagger mastery +40%, accuracy +11"
      },
      {
        "Levels": 12,
        "Effect": "Dagger mastery +40%, accuracy +12"
      },
      {
        "Levels": 13,
        "Effect": "Dagger mastery +45%, accuracy +13"
      },
      {
        "Levels": 14,
        "Effect": "Dagger mastery +45%, accuracy +14"
      },
      {
        "Levels": 15,
        "Effect": "Dagger mastery +50%, accuracy +15"
      },
      {
        "Levels": 16,
        "Effect": "Dagger mastery +50%, accuracy +16"
      },
      {
        "Levels": 17,
        "Effect": "Dagger mastery +55%, accuracy +17"
      },
      {
        "Levels": 18,
        "Effect": "Dagger mastery +55%, accuracy +18"
      },
      {
        "Levels": 19,
        "Effect": "Dagger mastery +60%, accuracy +19"
      },
      {
        "Levels": 20,
        "Effect": "Dagger mastery +60%, accuracy +20"
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
    "Master Level": 20,
    "Description": "Recovers additional amount of HP and MP.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Additionally recovering 3 HP and 1 MP every 29 seconds"
      },
      {
        "Levels": 2,
        "Effect": "Additionally recovering 6 HP and 2 MP every 28 seconds"
      },
      {
        "Levels": 3,
        "Effect": "Additionally recovering 9 HP and 3 MP every 27 seconds"
      },
      {
        "Levels": 4,
        "Effect": "Additionally recovering 12 HP and 4 MP every 26 seconds"
      },
      {
        "Levels": 5,
        "Effect": "Additionally recovering 15 HP and 5 MP every 25 seconds"
      },
      {
        "Levels": 6,
        "Effect": "Additionally recovering 18 HP and 6 MP every 24 seconds"
      },
      {
        "Levels": 7,
        "Effect": "Additionally recovering 21 HP and 7 MP every 23 seconds"
      },
      {
        "Levels": 8,
        "Effect": "Additionally recovering 24 HP and 8 MP every 22 seconds"
      },
      {
        "Levels": 9,
        "Effect": "Additionally recovering 27 HP and 9 MP every 21 seconds"
      },
      {
        "Levels": 10,
        "Effect": "Additionally recovering 30 HP and 10 MP every 20 seconds"
      },
      {
        "Levels": 11,
        "Effect": "Additionally recovering 33 HP and 11 MP every 19 seconds"
      },
      {
        "Levels": 12,
        "Effect": "Additionally recovering 36 HP and 12 MP every 18 seconds"
      },
      {
        "Levels": 13,
        "Effect": "Additionally recovering 39 HP and 13 MP every 17 seconds"
      },
      {
        "Levels": 14,
        "Effect": "Additionally recovering 42 HP and 14 MP every 16 seconds"
      },
      {
        "Levels": 15,
        "Effect": "Additionally recovering 45 HP and 15 MP every 15 seconds"
      },
      {
        "Levels": 16,
        "Effect": "Additionally recovering 48 HP and 16 MP every 14 seconds"
      },
      {
        "Levels": 17,
        "Effect": "Additionally recovering 51 HP and 17 MP every 13 seconds"
      },
      {
        "Levels": 18,
        "Effect": "Additionally recovering 54 HP and 18 MP every 12 seconds"
      },
      {
        "Levels": 19,
        "Effect": "Additionally recovering 57 HP and 19 MP every 11 seconds"
      },
      {
        "Levels": 20,
        "Effect": "Additionally recovering 62 HP and 20 MP every 10 seconds"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Dagger Booster",
      "src": daggerBooster
    },
    "Skill Name": "Dagger Booster",
    "Master Level": 20,
    "Description": "Use HP and MP to temporarily boost up the attacking speed of the dagger. Only applies when the character has a dagger in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -29, MP -29; Improves dagger speed for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "HP -28, MP -28; Improves dagger speed for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "HP -27, MP -27; Improves dagger speed for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "HP -26, MP -26; Improves dagger speed for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "HP -25, MP -25; Improves dagger speed for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "HP -24, MP -24; Improves dagger speed for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "HP -23, MP -23; Improves dagger speed for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "HP -22, MP -22; Improves dagger speed for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "HP -21, MP -21; Improves dagger speed for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "HP -20, MP -20; Improves dagger speed for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "HP -19, MP -19; Improves dagger speed for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "HP -18, MP -18; Improves dagger speed for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "HP -17, MP -17; Improves dagger speed for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "HP -16, MP -16; Improves dagger speed for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "HP -15, MP -15; Improves dagger speed for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -14; Improves dagger speed for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "HP -13, MP -13; Improves dagger speed for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "HP -12, MP -12; Improves dagger speed for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "HP -11, MP -11; Improves dagger speed for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "HP -10, MP -10; Improves dagger speed for 200 seconds"
      }
    ],
    "Type": "Supportive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Haste",
      "src": haste
    },
    "Skill Name": "Haste",
    "Master Level": 20,
    "Description": "Temporarily boosts the speed and jumping ability of everyone in the party.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -15; Speed +2, jump +1 for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -15; Speed +4, jump +2 for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -15; Speed +6, jump +3 for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -15; Speed +8, jump +4 for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -15; Speed +10, jump +5 for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -15; Speed +12, jump +6 for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -15; Speed +14, jump +7 for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -15; Speed +16, jump +8 for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -15; Speed +18, jump +9 for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -15; Speed +20, jump +10 for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -30; Speed +22, jump +11 for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -30; Speed +24, jump +12 for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -30; Speed +26, jump +13 for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -30; Speed +28, jump +14 for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -30; Speed +30, jump +15 for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -30; Speed +32, jump +16 for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -30; Speed +34, jump +17 for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -30; Speed +36, jump +18 for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -30; Speed +38, jump +19 for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -30; Speed +40, jump +20 for 200 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Steal",
      "src": steal
    },
    "Skill Name": "Steal",
    "Master Level": 30,
    "Description": "Steals one of the monster's items with a given success rate. It works only once against the same monster. The effort can be continued till its success.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -12; Steal with 11% success rate, damage 42%"
      },
      {
        "Levels": 2,
        "Effect": "MP -12; Steal with 12% success rate, damage 44%"
      },
      {
        "Levels": 3,
        "Effect": "MP -12; Steal with 13% success rate, damage 46%"
      },
      {
        "Levels": 4,
        "Effect": "MP -12; Steal with 14% success rate, damage 48%"
      },
      {
        "Levels": 5,
        "Effect": "MP -12; Steal with 15% success rate, damage 50%"
      },
      {
        "Levels": 6,
        "Effect": "MP -12; Steal with 16% success rate, damage 52%"
      },
      {
        "Levels": 7,
        "Effect": "MP -12; Steal with 17% success rate, damage 54%"
      },
      {
        "Levels": 8,
        "Effect": "MP -12; Steal with 18% success rate, damage 56%"
      },
      {
        "Levels": 9,
        "Effect": "MP -12; Steal with 19% success rate, damage 58%"
      },
      {
        "Levels": 10,
        "Effect": "MP -12; Steal with 20% success rate, damage 60%"
      },
      {
        "Levels": 11,
        "Effect": "MP -12; Steal with 21% success rate, damage 62%"
      },
      {
        "Levels": 12,
        "Effect": "MP -12; Steal with 22% success rate, damage 64%"
      },
      {
        "Levels": 13,
        "Effect": "MP -12; Steal with 23% success rate, damage 66%"
      },
      {
        "Levels": 14,
        "Effect": "MP -12; Steal with 24% success rate, damage 68%"
      },
      {
        "Levels": 15,
        "Effect": "MP -12; Steal with 25% success rate, damage 70%"
      },
      {
        "Levels": 16,
        "Effect": "MP -24; Steal with 26% success rate, damage 72%"
      },
      {
        "Levels": 17,
        "Effect": "MP -24; Steal with 27% success rate, damage 74%"
      },
      {
        "Levels": 18,
        "Effect": "MP -24; Steal with 28% success rate, damage 76%"
      },
      {
        "Levels": 19,
        "Effect": "MP -24; Steal with 29% success rate, damage 78%"
      },
      {
        "Levels": 20,
        "Effect": "MP -24; Steal with 30% success rate, damage 80%"
      },
      {
        "Levels": 21,
        "Effect": "MP -24; Steal with 31% success rate, damage 82%"
      },
      {
        "Levels": 22,
        "Effect": "MP -24; Steal with 32% success rate, damage 84%"
      },
      {
        "Levels": 23,
        "Effect": "MP -24; Steal with 33% success rate, damage 86%"
      },
      {
        "Levels": 24,
        "Effect": "MP -24; Steal with 34% success rate, damage 88%"
      },
      {
        "Levels": 25,
        "Effect": "MP -24; Steal with 35% success rate, damage 90%"
      },
      {
        "Levels": 26,
        "Effect": "MP -24; Steal with 36% success rate, damage 92%"
      },
      {
        "Levels": 27,
        "Effect": "MP -24; Steal with 37% success rate, damage 94%"
      },
      {
        "Levels": 28,
        "Effect": "MP -24; Steal with 38% success rate, damage 96%"
      },
      {
        "Levels": 29,
        "Effect": "MP -24; Steal with 39% success rate, damage 98%"
      },
      {
        "Levels": 30,
        "Effect": "MP -24; Steal with 40% success rate, damage 100%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Savage Blow",
      "src": savageBlow
    },
    "Skill Name": "Savage Blow",
    "Master Level": 30,
    "Description": "Use MP to attack an enemy up to 6 times in a row with a dagger.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -15; Attack 4x with 22% damage."
      },
      {
        "Levels": 2,
        "Effect": "MP -15; Attack 4x with 24% damage."
      },
      {
        "Levels": 3,
        "Effect": "MP -15; Attack 4x with 26% damage."
      },
      {
        "Levels": 4,
        "Effect": "MP -15; Attack 4x with 28% damage."
      },
      {
        "Levels": 5,
        "Effect": "MP -15; Attack 4x with 30% damage."
      },
      {
        "Levels": 6,
        "Effect": "MP -15; Attack 4x with 32% damage."
      },
      {
        "Levels": 7,
        "Effect": "MP -15; Attack 4x with 34% damage."
      },
      {
        "Levels": 8,
        "Effect": "MP -15; Attack 4x with 36% damage."
      },
      {
        "Levels": 9,
        "Effect": "MP -15; Attack 4x with 38% damage."
      },
      {
        "Levels": 10,
        "Effect": "MP -15; Attack 4x with 40% damage."
      },
      {
        "Levels": 11,
        "Effect": "MP -18; Attack 5x with 42% damage."
      },
      {
        "Levels": 12,
        "Effect": "MP -18; Attack 5x with 44% damage."
      },
      {
        "Levels": 13,
        "Effect": "MP -18; Attack 5x with 46% damage."
      },
      {
        "Levels": 14,
        "Effect": "MP -18; Attack 5x with 48% damage."
      },
      {
        "Levels": 15,
        "Effect": "MP -18; Attack 5x with 50% damage."
      },
      {
        "Levels": 16,
        "Effect": "MP -18; Attack 5x with 52% damage."
      },
      {
        "Levels": 17,
        "Effect": "MP -18; Attack 5x with 54% damage."
      },
      {
        "Levels": 18,
        "Effect": "MP -18; Attack 5x with 56% damage."
      },
      {
        "Levels": 19,
        "Effect": "MP -18; Attack 5x with 58% damage."
      },
      {
        "Levels": 20,
        "Effect": "MP -18; Attack 5x with 60% damage."
      },
      {
        "Levels": 21,
        "Effect": "MP -27; Attack 6x with 62% damage."
      },
      {
        "Levels": 22,
        "Effect": "MP -27; Attack 6x with 64% damage."
      },
      {
        "Levels": 23,
        "Effect": "MP -27; Attack 6x with 66% damage."
      },
      {
        "Levels": 24,
        "Effect": "MP -27; Attack 6x with 68% damage."
      },
      {
        "Levels": 25,
        "Effect": "MP -27; Attack 6x with 70% damage."
      },
      {
        "Levels": 26,
        "Effect": "MP -27; Attack 6x with 72% damage."
      },
      {
        "Levels": 27,
        "Effect": "MP -27; Attack 6x with 74% damage."
      },
      {
        "Levels": 28,
        "Effect": "MP -27; Attack 6x with 76% damage."
      },
      {
        "Levels": 29,
        "Effect": "MP -27; Attack 6x with 78% damage."
      },
      {
        "Levels": 30,
        "Effect": "MP -27; Attack 6x with 80% damage."
      }
    ],
    "Type": "Active"
  }
];