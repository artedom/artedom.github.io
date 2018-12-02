function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="dom" && password=="artedom") { window.location="https://artedom.github.io/menu.html"; done=1; }
//if (username=="outro" && password=="outrasenha") { window.location="http://www.seu_site.com.br"; done=1; }
if (done==0) { window.location="https://artedom.github.io/links/login1.html"; done=1; }
}
