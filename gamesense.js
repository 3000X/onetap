///GAMESENSE CLAN TAG FOR ONETAP USER.

const clantag = "gamesense        ";
var last_time = 0;
 
function onDraw()
{
    const now = Math.round(Globals.Curtime() * 2);
   
    if (now === last_time)
        return;
   
    last_time = now;
 
    const iterator = Math.abs(-clantag.length + (now) % (clantag.length * 2)) + 1;
    const tag = clantag.slice(0, -iterator);
 
    Local.SetClanTag(tag);
}
 
Cheat.RegisterCallback("Draw", "onDraw");
