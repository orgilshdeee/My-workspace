const char = {
  name: prompt("Enter your character name:"),
  HP: 100,
  DMG: Math.floor(Math.random() * 10) + 1,
};

const slime = {
  name: "slime",
  HP: 100,
  DMG: Math.floor(Math.random() * 5) + 1,
};

document.getElementById("char").innerHTML = `${char.name} HP:${char.HP}`;
document.getElementById("slime").innerHTML = `${slime.name} HP:${slime.HP}`;
