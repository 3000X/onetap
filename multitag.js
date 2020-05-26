/// FATALITY TAG, GAMESENSE TAG, ONETAP TAG, RAIMBOWHOOK TAG, STARS.WIN TAG
UI.AddDropdown( "Custom ClanTag", [ "Off", "3000X", "[ot]", "gamesense", "onetap.su", "RainbowHook", "fatality", "stars.win", ] ); /// TAG 
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 ); /// SPEED FOR TAG, FOR REEL TAG PUT 3
UI.AddLabel("Create by 3000X");
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
/// CUSTOM ONETAP TAG #1
    if(tag == 1)
            {
            switch((time) % 65)
            {
			case 0: { Local.SetClanTag("$"); break; }
			case 1: { Local.SetClanTag("S"); break; }
			case 2: { Local.SetClanTag("S✞"); break; }
			case 3: { Local.SetClanTag("St@"); break; }
			case 4: { Local.SetClanTag("Sta"); break; }
			case 5: { Local.SetClanTag("Sta\\"); break; }
			case 6: { Local.SetClanTag("Sta\\|"); break; }
			case 7: { Local.SetClanTag("Sta\\|/"); break; }
			case 8: { Local.SetClanTag("Stay"); break; }
			case 9: { Local.SetClanTag("Stay |"); break; }
			case 10: { Local.SetClanTag("Stay |\\"); break; }
			case 11: { Local.SetClanTag("Stay |\\/"); break; }
			case 12: { Local.SetClanTag("Stay |\\/|"); break; }
			case 13: { Local.SetClanTag("Stay M"); break; }
			case 14: { Local.SetClanTag("Stay M@"); break; }
			case 15: { Local.SetClanTag("Stay Ma"); break; }
			case 16: { Local.SetClanTag("Stay Ma|"); break; }
			case 17: { Local.SetClanTag("Stay Ma|}"); break; }
			case 18: { Local.SetClanTag("Stay MaD"); break; }
			case 19: { Local.SetClanTag("Stay Mad."); break; }
			case 20: { Local.SetClanTag("Stay Mad."); break; }
			case 21: { Local.SetClanTag("Stay Mad."); break; }
			case 22: { Local.SetClanTag("Stay Mad."); break; }
			case 23: { Local.SetClanTag("Stay Mad."); break; }
			case 24: { Local.SetClanTag("Stay Mad."); break; }
			case 25: { Local.SetClanTag("Stay Mad."); break; }
			case 26: { Local.SetClanTag("Stay Mad."); break; }
			case 27: { Local.SetClanTag("Stay Mad."); break; }
			case 28: { Local.SetClanTag("$"); break; }
			case 29: { Local.SetClanTag("S"); break; }
			case 30: { Local.SetClanTag("S✞"); break; }
			case 31: { Local.SetClanTag("St@"); break; }
			case 32: { Local.SetClanTag("Sta"); break; }
			case 33: { Local.SetClanTag("Sta\\"); break; }
			case 34: { Local.SetClanTag("Sta\\|"); break; }
			case 35: { Local.SetClanTag("Sta\\|/"); break; }
			case 36: { Local.SetClanTag("Stay"); break; }
			case 37: { Local.SetClanTag("Stay 0"); break; }
			case 38: { Local.SetClanTag("Stay O"); break; }
			case 39: { Local.SetClanTag("Stay O|"); break; }
			case 40: { Local.SetClanTag("Stay O|\\"); break; }
			case 41: { Local.SetClanTag("Stay O|\\|"); break; }
			case 42: { Local.SetClanTag("Stay On"); break; }
			case 43: { Local.SetClanTag("Stay On3"); break; }
			case 44: { Local.SetClanTag("Stay One✞"); break; }
			case 45: { Local.SetClanTag("Stay Onet"); break; }
			case 46: { Local.SetClanTag("Stay Onet@"); break; }
			case 47: { Local.SetClanTag("Stay Oneta₽"); break; }
			case 48: { Local.SetClanTag("Stay Onetap"); break; }
			case 49: { Local.SetClanTag("Stay Onetap."); break; }
			case 50: { Local.SetClanTag("Stay Onetap."); break; }
			case 51: { Local.SetClanTag("Stay Onetap."); break; }
			case 52: { Local.SetClanTag("Stay Onetap."); break; }
			case 53: { Local.SetClanTag("Stay Onetap."); break; }
			case 54: { Local.SetClanTag("Stay Onetap."); break; }
			case 55: { Local.SetClanTag("Stay Onetap."); break; }
			case 56: { Local.SetClanTag("Stay Onetap."); break; }
			case 57: { Local.SetClanTag("Stay Onetap."); break; }
			case 58: { Local.SetClanTag("Stay Onetap."); break; }
			case 59: { Local.SetClanTag("#3. comeback"); break; }
			case 60: { Local.SetClanTag("#3. comeback"); break; }
			case 61: { Local.SetClanTag("#3. comeback"); break; }
			case 62: { Local.SetClanTag("#3. comeback"); break; }
			case 63: { Local.SetClanTag("#3. comeback"); break; }
			case 64: { Local.SetClanTag("#3. comeback"); break; }
			case 65: { Local.SetClanTag("#3. comeback"); break; }
			}				
		}
