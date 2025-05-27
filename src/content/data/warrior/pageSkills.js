import swordMastery from '/src/assets/skills/Sword Mastery.png';
import bwMastery from '/src/assets/skills/BW Mastery.png';
import finalAttack_Sword from '/src/assets/skills/Final Attack.png';
import finalAttack_Bw from '/src/assets/skills/Final Attack.png';
import swordBooster from '/src/assets/skills/Sword Booster.png';
import bwBooster from '/src/assets/skills/BW Booster.png';
import threaten from '/src/assets/skills/Threaten.png';
import powerGuard from '/src/assets/skills/Power Guard.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Sword Mastery",
      "src": swordMastery
    },
    "Skill Name": "Sword Mastery",
    "Master Level": 20,
    "Description": "Increases the sword mastery and accuracy. It only applies when either a one-handed or a two-handed sword is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Sword mastery +15%, accuracy +1"
      },
      {
        "Levels": 2,
        "Effect": "Sword mastery +15%, accuracy +2"
      },
      {
        "Levels": 3,
        "Effect": "Sword mastery +20%, accuracy +3"
      },
      {
        "Levels": 4,
        "Effect": "Sword mastery +20%, accuracy +4"
      },
      {
        "Levels": 5,
        "Effect": "Sword mastery +25%, accuracy +5"
      },
      {
        "Levels": 6,
        "Effect": "Sword mastery +25%, accuracy +6"
      },
      {
        "Levels": 7,
        "Effect": "Sword mastery +30%, accuracy +7"
      },
      {
        "Levels": 8,
        "Effect": "Sword mastery +30%, accuracy +8"
      },
      {
        "Levels": 9,
        "Effect": "Sword mastery +35%, accuracy +9"
      },
      {
        "Levels": 10,
        "Effect": "Sword mastery +35%, accuracy +10"
      },
      {
        "Levels": 11,
        "Effect": "Sword mastery +40%, accuracy +11"
      },
      {
        "Levels": 12,
        "Effect": "Sword mastery +40%, accuracy +12"
      },
      {
        "Levels": 13,
        "Effect": "Sword mastery +45%, accuracy +13"
      },
      {
        "Levels": 14,
        "Effect": "Sword mastery +45%, accuracy +14"
      },
      {
        "Levels": 15,
        "Effect": "Sword mastery +50%, accuracy +15"
      },
      {
        "Levels": 16,
        "Effect": "Sword mastery +50%, accuracy +16"
      },
      {
        "Levels": 17,
        "Effect": "Sword mastery +55%, accuracy +17"
      },
      {
        "Levels": 18,
        "Effect": "Sword mastery +55%, accuracy +18"
      },
      {
        "Levels": 19,
        "Effect": "Sword mastery +60%, accuracy +19"
      },
      {
        "Levels": 20,
        "Effect": "Sword mastery +60%, accuracy +20"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "BW Mastery",
      "src": bwMastery
    },
    "Skill Name": "BW Mastery",
    "Master Level": 20,
    "Description": "Increases the mastery of blunt weapons and accuracy. It only applies when either a one-handed or a two-handed blunt weapon is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Mace mastery +15%, accuracy +1"
      },
      {
        "Levels": 2,
        "Effect": "Mace mastery +15%, accuracy +2"
      },
      {
        "Levels": 3,
        "Effect": "Mace mastery +20%, accuracy +3"
      },
      {
        "Levels": 4,
        "Effect": "Mace mastery +20%, accuracy +4"
      },
      {
        "Levels": 5,
        "Effect": "Mace mastery +25%, accuracy +5"
      },
      {
        "Levels": 6,
        "Effect": "Mace mastery +25%, accuracy +6"
      },
      {
        "Levels": 7,
        "Effect": "Mace mastery +30%, accuracy +7"
      },
      {
        "Levels": 8,
        "Effect": "Mace mastery +30%, accuracy +8"
      },
      {
        "Levels": 9,
        "Effect": "Mace mastery +35%, accuracy +9"
      },
      {
        "Levels": 10,
        "Effect": "Mace mastery +35%, accuracy +10"
      },
      {
        "Levels": 11,
        "Effect": "Mace mastery +40%, accuracy +11"
      },
      {
        "Levels": 12,
        "Effect": "Mace mastery +40%, accuracy +12"
      },
      {
        "Levels": 13,
        "Effect": "Mace mastery +45%, accuracy +13"
      },
      {
        "Levels": 14,
        "Effect": "Mace mastery +45%, accuracy +14"
      },
      {
        "Levels": 15,
        "Effect": "Mace mastery +50%, accuracy +15"
      },
      {
        "Levels": 16,
        "Effect": "Mace mastery +50%, accuracy +16"
      },
      {
        "Levels": 17,
        "Effect": "Mace mastery +55%, accuracy +17"
      },
      {
        "Levels": 18,
        "Effect": "Mace mastery +55%, accuracy +18"
      },
      {
        "Levels": 19,
        "Effect": "Mace mastery +60%, accuracy +19"
      },
      {
        "Levels": 20,
        "Effect": "Mace mastery +60%, accuracy +20"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Final Attack : Sword",
      "src": finalAttack_Sword
    },
    "Skill Name": "Final Attack : Sword",
    "Master Level": 30,
    "Description": "Strikes an another, far deadlier blow following the initial attack with a given success rate. It works only when holding a one-hand or two-hand sword.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Success rate 2%, final attack with sword damage 105%"
      },
      {
        "Levels": 2,
        "Effect": "Success rate 4%, final attack with sword damage 110%"
      },
      {
        "Levels": 3,
        "Effect": "Success rate 6%, final attack with sword damage 115%"
      },
      {
        "Levels": 4,
        "Effect": "Success rate 8%, final attack with sword damage 120%"
      },
      {
        "Levels": 5,
        "Effect": "Success rate 10%, final attack with sword damage 125%"
      },
      {
        "Levels": 6,
        "Effect": "Success rate 12%, final attack with sword damage 130%"
      },
      {
        "Levels": 7,
        "Effect": "Success rate 14%, final attack with sword damage 135%"
      },
      {
        "Levels": 8,
        "Effect": "Success rate 16%, final attack with sword damage 140%"
      },
      {
        "Levels": 9,
        "Effect": "Success rate 18%, final attack with sword damage 145%"
      },
      {
        "Levels": 10,
        "Effect": "Success rate 20%, final attack with sword damage 150%"
      },
      {
        "Levels": 11,
        "Effect": "Success rate 22%, final attack with sword damage 155%"
      },
      {
        "Levels": 12,
        "Effect": "Success rate 24%, final attack with sword damage 160%"
      },
      {
        "Levels": 13,
        "Effect": "Success rate 26%, final attack with sword damage 165%"
      },
      {
        "Levels": 14,
        "Effect": "Success rate 28%, final attack with sword damage 170%"
      },
      {
        "Levels": 15,
        "Effect": "Success rate 30%, final attack with sword damage 175%"
      },
      {
        "Levels": 16,
        "Effect": "Success rate 32%, final attack with sword damage 180%"
      },
      {
        "Levels": 17,
        "Effect": "Success rate 34%, final attack with sword damage 185%"
      },
      {
        "Levels": 18,
        "Effect": "Success rate 36%, final attack with sword damage 190%"
      },
      {
        "Levels": 19,
        "Effect": "Success rate 38%, final attack with sword damage 195%"
      },
      {
        "Levels": 20,
        "Effect": "Success rate 40%, final attack with sword damage 200%"
      },
      {
        "Levels": 21,
        "Effect": "Success rate 42%, final attack with sword damage 205%"
      },
      {
        "Levels": 22,
        "Effect": "Success rate 44%, final attack with sword damage 210%"
      },
      {
        "Levels": 23,
        "Effect": "Success rate 46%, final attack with sword damage 215%"
      },
      {
        "Levels": 24,
        "Effect": "Success rate 48%, final attack with sword damage 220%"
      },
      {
        "Levels": 25,
        "Effect": "Success rate 50%, final attack with sword damage 225%"
      },
      {
        "Levels": 26,
        "Effect": "Success rate 52%, final attack with sword damage 230%"
      },
      {
        "Levels": 27,
        "Effect": "Success rate 54%, final attack with sword damage 235%"
      },
      {
        "Levels": 28,
        "Effect": "Success rate 56%, final attack with sword damage 240%"
      },
      {
        "Levels": 29,
        "Effect": "Success rate 58%, final attack with sword damage 245%"
      },
      {
        "Levels": 30,
        "Effect": "Success rate 60%, final attack with sword damage 250%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Final Attack : BW",
      "src": finalAttack_Bw
    },
    "Skill Name": "Final Attack : BW",
    "Master Level": 30,
    "Description": "Strikes an another, far deadlier blow following the initial attack with a given success rate. It works only when holding a one-hand or two-hand blunt weapon.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Success rate 2%, final attack with blunt weapon damage 105%"
      },
      {
        "Levels": 2,
        "Effect": "Success rate 4%, final attack with blunt weapon damage 110%"
      },
      {
        "Levels": 3,
        "Effect": "Success rate 6%, final attack with blunt weapon damage 115%"
      },
      {
        "Levels": 4,
        "Effect": "Success rate 8%, final attack with blunt weapon damage 120%"
      },
      {
        "Levels": 5,
        "Effect": "Success rate 10%, final attack with blunt weapon damage 125%"
      },
      {
        "Levels": 6,
        "Effect": "Success rate 12%, final attack with blunt weapon damage 130%"
      },
      {
        "Levels": 7,
        "Effect": "Success rate 14%, final attack with blunt weapon damage 135%"
      },
      {
        "Levels": 8,
        "Effect": "Success rate 16%, final attack with blunt weapon damage 140%"
      },
      {
        "Levels": 9,
        "Effect": "Success rate 18%, final attack with blunt weapon damage 145%"
      },
      {
        "Levels": 10,
        "Effect": "Success rate 20%, final attack with blunt weapon damage 150%"
      },
      {
        "Levels": 11,
        "Effect": "Success rate 22%, final attack with blunt weapon damage 155%"
      },
      {
        "Levels": 12,
        "Effect": "Success rate 24%, final attack with blunt weapon damage 160%"
      },
      {
        "Levels": 13,
        "Effect": "Success rate 26%, final attack with blunt weapon damage 165%"
      },
      {
        "Levels": 14,
        "Effect": "Success rate 28%, final attack with blunt weapon damage 170%"
      },
      {
        "Levels": 15,
        "Effect": "Success rate 30%, final attack with blunt weapon damage 175%"
      },
      {
        "Levels": 16,
        "Effect": "Success rate 32%, final attack with blunt weapon damage 180%"
      },
      {
        "Levels": 17,
        "Effect": "Success rate 34%, final attack with blunt weapon damage 185%"
      },
      {
        "Levels": 18,
        "Effect": "Success rate 36%, final attack with blunt weapon damage 190%"
      },
      {
        "Levels": 19,
        "Effect": "Success rate 38%, final attack with blunt weapon damage 195%"
      },
      {
        "Levels": 20,
        "Effect": "Success rate 40%, final attack with blunt weapon damage 200%"
      },
      {
        "Levels": 21,
        "Effect": "Success rate 42%, final attack with blunt weapon damage 205%"
      },
      {
        "Levels": 22,
        "Effect": "Success rate 44%, final attack with blunt weapon damage 210%"
      },
      {
        "Levels": 23,
        "Effect": "Success rate 46%, final attack with blunt weapon damage 215%"
      },
      {
        "Levels": 24,
        "Effect": "Success rate 48%, final attack with blunt weapon damage 220%"
      },
      {
        "Levels": 25,
        "Effect": "Success rate 50%, final attack with blunt weapon damage 225%"
      },
      {
        "Levels": 26,
        "Effect": "Success rate 52%, final attack with blunt weapon damage 230%"
      },
      {
        "Levels": 27,
        "Effect": "Success rate 54%, final attack with blunt weapon damage 235%"
      },
      {
        "Levels": 28,
        "Effect": "Success rate 56%, final attack with blunt weapon damage 240%"
      },
      {
        "Levels": 29,
        "Effect": "Success rate 58%, final attack with blunt weapon damage 245%"
      },
      {
        "Levels": 30,
        "Effect": "Success rate 60%, final attack with blunt weapon damage 250%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Sword Booster",
      "src": swordBooster
    },
    "Skill Name": "Sword Booster",
    "Master Level": 20,
    "Description": "Uses HP and MP to temporarily boost up the attacking speed of the equipped sword. It only applies when either a one-handed or a two-handed sword is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -29, MP -29; Increase in sword speed for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "HP -28, MP -28; Increase in sword speed for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "HP -27, MP -27; Increase in sword speed for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "HP -26, MP -26; Increase in sword speed for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "HP -25, MP -25; Increase in sword speed for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "HP -24, MP -24; Increase in sword speed for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "HP -23, MP -23; Increase in sword speed for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "HP -22, MP -22; Increase in sword speed for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "HP -21, MP -21; Increase in sword speed for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "HP -20, MP -20; Increase in sword speed for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "HP -19, MP -19; Increase in sword speed for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "HP -18, MP -18; Increase in sword speed for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "HP -17, MP -17; Increase in sword speed for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "HP -16, MP -16; Increase in sword speed for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "HP -15, MP -15; Increase in sword speed for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -14; Increase in sword speed for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "HP -13, MP -13; Increase in sword speed for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "HP -12, MP -12; Increase in sword speed for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "HP -11, MP -11; Increase in sword speed for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "HP -10, MP -10; Increase in sword speed for 200 seconds"
      }
    ],
    "Type": "Supportive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "BW Booster",
      "src": bwBooster
    },
    "Skill Name": "BW Booster",
    "Master Level": 0,
    "Description": "Uses HP and MP to temporarily boost up the attacking speed of the equipped blunt weapon. It only applies when either a one-handed or a two-handed blunt weapon is in hand.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "HP -29, MP -29; Increase in mace speed for 10 seconds"
      },
      {
        "Levels": 2,
        "Effect": "HP -28, MP -28; Increase in mace speed for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "HP -27, MP -27; Increase in mace speed for 30 seconds"
      },
      {
        "Levels": 4,
        "Effect": "HP -26, MP -26; Increase in mace speed for 40 seconds"
      },
      {
        "Levels": 5,
        "Effect": "HP -25, MP -25; Increase in mace speed for 50 seconds"
      },
      {
        "Levels": 6,
        "Effect": "HP -24, MP -24; Increase in mace speed for 60 seconds"
      },
      {
        "Levels": 7,
        "Effect": "HP -23, MP -23; Increase in mace speed for 70 seconds"
      },
      {
        "Levels": 8,
        "Effect": "HP -22, MP -22; Increase in mace speed for 80 seconds"
      },
      {
        "Levels": 9,
        "Effect": "HP -21, MP -21; Increase in mace speed for 90 seconds"
      },
      {
        "Levels": 10,
        "Effect": "HP -20, MP -20; Increase in mace speed for 100 seconds"
      },
      {
        "Levels": 11,
        "Effect": "HP -19, MP -19; Increase in mace speed for 110 seconds"
      },
      {
        "Levels": 12,
        "Effect": "HP -18, MP -18; Increase in mace speed for 120 seconds"
      },
      {
        "Levels": 13,
        "Effect": "HP -17, MP -17; Increase in mace speed for 130 seconds"
      },
      {
        "Levels": 14,
        "Effect": "HP -16, MP -16; Increase in mace speed for 140 seconds"
      },
      {
        "Levels": 15,
        "Effect": "HP -15, MP -15; Increase in mace speed for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "HP -14, MP -14; Increase in mace speed for 160 seconds"
      },
      {
        "Levels": 17,
        "Effect": "HP -13, MP -13; Increase in mace speed for 170 seconds"
      },
      {
        "Levels": 18,
        "Effect": "HP -12, MP -12; Increase in mace speed for 180 seconds"
      },
      {
        "Levels": 19,
        "Effect": "HP -11, MP -11; Increase in mace speed for 190 seconds"
      },
      {
        "Levels": 20,
        "Effect": "HP -10, MP -10; Increase in mace speed for 200 seconds"
      }
    ],
    "Type": "Supportive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Threaten",
      "src": threaten
    },
    "Skill Name": "Threaten",
    "Master Level": 20,
    "Description": "Use MP to temporarily threaten a monster. Decreases the level of weapon attack and weapon defense of every monster around the area.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -12; Enemy's weapon attack -1, weapon def. -5 for 3 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -12; Enemy's weapon attack -2, weapon def. -10 for 6 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -12; Enemy's weapon attack -3, weapon def. -15 for 9 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -12; Enemy's weapon attack -4, weapon def. -20 for 12 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -12; Enemy's weapon attack -5, weapon def. -25 for 15 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -12; Enemy's weapon attack -6, weapon def. -30 for 18 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -12; Enemy's weapon attack -7, weapon def. -35 for 21 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -12; Enemy's weapon attack -8, weapon def. -40 for 24 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -12; Enemy's weapon attack -9, weapon def. -45 for 27 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -12; Enemy's weapon attack -10, weapon def. -50 for 30 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -20; Enemy's weapon attack -11, weapon def. -55 for 33 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -20; Enemy's weapon attack -12, weapon def. -60 for 36 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -20; Enemy's weapon attack -13, weapon def. -65 for 39 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -20; Enemy's weapon attack -14, weapon def. -70 for 42 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -20; Enemy's weapon attack -15, weapon def. -75 for 45 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -20; Enemy's weapon attack -16, weapon def. -80 for 48 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -20; Enemy's weapon attack -17, weapon def. -85 for 51 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -20; Enemy's weapon attack -18, weapon def. -90 for 54 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -20; Enemy's weapon attack -19, weapon def. -95 for 57 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -20; Enemy's weapon attack -20, weapon def. -100 for 60 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Power Guard",
      "src": powerGuard
    },
    "Skill Name": "Power Guard",
    "Master Level": 30,
    "Description": "Returns a portion of the touch damage received from the enemy (half for bosses). Can't return more than 10% of the enemy's Max HP at once, however.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -15; For 4 seconds, return 11% of the damage received"
      },
      {
        "Levels": 2,
        "Effect": "MP -15; For 8 seconds, return 12% of the damage received"
      },
      {
        "Levels": 3,
        "Effect": "MP -15; For 12 seconds, return 13% of the damage received"
      },
      {
        "Levels": 4,
        "Effect": "MP -15; For 16 seconds, return 14% of the damage received"
      },
      {
        "Levels": 5,
        "Effect": "MP -15; For 20 seconds, return 15% of the damage received"
      },
      {
        "Levels": 6,
        "Effect": "MP -15; For 24 seconds, return 16% of the damage received"
      },
      {
        "Levels": 7,
        "Effect": "MP -15; For 28 seconds, return 17% of the damage received"
      },
      {
        "Levels": 8,
        "Effect": "MP -15; For 32 seconds, return 18% of the damage received"
      },
      {
        "Levels": 9,
        "Effect": "MP -15; For 36 seconds, return 19% of the damage received"
      },
      {
        "Levels": 10,
        "Effect": "MP -15; For 40 seconds, return 20% of the damage received"
      },
      {
        "Levels": 11,
        "Effect": "MP -15; For 44 seconds, return 21% of the damage received"
      },
      {
        "Levels": 12,
        "Effect": "MP -15; For 48 seconds, return 22% of the damage received"
      },
      {
        "Levels": 13,
        "Effect": "MP -15; For 52 seconds, return 23% of the damage received"
      },
      {
        "Levels": 14,
        "Effect": "MP -15; For 56 seconds, return 24% of the damage received"
      },
      {
        "Levels": 15,
        "Effect": "MP -15; For 60 seconds, return 25% of the damage received"
      },
      {
        "Levels": 16,
        "Effect": "MP -30; For 64 seconds, return 26% of the damage received"
      },
      {
        "Levels": 17,
        "Effect": "MP -30; For 68 seconds, return 27% of the damage received"
      },
      {
        "Levels": 18,
        "Effect": "MP -30; For 72 seconds, return 28% of the damage received"
      },
      {
        "Levels": 19,
        "Effect": "MP -30; For 76 seconds, return 29% of the damage received"
      },
      {
        "Levels": 20,
        "Effect": "MP -30; For 80 seconds, return 30% of the damage received"
      },
      {
        "Levels": 21,
        "Effect": "MP -30; For 84 seconds, return 31% of the damage received"
      },
      {
        "Levels": 22,
        "Effect": "MP -30; For 88 seconds, return 32% of the damage received"
      },
      {
        "Levels": 23,
        "Effect": "MP -30; For 92 seconds, return 33% of the damage received"
      },
      {
        "Levels": 24,
        "Effect": "MP -30; For 96 seconds, return 34% of the damage received"
      },
      {
        "Levels": 25,
        "Effect": "MP -30; For 100 seconds, return 35% of the damage received"
      },
      {
        "Levels": 26,
        "Effect": "MP -30; For 104 seconds, return 36% of the damage received"
      },
      {
        "Levels": 27,
        "Effect": "MP -30; For 108 seconds, return 37% of the damage received"
      },
      {
        "Levels": 28,
        "Effect": "MP -30; For 112 seconds, return 38% of the damage received"
      },
      {
        "Levels": 29,
        "Effect": "MP -30; For 116 seconds, return 39% of the damage received"
      },
      {
        "Levels": 30,
        "Effect": "MP -30; For 120 seconds, return 40% of the damage received"
      }
    ],
    "Type": "Active"
  }
];