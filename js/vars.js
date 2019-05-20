var birthMonth = 7;
var birthDay = 24;

var weatherAPIKey = "9bb4451bcbe5b3030f55f8f83f479f87"; // get one on https://darksky.net/dev, 1000 free calls per day, should be more than enough since it's only called when displayed.
var weatherLocation1 = {name:"Hesperia", lat:34.4443, lon:-117.3223}; // Dark Sky works with GPS coordinates, the name here only acts as a label.
var weatherLocation2 = {name:"Fontana", lat:34.1010, lon:-117.4415}; // Both locations are optional.

var proxyUrl = "proxy.php?url="; // If using FeedEX.js, this should point to a CORS friendly proxy since it's gonna be used to get RSS feeds. Included proxy.php is enough but needs a local web service or to be hosted somewhere.
moment.locale('en'); // Shouldn't matter

// Template: themes["directory(must be in img/)"] = [imageCount, filetype];
// Images must be named sequentially from 1 to imageCount. (use AntRenamer or whatever)
var themes = [];
themes["calm"] = [11,'jpg'];
themes["day"] = [13,'jpg'];
themes["lotr"] = [11,'jpg'];
themes["night"] = [15,'jpg'];
themes["pixel"] = [11,'png'];

var defaultTheme = "pixel"; 

// Default settings for the links, used whenever local storage is empty or unavailable.
var defaultFavboxes = {};
defaultFavboxes["favbox1"] = {title:"Social", items:[
	{link:"https://twitter.com/ivoe_", label:"Twitter"}, 
	{link:"https://www.facebook.com/ivoeZ", label:"Facebook"}, 
	{link:"https://discordapp.com/", label:"Discord"},
	{link:"https://steamcommunity.com/id/ivoe_/", label:"Steam"},
	{link:"https://www.instagram.com/_ivoe_/", label:"Instagram"},
	{link:"https://www.reddit.com/user/ivoe_", label:"Reddit"}]};

defaultFavboxes["favbox2"] = {title:"Media", items:[
	{link:"https://www.watchcartoononline.io/", label:"Anime Online"},
	{link:"https://www.primewire.cx/", label:"Prime Movies"},
	{link:"https://www.twitch.tv/", label:"Twitch"}, 
	{link:"http://imgur.com", label:"Imgur"},
	{link:"https://9anime.to/", label:"9Anime"},
	{link:"https://azmovies.xyz", label:"A-Z List"},
	{link:"https://www.youtube.com/", label:"YouTube"}]};

defaultFavboxes["favbox3"] = {title:"Misc", items:[ 
	{link:"https://aka.my/user", label:"Aka Links"},
	{link:"http://192.168.1.1/", label:"Router"},
	{link:"http://www.thesaurus.com/", label:"Thesaurus"},
	{link:"https://www.urbandictionary.com/", label:"urban Dictionary"},
	{link:"http://www.dictionary.com/", label:"Dictionary"},
	{link:"http://192.168.0.254/", label:"Freebox"}]};

defaultFavboxes["favbox4"] = {title:"Download", items:[
	{link:"https://torrentfreak.com/", label:"TorrentFreak"}, 
	{link:"https://rutracker.org/forum/index.php", label:"Rutracker"},
	{link:"http://outlook.com", label:"outlook"}, 
	{link:"https://www.techsupportalert.com", label:"Download Repo"}]};

defaultFavboxes["favbox5"] = {title:"Boards", items:[
	{link:"https://www.reddit.com/", label:"Reddit"}, 
	{link:"https://www.se7ensins.com/", label:"SevenSins"}, 
	{link:"https://www.thetechgame.com/", label:"TechGame"},
	{link:"https://www.xda-developers.com/", label:"Xda-Dev"},
	{link:"https://boards.4chan.org/", label:"4Chan"},
	{link:"http://myanimelist.net/", label:"AnimeList"}]};

defaultFavboxes["favbox6"] = {title:"Work", items:[
	{link:"https://www.gmx.com/", label:"Gmx"}, 
	{link:"https://www.twitch.tv/ivoe/dashboard/", label:"Twitch"},
	{link:"https://bot.smokey.wtf/?p=dashboard", label:"SmokeyBot"},
	{link:"https://streamlabs.com/dashboard#/stats", label:"StreamLabs"},
	{link:"https://account.skrill.com/wallet/ng/dashboard", label:"Skrill $"},
	{link:"https://www.Indeed.com/", label:"Indeed"}]};

var newsFeeds = [];
newsFeeds["GameInfo"] = {
	Title: "Informer", // Title of the box
	SiteUrl: "https://www.gameinformer.com/news", // Clicking on the title will redirect here
	FeedUrl: "https://www.gameinformer.com/news.xml" // Feed to check
};
newsFeeds["News"] = {
	Title: "News", 
	SiteUrl: "https://www.siliconvalley.com/", 
	FeedUrl: "https://www.siliconvalley.com/rss/"
};