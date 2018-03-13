
    function makePasswd(passwd) {
        var passwd = '';
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (i=0; i<chars; i++) {
          var randomIndex = Math.floor(Math.random()*chars.length + 1);
          passwd += chars.charAt(randomIndex);
        }
        return passwd;
    }
      
   console.log(makePasswd(6));
      
      
