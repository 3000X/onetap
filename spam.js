/// Script for spam word in online game.

var g_LastSendMessageTime = 0;
UI.AddLabel("Create by 3000X");
UI.AddLabel("  ");
function onCreateMove()
{
    if(!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Enable chat spammer"))
        return;

    var spamText = UI.GetString("MISC", "JAVASCRIPT", "Script Items", "Chat spammer text");

    if(spamText.length == 0)
        return;

    var g_CurrentTime = Global.Realtime();

    if(g_CurrentTime - g_LastSendMessageTime > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Chat spammer delay"))
    {
        Global.ExecuteCommand("say " + spamText);
        g_LastSendMessageTime = g_CurrentTime;
    }
}

Global.RegisterCallback("CreateMove", "onCreateMove");

UI.AddCheckbox("Enable chat spammer"); /// Enable/Disable
UI.AddSliderFloat("Chat spammer delay", 0.05, 180.0); /// Delay between spam word
UI.AddTextbox("Chat spammer text"); /// Word
