/*
*
*       Display an alert about cookies and privacy policy
*       By: @betoayesa (twitter)
*
*/
var CookiesAlert = {
    visits: 0,
    maxVisits: 3,
    message: "Utilizamos cookies de Google Analytics. Puedes consultar nuestro aviso legal y política de cookies",
    // CSS for the Alert's div
    style:"text-align:center;position:fixed;top: 50px; width:100%; height:50px;background:rgba(29,29,29,0.1);color:#4b4b4b;padding:10px",
    closeLabel: 'Cerrar',
    
    init: function(){    
        var self = this;
        if (localStorage){
            self.visits = localStorage.getItem('visits') || 0;
            self.visits++;
            localStorage.setItem('visits', self.visits); 
            // Don't show it anymore after maxVisits (reloads or page loads)
            if (self.visits < self.maxVisits){
                this.show();
            }            
        }else{
            // no localStorage support, show Cookies Alert always
            this.show();
        }    
    },
    show: function(){
        var self = this;
        // onClick removes alert and set visits to self.maxVisits
        var content = '<div id="cookiesAlert" style="'+self.style+'">'+self.message+' <a class="btn btn-success" id="closeCookiesAlert" onClick="localStorage.setItem(\'visits\','+self.maxVisits+');var elem = document.getElementById(\'cookiesAlert\');elem.parentNode.removeChild(elem);">'+self.closeLabel+'</a></div>';
        document.write(content);        
    }
}.init();
