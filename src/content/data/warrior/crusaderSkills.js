import improvingMpRecovery from '/src/assets/skills/Improving MP Recovery.png';
import shieldMastery from '/src/assets/skills/Shield Mastery.png';
import comboAttack from '/src/assets/skills/Combo Attack.png';
import panicSword from '/src/assets/skills/Panic : Sword.png';
import panicAxe from '/src/assets/skills/Panic : Axe.png';
import coma_Sword from '/src/assets/skills/Coma : Sword.png';
import coma_Axe from '/src/assets/skills/Coma : Axe.png';
import armorCrash from '/src/assets/skills/Armor Crash.png';
import shout from '/src/assets/skills/Shout.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Improving MP Recovery",
      "src": improvingMpRecovery
    },
    "Skill Name": "Improving MP Recovery",
    "Master Level": 20,
    "Description": "Recover additional MP every 10 seconds while standing still.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Constant additional recovery of MP +2"
      },
      {
        "Levels": 2,
        "Effect": "Constant additional recovery of MP +4"
      },
      {
        "Levels": 3,
        "Effect": "Constant additional recovery of MP +6"
      },
      {
        "Levels": 4,
        "Effect": "Constant additional recovery of MP +8"
      },
      {
        "Levels": 5,
        "Effect": "Constant additional recovery of MP +10"
      },
      {
        "Levels": 6,
        "Effect": "Constant additional recovery of MP +12"
      },
      {
        "Levels": 7,
        "Effect": "Constant additional recovery of MP +14"
      },
      {
        "Levels": 8,
        "Effect": "Constant additional recovery of MP +16"
      },
      {
        "Levels": 9,
        "Effect": "Constant additional recovery of MP +18"
      },
      {
        "Levels": 10,
        "Effect": "Constant additional recovery of MP +20"
      },
      {
        "Levels": 11,
        "Effect": "Constant additional recovery of MP +21"
      },
      {
        "Levels": 12,
        "Effect": "Constant additional recovery of MP +22"
      },
      {
        "Levels": 13,
        "Effect": "Constant additional recovery of MP +23"
      },
      {
        "Levels": 14,
        "Effect": "Constant additional recovery of MP +24"
      },
      {
        "Levels": 15,
        "Effect": "Constant additional recovery of MP +25"
      },
      {
        "Levels": 16,
        "Effect": "Constant additional recovery of MP +26"
      },
      {
        "Levels": 17,
        "Effect": "Constant additional recovery of MP +27"
      },
      {
        "Levels": 18,
        "Effect": "Constant additional recovery of MP +28"
      },
      {
        "Levels": 19,
        "Effect": "Constant additional recovery of MP +29"
      },
      {
        "Levels": 20,
        "Effect": "Constant additional recovery of MP +30"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Shield Mastery",
      "src": shieldMastery
    },
    "Skill Name": "Shield Mastery",
    "Master Level": 20,
    "Description": "Increases shield defense. However, it does not affect if the character does not equip the shield.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Increase shield defense by 5%"
      },
      {
        "Levels": 2,
        "Effect": "Increase shield defense by 10%"
      },
      {
        "Levels": 3,
        "Effect": "Increase shield defense by 15%"
      },
      {
        "Levels": 4,
        "Effect": "Increase shield defense by 20%"
      },
      {
        "Levels": 5,
        "Effect": "Increase shield defense by 25%"
      },
      {
        "Levels": 6,
        "Effect": "Increase shield defense by 30%"
      },
      {
        "Levels": 7,
        "Effect": "Increase shield defense by 35%"
      },
      {
        "Levels": 8,
        "Effect": "Increase shield defense by 40%"
      },
      {
        "Levels": 9,
        "Effect": "Increase shield defense by 45%"
      },
      {
        "Levels": 10,
        "Effect": "Increase shield defense by 50%"
      },
      {
        "Levels": 11,
        "Effect": "Increase shield defense by 55%"
      },
      {
        "Levels": 12,
        "Effect": "Increase shield defense by 60%"
      },
      {
        "Levels": 13,
        "Effect": "Increase shield defense by 65%"
      },
      {
        "Levels": 14,
        "Effect": "Increase shield defense by 70%"
      },
      {
        "Levels": 15,
        "Effect": "Increase shield defense by 75%"
      },
      {
        "Levels": 16,
        "Effect": "Increase shield defense by 80%"
      },
      {
        "Levels": 17,
        "Effect": "Increase shield defense by 85%"
      },
      {
        "Levels": 18,
        "Effect": "Increase shield defense by 90%"
      },
      {
        "Levels": 19,
        "Effect": "Increase shield defense by 95%"
      },
      {
        "Levels": 20,
        "Effect": "Increase shield defense by 100%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Combo Attack",
      "src": comboAttack
    },
    "Skill Name": "Combo Attack",
    "Master Level": 30,
    "Description": "Prepares for combo attack. Combo counter can be used to strike a deadly blow to the monster. Max. for combo counter is 5 and midpoint is 3.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -25; For 100 seconds, damage 104%, the max. combo counter is 3"
      },
      {
        "Levels": 2,
        "Effect": "MP -25; For 100 seconds, damage 108%, the max. combo counter is 3"
      },
      {
        "Levels": 3,
        "Effect": "MP -25; For 100 seconds, damage 112%, the max. combo counter is 3"
      },
      {
        "Levels": 4,
        "Effect": "MP -25; For 100 seconds, damage 116%, the max. combo counter is 3"
      },
      {
        "Levels": 5,
        "Effect": "MP -25; For 100 seconds, damage 120%, the max. combo counter is 3"
      },
      {
        "Levels": 6,
        "Effect": "MP -25; For 120 seconds, damage 124%, the max. combo counter is 3"
      },
      {
        "Levels": 7,
        "Effect": "MP -25; For 120 seconds, damage 128%, the max. combo counter is 3"
      },
      {
        "Levels": 8,
        "Effect": "MP -25; For 120 seconds, damage 132%, the max. combo counter is 3"
      },
      {
        "Levels": 9,
        "Effect": "MP -25; For 120 seconds, damage 136%, the max. combo counter is 3"
      },
      {
        "Levels": 10,
        "Effect": "MP -25; For 120 seconds, damage 140%, the max. combo counter is 3"
      },
      {
        "Levels": 11,
        "Effect": "MP -30; For 140 seconds, damage 144%, the max. combo counter is 4"
      },
      {
        "Levels": 12,
        "Effect": "MP -30; For 140 seconds, damage 148%, the max. combo counter is 4"
      },
      {
        "Levels": 13,
        "Effect": "MP -30; For 140 seconds, damage 152%, the max. combo counter is 4"
      },
      {
        "Levels": 14,
        "Effect": "MP -30; For 140 seconds, damage 156%, the max. combo counter is 4"
      },
      {
        "Levels": 15,
        "Effect": "MP -30; For 140 seconds, damage 160%, the max. combo counter is 4"
      },
      {
        "Levels": 16,
        "Effect": "MP -30; For 160 seconds, damage 164%, the max. combo counter is 4"
      },
      {
        "Levels": 17,
        "Effect": "MP -30; For 160 seconds, damage 168%, the max. combo counter is 4"
      },
      {
        "Levels": 18,
        "Effect": "MP -30; For 160 seconds, damage 172%, the max. combo counter is 4"
      },
      {
        "Levels": 19,
        "Effect": "MP -30; For 160 seconds, damage 176%, the max. combo counter is 4"
      },
      {
        "Levels": 20,
        "Effect": "MP -30; For 160 seconds, damage 180%, the max. combo counter is 4"
      },
      {
        "Levels": 21,
        "Effect": "MP -35; For 180 seconds, damage 184%, the max. combo counter is 5"
      },
      {
        "Levels": 22,
        "Effect": "MP -35; For 180 seconds, damage 188%, the max. combo counter is 5"
      },
      {
        "Levels": 23,
        "Effect": "MP -35; For 180 seconds, damage 192%, the max. combo counter is 5"
      },
      {
        "Levels": 24,
        "Effect": "MP -35; For 180 seconds, damage 196%, the max. combo counter is 5"
      },
      {
        "Levels": 25,
        "Effect": "MP -35; For 180 seconds, damage 200%, the max. combo counter is 5"
      },
      {
        "Levels": 26,
        "Effect": "MP -35; For 200 seconds, damage 204%, the max. combo counter is 5"
      },
      {
        "Levels": 27,
        "Effect": "MP -35; For 200 seconds, damage 208%, the max. combo counter is 5"
      },
      {
        "Levels": 28,
        "Effect": "MP -35; For 200 seconds, damage 212%, the max. combo counter is 5"
      },
      {
        "Levels": 29,
        "Effect": "MP -35; For 200 seconds, damage 216%, the max. combo counter is 5"
      },
      {
        "Levels": 30,
        "Effect": "MP -35; For 200 seconds, damage 220%, the max. combo counter is 5"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Panic : Sword",
      "src": panicSword
    },
    "Skill Name": "Panic : Sword",
    "Master Level": 30,
    "Description": "Consumes 5 Orbs to attack a single monster. This skill can only be used when equipped with a sword.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -10; Damage 150%"
      },
      {
        "Levels": 2,
        "Effect": "MP -10; Damage 171%"
      },
      {
        "Levels": 3,
        "Effect": "MP -10; Damage 184%"
      },
      {
        "Levels": 4,
        "Effect": "MP -10; Damage 194%"
      },
      {
        "Levels": 5,
        "Effect": "MP -10; Damage 203%"
      },
      {
        "Levels": 6,
        "Effect": "MP -10; Damage 212%"
      },
      {
        "Levels": 7,
        "Effect": "MP -10; Damage 220%"
      },
      {
        "Levels": 8,
        "Effect": "MP -10; Damage 228%"
      },
      {
        "Levels": 9,
        "Effect": "MP -10; Damage 235%"
      },
      {
        "Levels": 10,
        "Effect": "MP -10; Damage 242%"
      },
      {
        "Levels": 11,
        "Effect": "MP -17; Damage 248%"
      },
      {
        "Levels": 12,
        "Effect": "MP -17; Damage 255%"
      },
      {
        "Levels": 13,
        "Effect": "MP -17; Damage 261%"
      },
      {
        "Levels": 14,
        "Effect": "MP -17; Damage 267%"
      },
      {
        "Levels": 15,
        "Effect": "MP -17; Damage 273%"
      },
      {
        "Levels": 16,
        "Effect": "MP -17; Damage 279%"
      },
      {
        "Levels": 17,
        "Effect": "MP -17; Damage 285%"
      },
      {
        "Levels": 18,
        "Effect": "MP -17; Damage 290%"
      },
      {
        "Levels": 19,
        "Effect": "MP -17; Damage 296%"
      },
      {
        "Levels": 20,
        "Effect": "MP -17; Damage 301%"
      },
      {
        "Levels": 21,
        "Effect": "MP -24; Damage 306%"
      },
      {
        "Levels": 22,
        "Effect": "MP -24; Damage 311%"
      },
      {
        "Levels": 23,
        "Effect": "MP -24; Damage 316%"
      },
      {
        "Levels": 24,
        "Effect": "MP -24; Damage 321%"
      },
      {
        "Levels": 25,
        "Effect": "MP -24; Damage 326%"
      },
      {
        "Levels": 26,
        "Effect": "MP -24; Damage 331%"
      },
      {
        "Levels": 27,
        "Effect": "MP -24; Damage 336%"
      },
      {
        "Levels": 28,
        "Effect": "MP -24; Damage 341%"
      },
      {
        "Levels": 29,
        "Effect": "MP -24; Damage 345%"
      },
      {
        "Levels": 30,
        "Effect": "MP -24; Damage 350%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Panic : Axe",
      "src": panicAxe
    },
    "Skill Name": "Panic : Axe",
    "Master Level": 30,
    "Description": "Consumes 5 Orbs to attack a single monster. This skill can only be used when equipped with an axe.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -10; Damage 150%"
      },
      {
        "Levels": 2,
        "Effect": "MP -10; Damage 171%"
      },
      {
        "Levels": 3,
        "Effect": "MP -10; Damage 184%"
      },
      {
        "Levels": 4,
        "Effect": "MP -10; Damage 194%"
      },
      {
        "Levels": 5,
        "Effect": "MP -10; Damage 203%"
      },
      {
        "Levels": 6,
        "Effect": "MP -10; Damage 212%"
      },
      {
        "Levels": 7,
        "Effect": "MP -10; Damage 220%"
      },
      {
        "Levels": 8,
        "Effect": "MP -10; Damage 228%"
      },
      {
        "Levels": 9,
        "Effect": "MP -10; Damage 235%"
      },
      {
        "Levels": 10,
        "Effect": "MP -10; Damage 242%"
      },
      {
        "Levels": 11,
        "Effect": "MP -17; Damage 248%"
      },
      {
        "Levels": 12,
        "Effect": "MP -17; Damage 255%"
      },
      {
        "Levels": 13,
        "Effect": "MP -17; Damage 261%"
      },
      {
        "Levels": 14,
        "Effect": "MP -17; Damage 267%"
      },
      {
        "Levels": 15,
        "Effect": "MP -17; Damage 273%"
      },
      {
        "Levels": 16,
        "Effect": "MP -17; Damage 279%"
      },
      {
        "Levels": 17,
        "Effect": "MP -17; Damage 285%"
      },
      {
        "Levels": 18,
        "Effect": "MP -17; Damage 290%"
      },
      {
        "Levels": 19,
        "Effect": "MP -17; Damage 296%"
      },
      {
        "Levels": 20,
        "Effect": "MP -17; Damage 301%"
      },
      {
        "Levels": 21,
        "Effect": "MP -24; Damage 306%"
      },
      {
        "Levels": 22,
        "Effect": "MP -24; Damage 311%"
      },
      {
        "Levels": 23,
        "Effect": "MP -24; Damage 316%"
      },
      {
        "Levels": 24,
        "Effect": "MP -24; Damage 321%"
      },
      {
        "Levels": 25,
        "Effect": "MP -24; Damage 326%"
      },
      {
        "Levels": 26,
        "Effect": "MP -24; Damage 331%"
      },
      {
        "Levels": 27,
        "Effect": "MP -24; Damage 336%"
      },
      {
        "Levels": 28,
        "Effect": "MP -24; Damage 341%"
      },
      {
        "Levels": 29,
        "Effect": "MP -24; Damage 345%"
      },
      {
        "Levels": 30,
        "Effect": "MP -24; Damage 350%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Coma: Sword",
      "src": coma_Sword
    },
    "Skill Name": "Coma: Sword",
    "Master Level": 30,
    "Description": "If struck cleanly, the monster becomes stunned. This skill can only be used when equipped with a sword and the combo all charged up.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -15, MP -12; Damage 84%, stun for 2 seconds with 32% success rate"
      },
      {
        "Levels": 2,
        "Effect": "HP -15, MP -12; Damage 88%, stun for 2 seconds with 34% success rate"
      },
      {
        "Levels": 3,
        "Effect": "HP -15, MP -12; Damage 92%, stun for 2 seconds with 36% success rate"
      },
      {
        "Levels": 4,
        "Effect": "HP -15, MP -12; Damage 96%, stun for 2 seconds with 38% success rate"
      },
      {
        "Levels": 5,
        "Effect": "HP -15, MP -12; Damage 100%, stun for 2 seconds with 40% success rate"
      },
      {
        "Levels": 6,
        "Effect": "HP -15, MP -12; Damage 104%, stun for 2 seconds with 42% success rate"
      },
      {
        "Levels": 7,
        "Effect": "HP -15, MP -12; Damage 108%, stun for 2 seconds with 44% success rate"
      },
      {
        "Levels": 8,
        "Effect": "HP -15, MP -12; Damage 112%, stun for 2 seconds with 46% success rate"
      },
      {
        "Levels": 9,
        "Effect": "HP -15, MP -12; Damage 116%, stun for 2 seconds with 48% success rate"
      },
      {
        "Levels": 10,
        "Effect": "HP -15, MP -12; Damage 120%, stun for 2 seconds with 50% success rate"
      },
      {
        "Levels": 11,
        "Effect": "HP -20, MP -19; Damage 124%, stun for 3 seconds with 52% success rate"
      },
      {
        "Levels": 12,
        "Effect": "HP -20, MP -19; Damage 128%, stun for 3 seconds with 54% success rate"
      },
      {
        "Levels": 13,
        "Effect": "HP -20, MP -19; Damage 132%, stun for 3 seconds with 56% success rate"
      },
      {
        "Levels": 14,
        "Effect": "HP -20, MP -19; Damage 136%, stun for 3 seconds with 58% success rate"
      },
      {
        "Levels": 15,
        "Effect": "HP -20, MP -19; Damage 140%, stun for 3 seconds with 60% success rate"
      },
      {
        "Levels": 16,
        "Effect": "HP -20, MP -19; Damage 144%, stun for 3 seconds with 62% success rate"
      },
      {
        "Levels": 17,
        "Effect": "HP -20, MP -19; Damage 148%, stun for 3 seconds with 64% success rate"
      },
      {
        "Levels": 18,
        "Effect": "HP -20, MP -19; Damage 152%, stun for 3 seconds with 66% success rate"
      },
      {
        "Levels": 19,
        "Effect": "HP -20, MP -19; Damage 156%, stun for 3 seconds with 68% success rate"
      },
      {
        "Levels": 20,
        "Effect": "HP -20, MP -19; Damage 160%, stun for 3 seconds with 70% success rate"
      },
      {
        "Levels": 21,
        "Effect": "HP -25, MP -26; Damage 164%, stun for 4 seconds with 72% success rate"
      },
      {
        "Levels": 22,
        "Effect": "HP -25, MP -26; Damage 168%, stun for 4 seconds with 74% success rate"
      },
      {
        "Levels": 23,
        "Effect": "HP -25, MP -26; Damage 172%, stun for 4 seconds with 76% success rate"
      },
      {
        "Levels": 24,
        "Effect": "HP -25, MP -26; Damage 176%, stun for 4 seconds with 78% success rate"
      },
      {
        "Levels": 25,
        "Effect": "HP -25, MP -26; Damage 180%, stun for 4 seconds with 80% success rate"
      },
      {
        "Levels": 26,
        "Effect": "HP -25, MP -26; Damage 184%, stun for 4 seconds with 82% success rate"
      },
      {
        "Levels": 27,
        "Effect": "HP -25, MP -26; Damage 188%, stun for 4 seconds with 84% success rate"
      },
      {
        "Levels": 28,
        "Effect": "HP -25, MP -26; Damage 192%, stun for 4 seconds with 86% success rate"
      },
      {
        "Levels": 29,
        "Effect": "HP -25, MP -26; Damage 196%, stun for 4 seconds with 88% success rate"
      },
      {
        "Levels": 30,
        "Effect": "HP -25, MP -26; Damage 200%, stun for 4 seconds with 90% success rate"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Coma: Axe",
      "src": coma_Axe
    },
    "Skill Name": "Coma: Axe",
    "Master Level": 30,
    "Description": "If struck cleanly, the monster becomes stunned. This skill can only be used when equipped with an axe and the combo all charged up.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -15, MP -12; Damage 84%, stun for 2 seconds with 32% success rate"
      },
      {
        "Levels": 2,
        "Effect": "HP -15, MP -12; Damage 88%, stun for 2 seconds with 34% success rate"
      },
      {
        "Levels": 3,
        "Effect": "HP -15, MP -12; Damage 92%, stun for 2 seconds with 36% success rate"
      },
      {
        "Levels": 4,
        "Effect": "HP -15, MP -12; Damage 96%, stun for 2 seconds with 38% success rate"
      },
      {
        "Levels": 5,
        "Effect": "HP -15, MP -12; Damage 100%, stun for 2 seconds with 40% success rate"
      },
      {
        "Levels": 6,
        "Effect": "HP -15, MP -12; Damage 104%, stun for 2 seconds with 42% success rate"
      },
      {
        "Levels": 7,
        "Effect": "HP -15, MP -12; Damage 108%, stun for 2 seconds with 44% success rate"
      },
      {
        "Levels": 8,
        "Effect": "HP -15, MP -12; Damage 112%, stun for 2 seconds with 46% success rate"
      },
      {
        "Levels": 9,
        "Effect": "HP -15, MP -12; Damage 116%, stun for 2 seconds with 48% success rate"
      },
      {
        "Levels": 10,
        "Effect": "HP -15, MP -12; Damage 120%, stun for 2 seconds with 50% success rate"
      },
      {
        "Levels": 11,
        "Effect": "HP -20, MP -19; Damage 124%, stun for 3 seconds with 52% success rate"
      },
      {
        "Levels": 12,
        "Effect": "HP -20, MP -19; Damage 128%, stun for 3 seconds with 54% success rate"
      },
      {
        "Levels": 13,
        "Effect": "HP -20, MP -19; Damage 132%, stun for 3 seconds with 56% success rate"
      },
      {
        "Levels": 14,
        "Effect": "HP -20, MP -19; Damage 136%, stun for 3 seconds with 58% success rate"
      },
      {
        "Levels": 15,
        "Effect": "HP -20, MP -19; Damage 140%, stun for 3 seconds with 60% success rate"
      },
      {
        "Levels": 16,
        "Effect": "HP -20, MP -19; Damage 144%, stun for 3 seconds with 62% success rate"
      },
      {
        "Levels": 17,
        "Effect": "HP -20, MP -19; Damage 148%, stun for 3 seconds with 64% success rate"
      },
      {
        "Levels": 18,
        "Effect": "HP -20, MP -19; Damage 152%, stun for 3 seconds with 66% success rate"
      },
      {
        "Levels": 19,
        "Effect": "HP -20, MP -19; Damage 156%, stun for 3 seconds with 68% success rate"
      },
      {
        "Levels": 20,
        "Effect": "HP -20, MP -19; Damage 160%, stun for 3 seconds with 70% success rate"
      },
      {
        "Levels": 21,
        "Effect": "HP -25, MP -26; Damage 164%, stun for 4 seconds with 72% success rate"
      },
      {
        "Levels": 22,
        "Effect": "HP -25, MP -26; Damage 168%, stun for 4 seconds with 74% success rate"
      },
      {
        "Levels": 23,
        "Effect": "HP -25, MP -26; Damage 172%, stun for 4 seconds with 76% success rate"
      },
      {
        "Levels": 24,
        "Effect": "HP -25, MP -26; Damage 176%, stun for 4 seconds with 78% success rate"
      },
      {
        "Levels": 25,
        "Effect": "HP -25, MP -26; Damage 180%, stun for 4 seconds with 80% success rate"
      },
      {
        "Levels": 26,
        "Effect": "HP -25, MP -26; Damage 184%, stun for 4 seconds with 82% success rate"
      },
      {
        "Levels": 27,
        "Effect": "HP -25, MP -26; Damage 188%, stun for 4 seconds with 84% success rate"
      },
      {
        "Levels": 28,
        "Effect": "HP -25, MP -26; Damage 192%, stun for 4 seconds with 86% success rate"
      },
      {
        "Levels": 29,
        "Effect": "HP -25, MP -26; Damage 196%, stun for 4 seconds with 88% success rate"
      },
      {
        "Levels": 30,
        "Effect": "HP -25, MP -26; Damage 200%, stun for 4 seconds with 90% success rate"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Armor Crash",
      "src": armorCrash
    },
    "Skill Name": "Armor Crash",
    "Master Level": 20,
    "Description": "Nullifies the defense buff used by the monster with a given success rate.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -35; Cancel out enemy's Physical Defense-Up with 24% success rate"
      },
      {
        "Levels": 2,
        "Effect": "MP -33; Cancel out enemy's Physical Defense-Up with 28% success rate"
      },
      {
        "Levels": 3,
        "Effect": "MP -31; Cancel out enemy's Physical Defense-Up with 32% success rate"
      },
      {
        "Levels": 4,
        "Effect": "MP -29; Cancel out enemy's Physical Defense-Up with 36% success rate"
      },
      {
        "Levels": 5,
        "Effect": "MP -27; Cancel out enemy's Physical Defense-Up with 40% success rate"
      },
      {
        "Levels": 6,
        "Effect": "MP -25; Cancel out enemy's Physical Defense-Up with 44% success rate"
      },
      {
        "Levels": 7,
        "Effect": "MP -23; Cancel out enemy's Physical Defense-Up with 48% success rate"
      },
      {
        "Levels": 8,
        "Effect": "MP -21; Cancel out enemy's Physical Defense-Up with 52% success rate"
      },
      {
        "Levels": 9,
        "Effect": "MP -19; Cancel out enemy's Physical Defense-Up with 56% success rate"
      },
      {
        "Levels": 10,
        "Effect": "MP -17; Cancel out enemy's Physical Defense-Up with 60% success rate"
      },
      {
        "Levels": 11,
        "Effect": "MP -16; Cancel out enemy's Physical Defense-Up with 64% success rate"
      },
      {
        "Levels": 12,
        "Effect": "MP -15; Cancel out enemy's Physical Defense-Up with 68% success rate"
      },
      {
        "Levels": 13,
        "Effect": "MP -14; Cancel out enemy's Physical Defense-Up with 72% success rate"
      },
      {
        "Levels": 14,
        "Effect": "MP -13; Cancel out enemy's Physical Defense-Up with 76% success rate"
      },
      {
        "Levels": 15,
        "Effect": "MP -12; Cancel out enemy's Physical Defense-Up with 80% success rate"
      },
      {
        "Levels": 16,
        "Effect": "MP -11; Cancel out enemy's Physical Defense-Up with 84% success rate"
      },
      {
        "Levels": 17,
        "Effect": "MP -10; Cancel out enemy's Physical Defense-Up with 88% success rate"
      },
      {
        "Levels": 18,
        "Effect": "MP -9; Cancel out enemy's Physical Defense-Up with 92% success rate"
      },
      {
        "Levels": 19,
        "Effect": "MP -8; Cancel out enemy's Physical Defense-Up with 96% success rate"
      },
      {
        "Levels": 20,
        "Effect": "MP -7; Cancel out enemy's Physical Defense-Up with 100% success rate"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Shout",
      "src": shout
    },
    "Skill Name": "Shout",
    "Master Level": 30,
    "Description": "Temporarily stuns up to 6 monsters nearby with damage.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -8; Damage 11%, attack range 110%, stun for 5 seconds with 52% success rate"
      },
      {
        "Levels": 2,
        "Effect": "MP -8; Damage 12%, attack range 110%, stun for 5 seconds with 54% success rate"
      },
      {
        "Levels": 3,
        "Effect": "MP -8; Damage 13%, attack range 110%, stun for 5 seconds with 56% success rate"
      },
      {
        "Levels": 4,
        "Effect": "MP -8; Damage 14%, attack range 120%, stun for 5 seconds with 58% success rate"
      },
      {
        "Levels": 5,
        "Effect": "MP -8; Damage 15%, attack range 120%, stun for 5 seconds with 60% success rate"
      },
      {
        "Levels": 6,
        "Effect": "MP -8; Damage 16%, attack range 120%, stun for 6 seconds with 62% success rate"
      },
      {
        "Levels": 7,
        "Effect": "MP -8; Damage 17%, attack range 130%, stun for 6 seconds with 64% success rate"
      },
      {
        "Levels": 8,
        "Effect": "MP -8; Damage 18%, attack range 130%, stun for 6 seconds with 66% success rate"
      },
      {
        "Levels": 9,
        "Effect": "MP -8; Damage 19%, attack range 130%, stun for 6 seconds with 68% success rate"
      },
      {
        "Levels": 10,
        "Effect": "MP -8; Damage 20%, attack range 140%, stun for 6 seconds with 70% success rate"
      },
      {
        "Levels": 11,
        "Effect": "MP -12; Damage 20%, attack range 140%, stun for 7 seconds with 72% success rate"
      },
      {
        "Levels": 12,
        "Effect": "MP -12; Damage 21%, attack range 140%, stun for 7 seconds with 74% success rate"
      },
      {
        "Levels": 13,
        "Effect": "MP -12; Damage 21%, attack range 150%, stun for 7 seconds with 76% success rate"
      },
      {
        "Levels": 14,
        "Effect": "MP -12; Damage 22%, attack range 150%, stun for 7 seconds with 78% success rate"
      },
      {
        "Levels": 15,
        "Effect": "MP -12; Damage 22%, attack range 150%, stun for 7 seconds with 80% success rate"
      },
      {
        "Levels": 16,
        "Effect": "MP -12; Damage 23%, attack range 160%, stun for 8 seconds with 81% success rate"
      },
      {
        "Levels": 17,
        "Effect": "MP -12; Damage 23%, attack range 160%, stun for 8 seconds with 82% success rate"
      },
      {
        "Levels": 18,
        "Effect": "MP -12; Damage 24%, attack range 160%, stun for 8 seconds with 83% success rate"
      },
      {
        "Levels": 19,
        "Effect": "MP -12; Damage 24%, attack range 170%, stun for 8 seconds with 84% success rate"
      },
      {
        "Levels": 20,
        "Effect": "MP -12; Damage 25%, attack range 170%, stun for 8 seconds with 85% success rate"
      },
      {
        "Levels": 21,
        "Effect": "MP -16; Damage 25%, attack range 170%, stun for 9 seconds with 86% success rate"
      },
      {
        "Levels": 22,
        "Effect": "MP -16; Damage 26%, attack range 180%, stun for 9 seconds with 87% success rate"
      },
      {
        "Levels": 23,
        "Effect": "MP -16; Damage 26%, attack range 180%, stun for 9 seconds with 88% success rate"
      },
      {
        "Levels": 24,
        "Effect": "MP -16; Damage 27%, attack range 180%, stun for 9 seconds with 89% success rate"
      },
      {
        "Levels": 25,
        "Effect": "MP -16; Damage 27%, attack range 190%, stun for 9 seconds with 90% success rate"
      },
      {
        "Levels": 26,
        "Effect": "MP -16; Damage 28%, attack range 190%, stun for 10 seconds with 91% success rate"
      },
      {
        "Levels": 27,
        "Effect": "MP -16; Damage 28%, attack range 190%, stun for 10 seconds with 92% success rate"
      },
      {
        "Levels": 28,
        "Effect": "MP -16; Damage 29%, attack range 200%, stun for 10 seconds with 93% success rate"
      },
      {
        "Levels": 29,
        "Effect": "MP -16; Damage 29%, attack range 200%, stun for 10 seconds with 94% success rate"
      },
      {
        "Levels": 30,
        "Effect": "MP -16; Damage 30%, attack range 200%, stun for 10 seconds with 95% success rate"
      }
    ],
    "Type": "Active"
  }
];