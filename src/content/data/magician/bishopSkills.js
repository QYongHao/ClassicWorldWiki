import mapleWarrior from '/src/assets/skills/Maple Warrior.png';
import bigBang from '/src/assets/skills/Big Bang.png';
import manaReflection from '/src/assets/skills/Mana Reflection.png';
import bahamut from '/src/assets/skills/Bahamut.png';
import infinity from '/src/assets/skills/Infinity.png';
import holyShield from '/src/assets/skills/Holy Shield.png';
import resurrection from '/src/assets/skills/Resurrection.png';
import angelRay from '/src/assets/skills/Angel Ray.png';
import genesis from '/src/assets/skills/Genesis.png';
import herosWill from '/src/assets/skills/Hero\'s Will.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Maple Warrior",
      "src": mapleWarrior
    },
    "Skill Name": "Maple Warrior",
    "Master Level": 0,
    "Description": "Increase all player's stats within a party by certain percentage",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -10; For 30 seconds, all stats +1%"
      },
      {
        "Levels": 2,
        "Effect": "MP -10; For 60 seconds, all stats +1%"
      },
      {
        "Levels": 3,
        "Effect": "MP -10; For 90 seconds, all stats +2%"
      },
      {
        "Levels": 4,
        "Effect": "MP -10; For 120 seconds, all stats +2%"
      },
      {
        "Levels": 5,
        "Effect": "MP -10; For 150 seconds, all stats +3%"
      },
      {
        "Levels": 6,
        "Effect": "MP -20; For 180 seconds, all stats +3%"
      },
      {
        "Levels": 7,
        "Effect": "MP -20; For 210 seconds, all stats +4%"
      },
      {
        "Levels": 8,
        "Effect": "MP -20; For 240 seconds, all stats +4%"
      },
      {
        "Levels": 9,
        "Effect": "MP -20; For 270 seconds, all stats +5%"
      },
      {
        "Levels": 10,
        "Effect": "MP -20; For 300 seconds, all stats +5%"
      },
      {
        "Levels": 11,
        "Effect": "MP -30; For 330 seconds, all stats +6%"
      },
      {
        "Levels": 12,
        "Effect": "MP -30; For 360 seconds, all stats +6%"
      },
      {
        "Levels": 13,
        "Effect": "MP -30; For 390 seconds, all stats +7%"
      },
      {
        "Levels": 14,
        "Effect": "MP -30; For 420 seconds, all stats +7%"
      },
      {
        "Levels": 15,
        "Effect": "MP -30; For 450 seconds, all stats +8%"
      },
      {
        "Levels": 16,
        "Effect": "MP -40; For 480 seconds, all stats +8%"
      },
      {
        "Levels": 17,
        "Effect": "MP -40; For 510 seconds, all stats +9%"
      },
      {
        "Levels": 18,
        "Effect": "MP -40; For 540 seconds, all stats +9%"
      },
      {
        "Levels": 19,
        "Effect": "MP -40; For 570 seconds, all stats +10%"
      },
      {
        "Levels": 20,
        "Effect": "MP -40; For 600 seconds, all stats +10%"
      },
      {
        "Levels": 21,
        "Effect": "MP -50; For 630 seconds, all stats +11%"
      },
      {
        "Levels": 22,
        "Effect": "MP -50; For 660 seconds, all stats +11%"
      },
      {
        "Levels": 23,
        "Effect": "MP -50; For 690 seconds, all stats +11%"
      },
      {
        "Levels": 24,
        "Effect": "MP -50; For 720 seconds, all stats +11%"
      },
      {
        "Levels": 25,
        "Effect": "MP -60; For 750 seconds, all stats +12%"
      },
      {
        "Levels": 26,
        "Effect": "MP -60; For 780 seconds, all stats +12%"
      },
      {
        "Levels": 27,
        "Effect": "MP -60; For 810 seconds, all stats +12%"
      },
      {
        "Levels": 28,
        "Effect": "MP -60; For 840 seconds, all stats +12%"
      },
      {
        "Levels": 29,
        "Effect": "MP -70; For 870 seconds, all stats +13%"
      },
      {
        "Levels": 30,
        "Effect": "MP -70; For 900 seconds, all stats +13%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Big Bang",
      "src": bigBang
    },
    "Skill Name": "Big Bang",
    "Master Level": 0,
    "Description": "Gathers up numerous particles from the surrounding area to form an energy vortex, culminating in a powerful explosion.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -25; Spell attack 160, mastery 35%"
      },
      {
        "Levels": 2,
        "Effect": "MP -25; Spell attack 170, mastery 35%"
      },
      {
        "Levels": 3,
        "Effect": "MP -25; Spell attack 180, mastery 35%"
      },
      {
        "Levels": 4,
        "Effect": "MP -25; Spell attack 190, mastery 40%"
      },
      {
        "Levels": 5,
        "Effect": "MP -25; Spell attack 200, mastery 40%"
      },
      {
        "Levels": 6,
        "Effect": "MP -25; Spell attack 210, mastery 40%"
      },
      {
        "Levels": 7,
        "Effect": "MP -25; Spell attack 220, mastery 45%"
      },
      {
        "Levels": 8,
        "Effect": "MP -25; Spell attack 230, mastery 45%"
      },
      {
        "Levels": 9,
        "Effect": "MP -25; Spell attack 240, mastery 45%"
      },
      {
        "Levels": 10,
        "Effect": "MP -25; Spell attack 250, mastery 50%"
      },
      {
        "Levels": 11,
        "Effect": "MP -40; Spell attack 260, mastery 50%"
      },
      {
        "Levels": 12,
        "Effect": "MP -40; Spell attack 270, mastery 50%"
      },
      {
        "Levels": 13,
        "Effect": "MP -40; Spell attack 280, mastery 55%"
      },
      {
        "Levels": 14,
        "Effect": "MP -40; Spell attack 290, mastery 55%"
      },
      {
        "Levels": 15,
        "Effect": "MP -40; Spell attack 300, mastery 55%"
      },
      {
        "Levels": 16,
        "Effect": "MP -40; Spell attack 310, mastery 60%"
      },
      {
        "Levels": 17,
        "Effect": "MP -40; Spell attack 320, mastery 60%"
      },
      {
        "Levels": 18,
        "Effect": "MP -40; Spell attack 330, mastery 60%"
      },
      {
        "Levels": 19,
        "Effect": "MP -40; Spell attack 340, mastery 65%"
      },
      {
        "Levels": 20,
        "Effect": "MP -40; Spell attack 350, mastery 65%"
      },
      {
        "Levels": 21,
        "Effect": "MP -55; Spell attack 360, mastery 65%"
      },
      {
        "Levels": 22,
        "Effect": "MP -55; Spell attack 370, mastery 70%"
      },
      {
        "Levels": 23,
        "Effect": "MP -55; Spell attack 380, mastery 70%"
      },
      {
        "Levels": 24,
        "Effect": "MP -55; Spell attack 390, mastery 70%"
      },
      {
        "Levels": 25,
        "Effect": "MP -55; Spell attack 400, mastery 75%"
      },
      {
        "Levels": 26,
        "Effect": "MP -54; Spell attack 410, mastery 75%"
      },
      {
        "Levels": 27,
        "Effect": "MP -53; Spell attack 420, mastery 75%"
      },
      {
        "Levels": 28,
        "Effect": "MP -52; Spell attack 430, mastery 80%"
      },
      {
        "Levels": 29,
        "Effect": "MP -51; Spell attack 440, mastery 80%"
      },
      {
        "Levels": 30,
        "Effect": "MP -50; Spell attack 450, mastery 80%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Mana Reflection",
      "src": manaReflection
    },
    "Skill Name": "Mana Reflection",
    "Master Level": 0,
    "Description": "By drawing on incredible inner strength, enables one to reverse the flow of Mana back to the monster, returning the damage received from the monster. The returned damage cannot exceed 20% of maxHP of the monster.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -26; For 10 seconds, with 31% success rate, returns 55% of magic damage received back to enemy"
      },
      {
        "Levels": 2,
        "Effect": "MP -27; For 20 seconds, with 32% success rate, returns 60% of magic damage received back to enemy"
      },
      {
        "Levels": 3,
        "Effect": "MP -28; For 30 seconds, with 33% success rate, returns 65% of magic damage received back to enemy"
      },
      {
        "Levels": 4,
        "Effect": "MP -29; For 40 seconds, with 34% success rate, returns 70% of magic damage received back to enemy"
      },
      {
        "Levels": 5,
        "Effect": "MP -30; For 50 seconds, with 35% success rate, returns 75% of magic damage received back to enemy"
      },
      {
        "Levels": 6,
        "Effect": "MP -31; For 60 seconds, with 36% success rate, returns 80% of magic damage received back to enemy"
      },
      {
        "Levels": 7,
        "Effect": "MP -32; For 70 seconds, with 37% success rate, returns 85% of magic damage received back to enemy"
      },
      {
        "Levels": 8,
        "Effect": "MP -33; For 80 seconds, with 38% success rate, returns 90% of magic damage received back to enemy"
      },
      {
        "Levels": 9,
        "Effect": "MP -34; For 90 seconds, with 39% success rate, returns 95% of magic damage received back to enemy"
      },
      {
        "Levels": 10,
        "Effect": "MP -35; For 100 seconds, with 40% success rate, returns 100% of magic damage received back to enemy"
      },
      {
        "Levels": 11,
        "Effect": "MP -36; For 110 seconds, with 41% success rate, returns 105% of magic damage received back to enemy"
      },
      {
        "Levels": 12,
        "Effect": "MP -37; For 120 seconds, with 42% success rate, returns 110% of magic damage received back to enemy"
      },
      {
        "Levels": 13,
        "Effect": "MP -38; For 130 seconds, with 43% success rate, returns 115% of magic damage received back to enemy"
      },
      {
        "Levels": 14,
        "Effect": "MP -39; For 140 seconds, with 44% success rate, returns 120% of magic damage received back to enemy"
      },
      {
        "Levels": 15,
        "Effect": "MP -40; For 150 seconds, with 45% success rate, returns 125% of magic damage received back to enemy"
      },
      {
        "Levels": 16,
        "Effect": "MP -41; For 160 seconds, with 46% success rate, returns 130% of magic damage received back to enemy"
      },
      {
        "Levels": 17,
        "Effect": "MP -42; For 170 seconds, with 47% success rate, returns 135% of magic damage received back to enemy"
      },
      {
        "Levels": 18,
        "Effect": "MP -43; For 180 seconds, with 48% success rate, returns 140% of magic damage received back to enemy"
      },
      {
        "Levels": 19,
        "Effect": "MP -44; For 190 seconds, with 49% success rate, returns 145% of magic damage received back to enemy"
      },
      {
        "Levels": 20,
        "Effect": "MP -45; For 200 seconds, with 50% success rate, returns 150% of magic damage received back to enemy"
      },
      {
        "Levels": 21,
        "Effect": "MP -46; For 205 seconds, with 51% success rate, returns 155% of magic damage received back to enemy"
      },
      {
        "Levels": 22,
        "Effect": "MP -47; For 210 seconds, with 52% success rate, returns 160% of magic damage received back to enemy"
      },
      {
        "Levels": 23,
        "Effect": "MP -48; For 215 seconds, with 53% success rate, returns 165% of magic damage received back to enemy"
      },
      {
        "Levels": 24,
        "Effect": "MP -49; For 220 seconds, with 54% success rate, returns 170% of magic damage received back to enemy"
      },
      {
        "Levels": 25,
        "Effect": "MP -50; For 225 seconds, with 55% success rate, returns 175% of magic damage received back to enemy"
      },
      {
        "Levels": 26,
        "Effect": "MP -49; For 230 seconds, with 56% success rate, returns 180% of magic damage received back to enemy"
      },
      {
        "Levels": 27,
        "Effect": "MP -48; For 235 seconds, with 57% success rate, returns 185% of magic damage received back to enemy"
      },
      {
        "Levels": 28,
        "Effect": "MP -47; For 240 seconds, with 58% success rate, returns 190% of magic damage received back to enemy"
      },
      {
        "Levels": 29,
        "Effect": "MP -46; For 245 seconds, with 59% success rate, returns 195% of magic damage received back to enemy"
      },
      {
        "Levels": 30,
        "Effect": "MP -45; For 250 seconds, with 60% success rate, returns 200% of magic damage received back to enemy"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Bahamut",
      "src": bahamut
    },
    "Skill Name": "Bahamut",
    "Master Level": 0,
    "Description": "Temporarily summons Bahamut, a holy dragon. Attacks up to 3 monsters.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -13; Attack 113%, for 15 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -16; Attack 116%, for 20 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -19; Attack 119%, for 25 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -22; Attack 122%, for 30 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -25; Attack 125%, for 35 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -28; Attack 128%, for 40 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -31; Attack 131%, for 45 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -34; Attack 134%, for 50 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -37; Attack 137%, for 55 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -40; Attack 140%, for 60 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -43; Attack 144%, for 65 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -46; Attack 148%, for 70 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -49; Attack 152%, for 75 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -52; Attack 156%, for 80 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -55; Attack 160%, for 85 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -58; Attack 164%, for 90 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -61; Attack 168%, for 95 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -64; Attack 172%, for 100 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -67; Attack 176%, for 105 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -70; Attack 180%, for 110 seconds"
      },
      {
        "Levels": 21,
        "Effect": "MP -73; Attack 185%, for 115 seconds"
      },
      {
        "Levels": 22,
        "Effect": "MP -76; Attack 190%, for 120 seconds"
      },
      {
        "Levels": 23,
        "Effect": "MP -79; Attack 195%, for 125 seconds"
      },
      {
        "Levels": 24,
        "Effect": "MP -82; Attack 200%, for 130 seconds"
      },
      {
        "Levels": 25,
        "Effect": "MP -85; Attack 205%, for 135 seconds"
      },
      {
        "Levels": 26,
        "Effect": "MP -88; Attack 210%, for 140 seconds"
      },
      {
        "Levels": 27,
        "Effect": "MP -91; Attack 215%, for 145 seconds"
      },
      {
        "Levels": 28,
        "Effect": "MP -94; Attack 220%, for 150 seconds"
      },
      {
        "Levels": 29,
        "Effect": "MP -97; Attack 225%, for 155 seconds"
      },
      {
        "Levels": 30,
        "Effect": "MP -100; Attack 230%, for 160 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Infinity",
      "src": infinity
    },
    "Skill Name": "Infinity",
    "Master Level": 0,
    "Description": "Cooldown: 10 minutes",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "For 11 seconds, Mana is left intacted"
      },
      {
        "Levels": 2,
        "Effect": "For 12 seconds, Mana is left intacted"
      },
      {
        "Levels": 3,
        "Effect": "For 13 seconds, Mana is left intacted"
      },
      {
        "Levels": 4,
        "Effect": "For 14 seconds, Mana is left intacted"
      },
      {
        "Levels": 5,
        "Effect": "For 15 seconds, Mana is left intacted"
      },
      {
        "Levels": 6,
        "Effect": "For 16 seconds, Mana is left intacted"
      },
      {
        "Levels": 7,
        "Effect": "For 17 seconds, Mana is left intacted"
      },
      {
        "Levels": 8,
        "Effect": "For 18 seconds, Mana is left intacted"
      },
      {
        "Levels": 9,
        "Effect": "For 19 seconds, Mana is left intacted"
      },
      {
        "Levels": 10,
        "Effect": "For 20 seconds, Mana is left intacted"
      },
      {
        "Levels": 11,
        "Effect": "For 21 seconds, Mana is left intacted"
      },
      {
        "Levels": 12,
        "Effect": "For 22 seconds, Mana is left intacted"
      },
      {
        "Levels": 13,
        "Effect": "For 23 seconds, Mana is left intacted"
      },
      {
        "Levels": 14,
        "Effect": "For 24 seconds, Mana is left intacted"
      },
      {
        "Levels": 15,
        "Effect": "For 25 seconds, Mana is left intacted"
      },
      {
        "Levels": 16,
        "Effect": "For 26 seconds, Mana is left intacted"
      },
      {
        "Levels": 17,
        "Effect": "For 27 seconds, Mana is left intacted"
      },
      {
        "Levels": 18,
        "Effect": "For 28 seconds, Mana is left intacted"
      },
      {
        "Levels": 19,
        "Effect": "For 29 seconds, Mana is left intacted"
      },
      {
        "Levels": 20,
        "Effect": "For 30 seconds, Mana is left intacted"
      },
      {
        "Levels": 21,
        "Effect": "For 31 seconds, Mana is left intacted"
      },
      {
        "Levels": 22,
        "Effect": "For 32 seconds, Mana is left intacted"
      },
      {
        "Levels": 23,
        "Effect": "For 33 seconds, Mana is left intacted"
      },
      {
        "Levels": 24,
        "Effect": "For 34 seconds, Mana is left intacted"
      },
      {
        "Levels": 25,
        "Effect": "For 35 seconds, Mana is left intacted"
      },
      {
        "Levels": 26,
        "Effect": "For 36 seconds, Mana is left intacted"
      },
      {
        "Levels": 27,
        "Effect": "For 37 seconds, Mana is left intacted"
      },
      {
        "Levels": 28,
        "Effect": "For 38 seconds, Mana is left intacted"
      },
      {
        "Levels": 29,
        "Effect": "For 39 seconds, Mana is left intacted"
      },
      {
        "Levels": 30,
        "Effect": "For 40 seconds, Mana is left intacted"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Holy Shield",
      "src": holyShield
    },
    "Skill Name": "Holy Shield",
    "Master Level": 0,
    "Description": "Cooldown: 2 minutes",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -12; Last for 11 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -14; Last for 12 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -16; Last for 13 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -18; Last for 14 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -20; Last for 15 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -22; Last for 16 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -24; Last for 17 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -26; Last for 18 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -28; Last for 19 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -30; Last for 20 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -22; Last for 21 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -24; Last for 22 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -26; Last for 23 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -28; Last for 24 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -30; Last for 25 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -32; Last for 26 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -34; Last for 27 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -36; Last for 28 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -38; Last for 29 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -40; Last for 30 seconds"
      },
      {
        "Levels": 21,
        "Effect": "MP -31; Last for 31 seconds"
      },
      {
        "Levels": 22,
        "Effect": "MP -32; Last for 32 seconds"
      },
      {
        "Levels": 23,
        "Effect": "MP -33; Last for 33 seconds"
      },
      {
        "Levels": 24,
        "Effect": "MP -34; Last for 34 seconds"
      },
      {
        "Levels": 25,
        "Effect": "MP -35; Last for 35 seconds"
      },
      {
        "Levels": 26,
        "Effect": "MP -36; Last for 36 seconds"
      },
      {
        "Levels": 27,
        "Effect": "MP -37; Last for 37 seconds"
      },
      {
        "Levels": 28,
        "Effect": "MP -38; Last for 38 seconds"
      },
      {
        "Levels": 29,
        "Effect": "MP -39; Last for 39 seconds"
      },
      {
        "Levels": 30,
        "Effect": "MP -40; Last for 40 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Resurrection",
      "src": resurrection
    },
    "Skill Name": "Resurrection",
    "Master Level": 0,
    "Description": "Instantly resurrects nearby dead party members. Will not go into cooldown if there is no dead member in the party.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -85; Revives party member(s) with 10% HP,\\n Cooldown: 57 minutes"
      },
      {
        "Levels": 2,
        "Effect": "MP -80; Revives party member(s) with 20% HP,\\n Cooldown: 54 minutes"
      },
      {
        "Levels": 3,
        "Effect": "MP -75; Revives party member(s) with 30% HP,\\n Cooldown: 51 minutes"
      },
      {
        "Levels": 4,
        "Effect": "MP -70; Revives party member(s) with 40% HP,\\n Cooldown: 48 minutes"
      },
      {
        "Levels": 5,
        "Effect": "MP -65; Revives party member(s) with 50% HP,\\n Cooldown: 45 minutes"
      },
      {
        "Levels": 6,
        "Effect": "MP -60; Revives party member(s) with 60% HP,\\n Cooldown: 42 minutes"
      },
      {
        "Levels": 7,
        "Effect": "MP -55; Revives party member(s) with 70% HP,\\n Cooldown: 39 minutes"
      },
      {
        "Levels": 8,
        "Effect": "MP -50; Revives party member(s) with 80% HP,\\n Cooldown: 36 minutes"
      },
      {
        "Levels": 9,
        "Effect": "MP -45; Revives party member(s) with 90% HP,\\n Cooldown: 33 minutes"
      },
      {
        "Levels": 10,
        "Effect": "MP -40; Revives party member(s) with 100% HP,\\n Cooldown: 30 minutes"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Angel Ray",
      "src": angelRay
    },
    "Skill Name": "Angel Ray",
    "Master Level": 0,
    "Description": "Attacks a single monster with a holy arrow, incurring tremendous holy damage.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -16; Spell attack 223, mastery 15%"
      },
      {
        "Levels": 2,
        "Effect": "MP -16; Spell attack 226, mastery 15%"
      },
      {
        "Levels": 3,
        "Effect": "MP -16; Spell attack 229, mastery 15%"
      },
      {
        "Levels": 4,
        "Effect": "MP -16; Spell attack 232, mastery 20%"
      },
      {
        "Levels": 5,
        "Effect": "MP -16; Spell attack 235, mastery 20%"
      },
      {
        "Levels": 6,
        "Effect": "MP -16; Spell attack 238, mastery 20%"
      },
      {
        "Levels": 7,
        "Effect": "MP -16; Spell attack 241, mastery 25%"
      },
      {
        "Levels": 8,
        "Effect": "MP -16; Spell attack 244, mastery 25%"
      },
      {
        "Levels": 9,
        "Effect": "MP -16; Spell attack 247, mastery 25%"
      },
      {
        "Levels": 10,
        "Effect": "MP -16; Spell attack 250, mastery 30%"
      },
      {
        "Levels": 11,
        "Effect": "MP -24; Spell attack 254, mastery 30%"
      },
      {
        "Levels": 12,
        "Effect": "MP -24; Spell attack 258, mastery 30%"
      },
      {
        "Levels": 13,
        "Effect": "MP -24; Spell attack 262, mastery 35%"
      },
      {
        "Levels": 14,
        "Effect": "MP -24; Spell attack 266, mastery 35%"
      },
      {
        "Levels": 15,
        "Effect": "MP -24; Spell attack 270, mastery 35%"
      },
      {
        "Levels": 16,
        "Effect": "MP -24; Spell attack 274, mastery 40%"
      },
      {
        "Levels": 17,
        "Effect": "MP -24; Spell attack 278, mastery 40%"
      },
      {
        "Levels": 18,
        "Effect": "MP -24; Spell attack 282, mastery 40%"
      },
      {
        "Levels": 19,
        "Effect": "MP -24; Spell attack 286, mastery 45%"
      },
      {
        "Levels": 20,
        "Effect": "MP -24; Spell attack 290, mastery 45%"
      },
      {
        "Levels": 21,
        "Effect": "MP -30; Spell attack 295, mastery 45%"
      },
      {
        "Levels": 22,
        "Effect": "MP -30; Spell attack 300, mastery 50%"
      },
      {
        "Levels": 23,
        "Effect": "MP -30; Spell attack 305, mastery 50%"
      },
      {
        "Levels": 24,
        "Effect": "MP -30; Spell attack 310, mastery 50%"
      },
      {
        "Levels": 25,
        "Effect": "MP -30; Spell attack 315, mastery 55%"
      },
      {
        "Levels": 26,
        "Effect": "MP -29; Spell attack 320, mastery 55%"
      },
      {
        "Levels": 27,
        "Effect": "MP -28; Spell attack 325, mastery 55%"
      },
      {
        "Levels": 28,
        "Effect": "MP -27; Spell attack 330, mastery 60%"
      },
      {
        "Levels": 29,
        "Effect": "MP -26; Spell attack 335, mastery 60%"
      },
      {
        "Levels": 30,
        "Effect": "MP -25; Spell attack 340, mastery 60%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Genesis",
      "src": genesis
    },
    "Skill Name": "Genesis",
    "Master Level": 0,
    "Description": "A holy ray of light shines down from the sky, burning up to 15 monsters at one time. Incurs tremendous holy damage to the targets.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -2100; Spell attack 430"
      },
      {
        "Levels": 2,
        "Effect": "MP -2200; Spell attack 440"
      },
      {
        "Levels": 3,
        "Effect": "MP -2300; Spell attack 450"
      },
      {
        "Levels": 4,
        "Effect": "MP -2400; Spell attack 460"
      },
      {
        "Levels": 5,
        "Effect": "MP -2500; Spell attack 470"
      },
      {
        "Levels": 6,
        "Effect": "MP -2600; Spell attack 480"
      },
      {
        "Levels": 7,
        "Effect": "MP -2700; Spell attack 490"
      },
      {
        "Levels": 8,
        "Effect": "MP -2800; Spell attack 500"
      },
      {
        "Levels": 9,
        "Effect": "MP -2900; Spell attack 510"
      },
      {
        "Levels": 10,
        "Effect": "MP -3000; Spell attack 520"
      },
      {
        "Levels": 11,
        "Effect": "MP -3100; Spell attack 530"
      },
      {
        "Levels": 12,
        "Effect": "MP -3200; Spell attack 540"
      },
      {
        "Levels": 13,
        "Effect": "MP -3300; Spell attack 550"
      },
      {
        "Levels": 14,
        "Effect": "MP -3400; Spell attack 560"
      },
      {
        "Levels": 15,
        "Effect": "MP -3500; Spell attack 570"
      },
      {
        "Levels": 16,
        "Effect": "MP -3600; Spell attack 580"
      },
      {
        "Levels": 17,
        "Effect": "MP -3700; Spell attack 590"
      },
      {
        "Levels": 18,
        "Effect": "MP -3800; Spell attack 600"
      },
      {
        "Levels": 19,
        "Effect": "MP -3900; Spell attack 610"
      },
      {
        "Levels": 20,
        "Effect": "MP -4000; Spell attack 620"
      },
      {
        "Levels": 21,
        "Effect": "MP -3950; Spell attack 625"
      },
      {
        "Levels": 22,
        "Effect": "MP -3900; Spell attack 630"
      },
      {
        "Levels": 23,
        "Effect": "MP -3850; Spell attack 635"
      },
      {
        "Levels": 24,
        "Effect": "MP -3800; Spell attack 640"
      },
      {
        "Levels": 25,
        "Effect": "MP -3750; Spell attack 645"
      },
      {
        "Levels": 26,
        "Effect": "MP -3700; Spell attack 650"
      },
      {
        "Levels": 27,
        "Effect": "MP -3650; Spell attack 655"
      },
      {
        "Levels": 28,
        "Effect": "MP -3600; Spell attack 660"
      },
      {
        "Levels": 29,
        "Effect": "MP -3550; Spell attack 665"
      },
      {
        "Levels": 30,
        "Effect": "MP -3500; Spell attack 670"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Hero's Will",
      "src": herosWill
    },
    "Skill Name": "Hero's Will",
    "Master Level": 0,
    "Description": "Enables one to shrug off the seduce status condition.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -30; Cooldown: 10 minutes"
      },
      {
        "Levels": 2,
        "Effect": "MP -30; Cooldown: 9 minutes"
      },
      {
        "Levels": 3,
        "Effect": "MP -30; Cooldown: 8 minutes"
      },
      {
        "Levels": 4,
        "Effect": "MP -30; Cooldown: 7 minutes"
      },
      {
        "Levels": 5,
        "Effect": "MP -30; Cooldown: 6 minutes"
      }
    ],
    "Type": "Active"
  }
];