/// CUSTOM ONETAP TAG #2
		if(tag == 2)
			{
            switch((time) % 52)
            {
			case 0: { Local.SetClanTag("["); break; }
            case 1: { Local.SetClanTag("[."); break; }
            case 2: { Local.SetClanTag("[.."); break; }
            case 3: { Local.SetClanTag("[..."); break; }
            case 4: { Local.SetClanTag("[...."); break; }
            case 5: { Local.SetClanTag("[....."); break; }
            case 6: { Local.SetClanTag("[....."); break; }
            case 7: { Local.SetClanTag("[......"); break; }
            case 8: { Local.SetClanTag("[......"); break; }
            case 9: { Local.SetClanTag("[......."); break; }
            case 10:{ Local.SetClanTag("[........"); break; }
            case 11:{ Local.SetClanTag("[........."); break; }
			case 12:{ Local.SetClanTag("[.........."); break; }
			case 13:{ Local.SetClanTag("[o.........]"); break; }
			case 14:{ Local.SetClanTag("[on........]"); break; }
            case 15:{ Local.SetClanTag("[one.......]"); break; }
            case 16:{ Local.SetClanTag("[onet......]"); break; }
            case 17:{ Local.SetClanTag("[oneta.....]"); break; }
            case 18:{ Local.SetClanTag("[onetap....]"); break; }
            case 19:{ Local.SetClanTag("[onetap....]"); break; }
            case 20:{ Local.SetClanTag("[onetap.c..]"); break; }
            case 21:{ Local.SetClanTag("[onetap.co.]"); break; }
            case 22:{ Local.SetClanTag("[onetap.com]"); break; }
			case 23:{ Local.SetClanTag("[onetap.com]"); break; }
            case 24:{ Local.SetClanTag("[onetap.com]"); break; }
			case 25:{ Local.SetClanTag("[onetap.com]"); break; }
			case 26:{ Local.SetClanTag("[onetap.com]"); break; }
			case 27:{ Local.SetClanTag("[onetap.com]"); break; }
			case 28:{ Local.SetClanTag("[onetap.com]"); break; }
			case 29:{ Local.SetClanTag("[onetap.com]"); break; }
			case 30:{ Local.SetClanTag("[onetap.com]"); break; }
			case 31:{ Local.SetClanTag("[onetap.co.]"); break; }
			case 32:{ Local.SetClanTag("[onetap.c..]"); break; }
            case 33:{ Local.SetClanTag("[onetap....]"); break; }
			case 34:{ Local.SetClanTag("[onetap....]"); break; }
			case 35:{ Local.SetClanTag("[oneta.....]"); break; }
			case 36:{ Local.SetClanTag("[onet......]"); break; }
			case 37:{ Local.SetClanTag("[one.......]"); break; }
            case 38:{ Local.SetClanTag("[on........]"); break; }
			case 39:{ Local.SetClanTag("[o.........]"); break; }
			case 40:{ Local.SetClanTag("[..........]"); break; }
			case 41:{ Local.SetClanTag("[.........."); break; }
			case 42:{ Local.SetClanTag("[........."); break; }
            case 43:{ Local.SetClanTag("[........"); break; }
			case 44:{ Local.SetClanTag("[......."); break; }
			case 45:{ Local.SetClanTag("[......"); break; }
			case 46:{ Local.SetClanTag("[....."); break; }
			case 47:{ Local.SetClanTag("[...."); break; }
			case 48:{ Local.SetClanTag("[..."); break; }
			case 49:{ Local.SetClanTag("[.."); break; }
			case 50:{ Local.SetClanTag("[."); break; }
			case 51:{ Local.SetClanTag("["); break; }
			case 52:{ Local.SetClanTag(""); break; }
			}
		}
