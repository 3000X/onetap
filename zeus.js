UI.AddCheckbox("ZeusHitchance"); // ui shit
UI.AddSliderFloat("Hitchance", 1, 100);
UI.AddSliderFloat("Accuracy Boost", 1, 100);
UI.AddLabel("Create by 3000X");

var beforeHT = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance");
var beforeAB = UI.GetValue("Rage", "GENERAL", "Accuracy", "Accuracy boost");
function zeusHCAC() {
if (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "ZeusHitchance")) {
    player = Entity.GetLocalPlayer(); weapon = Entity.GetWeapon(player); weaponName = Entity.GetName(weapon);
    if (weaponName.includes("zeus")) {
            UI.SetValue( "Rage", "GENERAL", "Accuracy", "Hitchance", UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Accuracy Boost"))
            UI.SetValue( "Rage", "GENERAL", "Accuracy", "Accuracy boost", UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitchance"))
        }else {
            UI.SetValue( "Rage", "GENERAL", "Accuracy", "Hitchance", beforeHT )
            UI.SetValue( "Rage", "GENERAL", "Accuracy", "Accuracy boost", beforeAB )
    }
  }
}

Global.RegisterCallback("Draw", "zeusHCAC");
