(function () {
    // var URL = "http://localhost:3000/";
    var URL = "https://app.unbird.com/";
  
    var boxDisplay  = 'none';
    var sourceId    = '';
    var publicKey   = '';
  
    function bootStrap () {
      // LOAD CSS
      var url  = 'css/widget.css',
          head = document.getElementsByTagName('head')[0],
          link = document.createElement('link');
  
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = url;
      head.appendChild(link);
  
      link.onload = function () {
        // APPEND HTML AFTER CSS LOADS
        appendHtml();
      };
    };
  
    function getStarted () {
      // $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', URL + 'scripts/widget.css') );
  
      // GET SOURCE ID AND PUBLIC KEY
      sourceId  = document.getElementById('lytics-script').getAttribute("data-set-id");
      publicKey = document.getElementById('lytics-script').getAttribute("public-key");
      bgColor   = document.getElementById('lytics-script').getAttribute("bg-color");
  
      if (bgColor) {
        $('feedback.widget .bubble').css('background-color', bgColor);
        $('feedback.widget .box .top').css('background-color', bgColor);
      }
  
      // OPEN BOX
      $('#an-nw1j0').on('click', function (e) {
        if (boxDisplay === 'none') {
          displayBox();
        } else {
          hideBox(false);
        }
      })
  
      // SEND MESSAGE
      $('#an-lut22ni').on('click', function (e) {
        sendMessage();
      })
    };
  
    function sendMessage () {
      if (!sourceId || !publicKey) return console.error('Please add your Data Source ID and Public Key to the script as attributes.')
  
      var data = {
        entry: $('#an-xn1s9').val(),
        properties: []
      };
  
      if (window && window.location && window.location.href) {
        data.properties.push({
          url: window.location.href
        });
      }
  
      if (!data.entry) return hideBox(false);
  
      $.ajax({
        type: "POST",
        url: URL + 'widget/entry/' + sourceId + '/' + publicKey,
        data: data
      })
      .done(function (response) {
        hideBox(true);
      })
      .fail(function (err) {
        console.error(err.responseText);
      })
    };
  
    function displayBox () {
      $('#an-pl1x8').css('display', 'flex');
      boxDisplay = 'flex';
      $('#an-xn1s9').focus();
  
      if (displayBox.hasLoadedBefore) return;
  
      displayBox.hasLoadedBefore = true;
      $('#an-xn1s9').keypress(function(e) {
        if(e.which == 13) {
          sendMessage();
        }
      });
    };
  
    function hideBox (removeText) {
      if (removeText) {
        $('#an-xn1s9').val('');
      }
  
      $('#an-pl1x8').css('display', 'none');
      boxDisplay = 'none';
    };
  
    function appendHtml () {
      var script = $('#lytics-script');
      script.after(`
        <feedback class="widget">
          <div class="bubble" id="an-nw1j0"></div>
          <div class="box" id="an-pl1x8">
            <div class="top">
              Was this site useful and were you able to register for one of our services?
            </div>
            <div class="bottom">
              <form autocomplete="off" onsubmit="return false;">
                <input type="text" id="an-xn1s9" placeholder="Send feedback..." />
                <div class="send" id="an-lut22ni"></div>
              </form>
            </div>
          </div>
        </feedback>
      `);
      getStarted();
    };
  
  
    // check if we have jquery
    if (window.jQuery) {
      $ = window.jQuery;
      bootStrap();
    } else {
      // Load the script
      var script = document.createElement("SCR" + "IPT");
      script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
      script.type = 'text/javascript';
      document.getElementsByTagName("head")[0].appendChild(script);
  
      // Poll for jQuery to come into existance
      var checkReady = function() {
  
        if (window.jQuery) {
          $ = window.jQuery;
          return bootStrap();
        }
  
        window.setTimeout(function() { checkReady(); }, 100);
      };
  
      // Start polling...
      checkReady();
    }
  })()