/// GAMESENSE TAG
		if(tag == 3)
			{
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 g"); break; }
            case 2: { Local.SetClanTag("                ga"); break; }
            case 3: { Local.SetClanTag("               gam"); break; }
            case 4: { Local.SetClanTag("              game"); break; }
            case 5: { Local.SetClanTag("             games"); break; }
            case 6: { Local.SetClanTag("            gamese"); break; }
            case 7: { Local.SetClanTag("           gamesen"); break; }
            case 8: { Local.SetClanTag("          gamesens"); break; }
            case 9: { Local.SetClanTag("         gamesense"); break; }
            case 10:{ Local.SetClanTag("        gamesense "); break; }
            case 11:{ Local.SetClanTag("       gamesense  "); break; }
            case 12:{ Local.SetClanTag("      gamesense   "); break; }
            case 13:{ Local.SetClanTag("     gamesense    "); break; }
            case 14:{ Local.SetClanTag("    gamesense     "); break; }
            case 15:{ Local.SetClanTag("   gamesense     "); break; }
            case 16:{ Local.SetClanTag("  gamesense       "); break; }
            case 17:{ Local.SetClanTag(" gamesense        "); break; }
            case 18:{ Local.SetClanTag("gamesense         "); break; }
            case 19:{ Local.SetClanTag("amesense         "); break; }
            case 20:{ Local.SetClanTag("mesense           "); break; }
            case 21:{ Local.SetClanTag("esense            "); break; }
            case 22:{ Local.SetClanTag("sense             "); break; }
            case 23:{ Local.SetClanTag("ense             "); break; }
            case 24:{ Local.SetClanTag("nse               "); break; }
            case 25:{ Local.SetClanTag("se                "); break; }
            case 26:{ Local.SetClanTag("e                 "); break; }
			}
		}
/// ONETAP TAG
		if(tag == 4)
			{
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 o"); break; }
            case 2: { Local.SetClanTag("                on"); break; }
            case 3: { Local.SetClanTag("               one"); break; }
            case 4: { Local.SetClanTag("              onet"); break; }
            case 5: { Local.SetClanTag("             oneta"); break; }
            case 6: { Local.SetClanTag("            onetap"); break; }
            case 7: { Local.SetClanTag("           onetap."); break; }
            case 8: { Local.SetClanTag("          onetap.s"); break; }
            case 9: { Local.SetClanTag("         onetap.su"); break; }
            case 10:{ Local.SetClanTag("        onetap.su "); break; }
            case 11:{ Local.SetClanTag("       onetap.su  "); break; }
            case 12:{ Local.SetClanTag("      onetap.su   "); break; }
            case 13:{ Local.SetClanTag("     onetap.su    "); break; }
            case 14:{ Local.SetClanTag("    onetap.su     "); break; }
            case 15:{ Local.SetClanTag("   onetap.su      "); break; }
            case 16:{ Local.SetClanTag("  onetap.su       "); break; }
            case 17:{ Local.SetClanTag(" onetap.su        "); break; }
            case 18:{ Local.SetClanTag("onetap.su         "); break; }
            case 19:{ Local.SetClanTag("netap.su          "); break; }
            case 20:{ Local.SetClanTag("etap.su           "); break; }
            case 21:{ Local.SetClanTag("tap.su            "); break; }
            case 22:{ Local.SetClanTag("ap.su             "); break; }
            case 23:{ Local.SetClanTag("p.su              "); break; }
            case 24:{ Local.SetClanTag(".su               "); break; }
            case 25:{ Local.SetClanTag("su                "); break; }
            case 26:{ Local.SetClanTag("u                 "); break; }
			}
		}
/// RAIMBOWHOOK TAG
		if(tag == 5)
			{
            switch((time) % 28)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 R"); break; }
            case 2: { Local.SetClanTag("                Ra"); break; }
            case 3: { Local.SetClanTag("               Rai"); break; }
            case 4: { Local.SetClanTag("              Rain"); break; }
            case 5: { Local.SetClanTag("             Rainb"); break; }
            case 6: { Local.SetClanTag("            Rainbo"); break; }
            case 7: { Local.SetClanTag("           Rainbow"); break; }
            case 8: { Local.SetClanTag("          RainbowH"); break; }
            case 9: { Local.SetClanTag("         RainbowHo"); break; }
			case 10:{ Local.SetClanTag("        RainbowHoo"); break; }
			case 11:{ Local.SetClanTag("       RainbowHook"); break; }
            case 12:{ Local.SetClanTag("      RainbowHook "); break; }
            case 13:{ Local.SetClanTag("     RainbowHook  "); break; }
            case 14:{ Local.SetClanTag("    RainbowHook   "); break; }
            case 15:{ Local.SetClanTag("   RainbowHook    "); break; }
            case 16:{ Local.SetClanTag("  RainbowHook     "); break; }
            case 17:{ Local.SetClanTag(" RainbowHook      "); break; }
            case 18:{ Local.SetClanTag("RainbowHook       "); break; }
            case 19:{ Local.SetClanTag("ainbowHook        "); break; }
            case 20:{ Local.SetClanTag("inbowHook         "); break; }
            case 21:{ Local.SetClanTag("nbowHook          "); break; }
            case 22:{ Local.SetClanTag("bowHook           "); break; }
            case 23:{ Local.SetClanTag("owHook            "); break; }
            case 24:{ Local.SetClanTag("wHook            "); break; }
            case 25:{ Local.SetClanTag("Hook             "); break; }
            case 26:{ Local.SetClanTag("ook             "); break; }
            case 27:{ Local.SetClanTag("ok             "); break; }
            case 28:{ Local.SetClanTag("k             "); break; }
			} 	
		}
/// STARS.WIN TAG
		if(tag == 7)
			{
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 s"); break; }
            case 2: { Local.SetClanTag("                st"); break; }
            case 3: { Local.SetClanTag("               sta"); break; }
            case 4: { Local.SetClanTag("              star"); break; }
            case 5: { Local.SetClanTag("             stars"); break; }
            case 6: { Local.SetClanTag("            stars."); break; }
            case 7: { Local.SetClanTag("           stars.w"); break; }
            case 8: { Local.SetClanTag("          stars.wi"); break; }
            case 9: { Local.SetClanTag("         stars.win"); break; }
            case 10:{ Local.SetClanTag("        stars.win "); break; }
            case 11:{ Local.SetClanTag("       stars.win  "); break; }
            case 12:{ Local.SetClanTag("      stars.win   "); break; }
            case 13:{ Local.SetClanTag("     stars.win    "); break; }
            case 14:{ Local.SetClanTag("    stars.win     "); break; }
            case 15:{ Local.SetClanTag("   stars.win      "); break; }
            case 16:{ Local.SetClanTag("  stars.win       "); break; }
            case 17:{ Local.SetClanTag(" stars.win        "); break; }
            case 18:{ Local.SetClanTag("stars.win         "); break; }
            case 19:{ Local.SetClanTag("tars.win          "); break; }
            case 20:{ Local.SetClanTag("ars.win           "); break; }
            case 21:{ Local.SetClanTag("rs.win            "); break; }
            case 22:{ Local.SetClanTag("s.win             "); break; }
            case 23:{ Local.SetClanTag(".win              "); break; }
            case 24:{ Local.SetClanTag("win               "); break; }
            case 25:{ Local.SetClanTag("in                "); break; }
            case 26:{ Local.SetClanTag("n                 "); break; }
			}
		}
/// FATALITY TAG
		if(tag == 6)
			{
            switch((time) % 25)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 f"); break; }
            case 2: { Local.SetClanTag("                fa"); break; }
            case 3: { Local.SetClanTag("               fat"); break; }
            case 4: { Local.SetClanTag("              fata"); break; }
            case 5: { Local.SetClanTag("             fatal"); break; }
            case 6: { Local.SetClanTag("            fatali"); break; }
            case 7: { Local.SetClanTag("           fatality"); break; }
            case 8: { Local.SetClanTag("          fatality"); break; }
            case 9: { Local.SetClanTag("         fatality."); break; }
            case 10:{ Local.SetClanTag("        fatality"); break; }
            case 11:{ Local.SetClanTag("       fatality"); break; }
            case 12:{ Local.SetClanTag("      fatality   "); break; }
            case 13:{ Local.SetClanTag("     fatality    "); break; }
            case 14:{ Local.SetClanTag("    fatality     "); break; }
            case 15:{ Local.SetClanTag("   fatality      "); break; }
            case 16:{ Local.SetClanTag("  fatality       "); break; }
            case 17:{ Local.SetClanTag(" fatality        "); break; }
            case 18:{ Local.SetClanTag("fatality	        "); break; }
            case 19:{ Local.SetClanTag("atality         "); break; }
            case 20:{ Local.SetClanTag("tality        "); break; }
            case 21:{ Local.SetClanTag("ality           "); break; }
            case 22:{ Local.SetClanTag("lity          "); break; }
            case 23:{ Local.SetClanTag("ity             "); break; }
            case 24:{ Local.SetClanTag("ty              "); break; }
            case 25:{ Local.SetClanTag("y              "); break; }

			}
		}				
	}
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");
